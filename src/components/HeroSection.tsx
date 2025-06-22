
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';

const HeroSection = () => {
  const handleDownloadCV = () => {
    // Placeholder for CV download functionality
    console.log('Downloading CV...');
  };

  const handleContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Remote Sensing Themed Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900">
        {/* Satellite orbit paths */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-blue-300 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-green-300 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-cyan-300 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
        </div>
        
        {/* Grid overlay for GIS feel */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating data points */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Photo Section */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 sm:border-8 border-white/80 bg-gradient-to-br from-blue-100 to-green-100 backdrop-blur-sm">
                  <img 
                    src="/lovable-uploads/2cc4a410-dff6-4543-8307-efe683ae7f4e.png"
                    alt="Julius I. Jimenez - Professional Agricultural and Biosystems Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-1 sm:px-6 sm:py-2 rounded-full shadow-lg text-sm sm:text-base">
                  <span className="font-semibold">PhD Scholar</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Julius I. Jimenez
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-4 sm:mb-6">
                Professional Agricultural and Biosystems Engineer | PhD Scholar
              </p>
              <p className="text-base sm:text-lg text-blue-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Specializing in Remote Sensing, GIS, Water Resources Management, and Climate Change Adaptation. 
                Center Head of GeoSpaDa Hub at Asian Institute of Technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button 
                  onClick={handleDownloadCV}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto min-w-[200px]"
                  size="lg"
                >
                  <Download className="mr-2" size={18} />
                  Download CV
                </Button>
                
                <Button 
                  onClick={handleContact}
                  variant="outline" 
                  className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto min-w-[200px] transition-all duration-200"
                  size="lg"
                >
                  <Mail className="mr-2" size={18} />
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Primary Expertise */}
          <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg border border-white/20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Remote Sensing</h3>
              <p className="text-blue-200 text-sm sm:text-base">Advanced geospatial analysis and satellite data processing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg border border-white/20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Water Resources</h3>
              <p className="text-blue-200 text-sm sm:text-base">Integrated management and climate adaptation strategies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg border border-white/20">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Geospatial Science and Technology</h3>
              <p className="text-blue-200 text-sm sm:text-base">Spatial data science and web-based decision support tools</p>
            </div>
          </div>

          {/* Secondary Expertise */}
          <div className="mt-8 sm:mt-12">
            <h4 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">Additional Areas of Expertise</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-md border border-white/10 text-center">
                <h5 className="text-base sm:text-lg font-medium text-white mb-1">Project/Research/Thesis</h5>
                <p className="text-blue-200 text-xs sm:text-sm">Conceptualization, Technical Writing, Critic</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-md border border-white/10 text-center">
                <h5 className="text-base sm:text-lg font-medium text-white mb-1">Statistics & Research Methods</h5>
                <p className="text-blue-200 text-xs sm:text-sm">Advanced statistical analysis and methodology</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-md border border-white/10 text-center">
                <h5 className="text-base sm:text-lg font-medium text-white mb-1">Climate Change</h5>
                <p className="text-blue-200 text-xs sm:text-sm">Impact assessment and adaptation strategies</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-md border border-white/10 text-center">
                <h5 className="text-base sm:text-lg font-medium text-white mb-1">Flood Simulation</h5>
                <p className="text-blue-200 text-xs sm:text-sm">Hydrodynamic modeling and risk assessment</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-md border border-white/10 text-center">
                <h5 className="text-base sm:text-lg font-medium text-white mb-1">Geospatial Science</h5>
                <p className="text-blue-200 text-xs sm:text-sm">Advanced spatial analysis and modeling</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-md border border-white/10 text-center">
                <h5 className="text-base sm:text-lg font-medium text-white mb-1">Groundwater Modeling</h5>
                <p className="text-blue-200 text-xs sm:text-sm">Aquifer simulation and sustainability analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
