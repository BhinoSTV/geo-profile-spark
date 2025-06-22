
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Download, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleBookConsultation = () => {
    navigate('/consultation');
  };

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white bg-gradient-to-br from-blue-100 to-green-100">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Julius I. Jimenez - Professional Agricultural and Biosystems Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full shadow-lg">
                  <span className="font-semibold">PhD Scholar</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 text-left lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                Julius I. Jimenez
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Professional Agricultural and Biosystems Engineer | PhD Scholar
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Specializing in Remote Sensing, GIS, Water Resources Management, and Climate Change Adaptation. 
                Center Head of GeoSpaDa Hub at Asian Institute of Technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                <Button 
                  onClick={handleBookConsultation}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]"
                  size="lg"
                >
                  <Calendar className="mr-2" size={20} />
                  Book a Consultation
                </Button>
                
                <Button 
                  onClick={handleDownloadCV}
                  variant="outline" 
                  className="border-2 border-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg min-w-[200px]"
                  size="lg"
                >
                  <Download className="mr-2" size={20} />
                  Download CV
                </Button>
                
                <Button 
                  onClick={handleContact}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg min-w-[200px] shadow-lg hover:shadow-xl transition-all duration-200"
                  size="lg"
                >
                  <Mail className="mr-2" size={20} />
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold text-foreground mb-2">Remote Sensing</h3>
              <p className="text-muted-foreground">Advanced geospatial analysis and satellite data processing</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold text-foreground mb-2">Water Resources</h3>
              <p className="text-muted-foreground">Integrated management and climate adaptation strategies</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold text-foreground mb-2">GIS Technology</h3>
              <p className="text-muted-foreground">Spatial data science and web-based decision support tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
