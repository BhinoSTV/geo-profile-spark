
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 sm:pt-36 md:pt-40 lg:pt-24 xl:pt-28 pb-16 sm:pb-20 md:pb-24">
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
        
        {/* Floating data points with more dynamic movement */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-1/6 left-1/6 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Photo Section */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 md:border-8 border-white/80 bg-gradient-to-br from-blue-100 to-green-100 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  <img 
                    src="/lovable-uploads/2cc4a410-dff6-4543-8307-efe683ae7f4e.png"
                    alt="Julius I. Jimenez - Professional Agricultural and Biosystems Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 -right-2 sm:-right-3 md:-right-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full shadow-lg text-xs sm:text-sm md:text-base animate-pulse">
                  <span className="font-semibold">PhD Scholar</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-6 sm:space-y-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fadeIn">
                <span className="bg-gradient-to-r from-blue-200 via-white to-green-200 bg-clip-text text-transparent">
                  Julius I. Jimenez
                </span>
              </h1>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
                Professional Agricultural and Biosystems Engineer | PhD Scholar
              </p>
              <p className="text-sm sm:text-base md:text-lg text-blue-200 mb-8 sm:mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0 animate-slideUp" style={{ animationDelay: '0.4s' }}>
                Specializing in Remote Sensing, GIS, Water Resources Management, and Climate Change Adaptation. 
                Center Head of GeoSpaDa Hub at Asian Institute of Technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center animate-slideUp" style={{ animationDelay: '0.6s' }}>
                <Button 
                  onClick={handleDownloadCV}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto min-w-[180px] sm:min-w-[200px] hover:scale-105"
                  size="lg"
                >
                  <Download className="mr-2" size={16} />
                  Download CV
                </Button>
                
                <Button 
                  onClick={handleContact}
                  variant="outline" 
                  className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg w-full sm:w-auto min-w-[180px] sm:min-w-[200px] transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Mail className="mr-2" size={16} />
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Primary Expertise */}
          <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center animate-slideUp" style={{ animationDelay: '0.8s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3">Remote Sensing</h3>
              <p className="text-blue-200 text-xs sm:text-sm md:text-base">Advanced geospatial analysis and satellite data processing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3">Water Resources</h3>
              <p className="text-blue-200 text-xs sm:text-sm md:text-base">Integrated management and climate adaptation strategies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3">Geospatial Science and Technology</h3>
              <p className="text-blue-200 text-xs sm:text-sm md:text-base">Spatial data science and web-based decision support tools</p>
            </div>
          </div>

          {/* Secondary Expertise */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-6 sm:mb-8 text-center animate-slideUp" style={{ animationDelay: '1s' }}>Additional Areas of Expertise</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 animate-slideUp" style={{ animationDelay: '1.2s' }}>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-md border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <h5 className="text-sm sm:text-base md:text-lg font-medium text-white mb-2">Project/Research/Thesis</h5>
                <p className="text-blue-200 text-xs sm:text-sm">Conceptualization, Technical Writing, Critic</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-md border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <h5 className="text-sm sm:text-base md:text-lg font-medium text-white mb-2">Statistics & Research Methods</h5>
                <p className="text-blue-200 text-xs sm:text-sm">Advanced statistical analysis and methodology</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-md border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <h5 className="text-sm sm:text-base md:text-lg font-medium text-white mb-2">Climate Change</h5>
                <p className="text-blue-200 text-xs sm:text-sm">Impact assessment and adaptation strategies</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-md border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <h5 className="text-sm sm:text-base md:text-lg font-medium text-white mb-2">Flood Simulation</h5>
                <p className="text-blue-200 text-xs sm:text-sm">Hydrodynamic modeling and risk assessment</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-md border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <h5 className="text-sm sm:text-base md:text-lg font-medium text-white mb-2">Geospatial Science</h5>
                <p className="text-blue-200 text-xs sm:text-sm">Advanced spatial analysis and modeling</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 shadow-md border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <h5 className="text-sm sm:text-base md:text-lg font-medium text-white mb-2">Groundwater Modeling</h5>
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
