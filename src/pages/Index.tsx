
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CVViewer from '../components/CVViewer';
import PublicationsSection from '../components/PublicationsSection';
import AwardsSection from '../components/AwardsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a passionate researcher specializing in remote sensing and GIS applications 
                  for water resource management. My work focuses on developing innovative solutions 
                  for groundwater monitoring and climate change adaptation using cutting-edge 
                  satellite technologies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With expertise in machine learning, spatial analysis, and Earth observation 
                  systems, I contribute to understanding and addressing global water challenges 
                  through interdisciplinary research approaches.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Research Focus</h3>
                <ul className="space-y-2">
                  <li>• Satellite-based groundwater monitoring</li>
                  <li>• Climate change impact assessment</li>
                  <li>• Machine learning in Earth sciences</li>
                  <li>• GIS and spatial data analysis</li>
                  <li>• Water resource sustainability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CVViewer />
      <PublicationsSection />
      <AwardsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-muted py-8 border-t">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Dr. [Your Name]. All rights reserved. | Built with modern web technologies
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
