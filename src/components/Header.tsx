
import React, { useState } from 'react';
import { Home, User, FileText, Award, Mail, FlaskConical, Calendar, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
    
    // First navigate to home page if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleConsultation = () => {
    setIsMobileMenuOpen(false);
    navigate('/consultation');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <div 
            className="text-xl sm:text-2xl font-bold text-primary cursor-pointer"
            onClick={() => navigate('/')}
          >
            <span className="hidden sm:inline">Julius I. Jimenez</span>
            <span className="sm:hidden">J.I. Jimenez</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
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
              <span>Research Lab</span>
            </button>
            <button 
              onClick={() => scrollToSection('awards')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Award size={18} />
              <span>Awards</span>
            </button>
            <button 
              onClick={handleConsultation}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Calendar size={18} />
              <span>Consultation</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2"
              >
                <Home size={20} />
                <span>Home</span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2"
              >
                <User size={20} />
                <span>About</span>
              </button>
              <button 
                onClick={() => scrollToSection('cv')}
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2"
              >
                <FileText size={20} />
                <span>CV</span>
              </button>
              <button 
                onClick={() => scrollToSection('research-lab')}
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2"
              >
                <FlaskConical size={20} />
                <span>Research Laboratory</span>
              </button>
              <button 
                onClick={() => scrollToSection('awards')}
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2"
              >
                <Award size={20} />
                <span>Awards</span>
              </button>
              <button 
                onClick={handleConsultation}
                className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Calendar size={20} />
                <span>Book Consultation</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors py-2"
              >
                <Mail size={20} />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
