
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy py-8 border-t border-navy-lightest">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">
              <span className="text-teal">S</span>uraj.
            </a>
            <p className="text-slate mt-2">
              Building exceptional digital experiences
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:sonisuraj611@gmail.com" 
              className="text-slate hover:text-teal transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-navy-lightest text-center text-slate text-sm">
          <p>
            © {currentYear} Suraj Soni. All Rights Reserved.
          </p>
          <p className="mt-2 text-slate-light">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
