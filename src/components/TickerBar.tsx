import React, { useEffect, useMemo, useRef, useState } from 'react';

interface TickerAsset {
  symbol: 'BTC' | 'ETH' | 'SOL';
  name: 'bitcoin' | 'ethereum' | 'solana';
  priceUsd: number;
  changePercent24Hr: number;
}

const assetsMap: Record<string, TickerAsset['symbol']> = {
  bitcoin: 'BTC',
  ethereum: 'ETH',
  solana: 'SOL',
};

const fetchPrices = async (): Promise<TickerAsset[]> => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true'
  );
  const json = await res.json();
  const data = json as Record<string, { usd: number; usd_24h_change: number }>; 
  const ids: Array<TickerAsset['name']> = ['bitcoin', 'ethereum', 'solana'];
  return ids.map((id) => ({
    symbol: assetsMap[id],
    name: id,
    priceUsd: Number(data[id]?.usd ?? 0),
    changePercent24Hr: Number(data[id]?.usd_24h_change ?? 0),
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
