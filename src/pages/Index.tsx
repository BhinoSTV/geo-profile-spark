
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CVViewer from '../components/CVViewer';
import ResearchLaboratorySection from '../components/ResearchLaboratorySection';
import PublicationsSection from '../components/PublicationsSection';
import AwardsSection from '../components/AwardsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-foreground">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-left space-y-4 order-2 md:order-1">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  I am Julius I. Jimenez, a Professional Agricultural and Biosystems Engineer 
                  (Lic.#8633) and PhD Scholar specializing in Remote Sensing and Geographic 
                  Information Systems. Currently pursuing dual doctorate degrees at Asian 
                  Institute of Technology, Thailand, and Indian Institute of Technology, Roorkee, India.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  As Center Head of the Geospatial Data Science and Technology Center (GeoSpaDa Hub) 
                  and RS&GIS Specialist at AIT-RRC.AP, I focus on developing innovative solutions 
                  for water resources management, climate change adaptation, and sustainable 
                  agricultural practices through cutting-edge geospatial technologies.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-lg p-6 sm:p-8 text-white order-1 md:order-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Research Focus</h3>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>• Integrated Water Resources Management (IWRM)</li>
                  <li>• Groundwater recharge modeling and sustainability</li>
                  <li>• Climate change impact assessment</li>
                  <li>• Remote sensing applications for agriculture</li>
                  <li>• Geospatial data science and web-based tools</li>
                  <li>• Flood risk assessment and disaster resilience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CVViewer />
      <ResearchLaboratorySection />
      <PublicationsSection />
      <AwardsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-muted py-6 sm:py-8 border-t">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm sm:text-base text-muted-foreground">
            © 2024 Julius I. Jimenez. All rights reserved. | Professional Agricultural and Biosystems Engineer | PhD Scholar
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
