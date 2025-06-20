
import React from 'react';
import { Home, User, FileText, Award, Mail, FlaskConical } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Julius I. Jimenez
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Home size={18} />
              <span>Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <User size={18} />
              <span>About</span>
            </button>
            <button 
              onClick={() => scrollToSection('cv')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <FileText size={18} />
              <span>CV</span>
            </button>
            <button 
              onClick={() => scrollToSection('research-lab')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <FlaskConical size={18} />
              <span>Research Laboratory</span>
            </button>
            <button 
              onClick={() => scrollToSection('awards')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Award size={18} />
              <span>Awards</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span>Contact</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
