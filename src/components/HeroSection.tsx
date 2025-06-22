
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Julius I. Jimenez
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Professional Agricultural and Biosystems Engineer | PhD Scholar
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Specializing in Remote Sensing, GIS, Water Resources Management, and Climate Change Adaptation. 
            Center Head of GeoSpaDa Hub at Asian Institute of Technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              variant="ghost" 
              className="text-primary hover:text-primary-foreground hover:bg-primary px-8 py-4 text-lg min-w-[200px]"
              size="lg"
            >
              <Mail className="mr-2" size={20} />
              Get in Touch
            </Button>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-foreground mb-2">Remote Sensing</h3>
              <p className="text-muted-foreground">Advanced geospatial analysis and satellite data processing</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-foreground mb-2">Water Resources</h3>
              <p className="text-muted-foreground">Integrated management and climate adaptation strategies</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-md">
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
