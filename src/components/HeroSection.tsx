
import React from 'react';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Earth Observation Satellite and Mapping Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900">
        {/* Satellite orbit paths */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent transform rotate-12"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent transform -rotate-6"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform rotate-3"></div>
        </div>
        
        {/* Grid pattern for mapping/GIS theme */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Satellite icons scattered across the background */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-32 w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-40 w-5 h-5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/2 left-10 w-4 h-4 bg-green-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 right-10 w-3 h-3 bg-cyan-300 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
        </div>
        
        {/* Radar sweep effect */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-blue-400/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-green-400/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        
        {/* Geographic coordinate lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-green-400 to-transparent"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-green-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <img 
                src="/lovable-uploads/133250f4-a020-4733-8d3c-5ce26f9b577d.png" 
                alt="Julius I. Jimenez" 
                className="w-full h-full object-cover object-center"
                style={{
                  filter: 'contrast(1.1) brightness(1.05)',
                  objectPosition: 'center top'
                }}
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-green-400 bg-clip-text text-transparent">
            Julius I. Jimenez
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-4">
            Professional Agricultural and Biosystems Engineer (Lic.#8633) | PhD Scholar
          </p>
          
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Remote Sensing & GIS Specialist advancing water resources management through 
            innovative geospatial technologies and climate change adaptation research
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg">
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="border-blue-300 text-blue-100 hover:bg-blue-700/20 shadow-lg">
              <Mail className="mr-2" size={20} />
              Get in Touch
            </Button>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a 
              href="https://www.researchgate.net/profile/Julius-Jimenez?ev=hdr_xprf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 underline transition-colors"
            >
              ResearchGate
            </a>
            <span className="text-blue-400">•</span>
            <a 
              href="https://scholar.google.co.uk/citations?user=AE2wetMAAAAJ&hl=en&oi=ao" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 underline transition-colors"
            >
              Google Scholar
            </a>
            <span className="text-blue-400">•</span>
            <a 
              href="https://orcid.org/0009-0001-4036-8024" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 underline transition-colors"
            >
              ORCID
            </a>
            <span className="text-blue-400">•</span>
            <span className="text-blue-300">Web of Science: MSX-9873-2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
