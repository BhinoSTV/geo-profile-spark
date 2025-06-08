
import React from 'react';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-800/10 to-green-900/20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-green-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <img 
                src="/lovable-uploads/9127bafb-69a3-431c-8fc2-5b9fc1ed255f.png" 
                alt="Julius I. Jimenez" 
                className="w-full h-full object-cover object-center scale-150"
                style={{
                  filter: 'contrast(1.1) brightness(1.05)',
                  objectPosition: 'center 15%',
                  transform: 'scale(1.8) translateY(-10px)'
                }}
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-slate-700 to-green-600 bg-clip-text text-transparent">
            Julius I. Jimenez
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Professional Agricultural and Biosystems Engineer (Lic.#8633) | PhD Scholar
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Remote Sensing & GIS Specialist advancing water resources management through 
            innovative geospatial technologies and climate change adaptation research
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="mr-2" size={20} />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
