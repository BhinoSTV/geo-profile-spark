import React, { useEffect, useMemo, useRef, useState } from 'react';

interface TickerAsset {
  symbol: string; // e.g., BTC
  name: string;   // e.g., bitcoin
  priceUsd: number;
  changePercent24Hr: number;
}

// Common stablecoin symbols to exclude from the top list
const STABLECOIN_SYMBOLS = new Set([
  'USDT','USDC','BUSD','DAI','TUSD','USDP','UST','USTC','EURS','EURT','PYUSD','FDUSD'
]);

const fetchPrices = async (): Promise<TickerAsset[]> => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false&price_change_percentage=24h';
  const res = await fetch(url);
  const list = (await res.json()) as Array<{
    id: string;
    symbol: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number | null;
  }>;

  // Filter out stablecoins by symbol and take the top 10
  const filtered = list
    .filter((c) => !STABLECOIN_SYMBOLS.has(c.symbol.toUpperCase()))
    .slice(0, 10);

  return filtered.map((c) => ({
    symbol: c.symbol.toUpperCase(),
    name: c.id,
    priceUsd: Number(c.current_price ?? 0),
    changePercent24Hr: Number(c.price_change_percentage_24h ?? 0),
  }));
};

const PriceItem = ({ asset }: { asset: TickerAsset }) => {
  const positive = asset.changePercent24Hr >= 0;
  return (
    <div className="flex items-center gap-2 px-4 py-1">
      <span className="font-semibold text-[hsl(var(--primary-foreground))]">{asset.symbol}</span>
      <span className="text-sm text-[hsl(var(--primary-foreground))]/80">
        ${asset.priceUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </span>
      <span
        className={`text-xs font-medium ${
          positive ? 'text-[hsl(var(--trading-electric))]' : 'text-[hsl(var(--destructive))]'
        }`}
      >
        {positive ? '▲' : '▼'} {Math.abs(asset.changePercent24Hr).toFixed(2)}%
      </span>
    </div>
  );
};

const TickerBar: React.FC = () => {
  const [assets, setAssets] = useState<TickerAsset[]>([]);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const data = await fetchPrices();
        if (mounted) setAssets(data);
      } catch (e) {
        // fail silently
      }
    };
    load();
    intervalRef.current = window.setInterval(load, 10000);
    return () => {
      mounted = false;
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  const items = useMemo(() => (assets.length ? assets : [
    { symbol: 'BTC', name: 'bitcoin', priceUsd: 0, changePercent24Hr: 0 },
    { symbol: 'ETH', name: 'ethereum', priceUsd: 0, changePercent24Hr: 0 },
    { symbol: 'SOL', name: 'solana', priceUsd: 0, changePercent24Hr: 0 },
  ] as TickerAsset[]), [assets]);

  // Duplicate for seamless loop
  const loopItems = useMemo(() => [...items, ...items, ...items], [items]);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(var(--trading-bg)), hsl(var(--trading-bg)))',
      }}
      aria-label="Live crypto prices ticker"
    >
      <div
        className="flex items-center gap-6 px-4 h-9 bg-[hsl(var(--trading-bg))] border-b border-[hsl(var(--trading-electric))]/30"
        style={{
          boxShadow: '0 0 24px hsl(var(--trading-electric) / 0.35) inset, 0 1px 0 hsl(var(--trading-electric) / 0.25)',
        }}
      >
        <div className="shrink-0 text-xs tracking-wider font-semibold text-[hsl(var(--trading-electric))]">
          LIVE MARKETS
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-ticker whitespace-nowrap flex">
            {loopItems.map((a, i) => (
              <PriceItem key={`${a.symbol}-${i}`} asset={a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickerBar;
