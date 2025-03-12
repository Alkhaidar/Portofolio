
import { Github, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-lg font-semibold text-primary">
              Portfolio
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Creating beautiful digital experiences.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-muted-foreground hover:text-primary transition-colors shadow-subtle"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/al-khaidar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-muted-foreground hover:text-primary transition-colors shadow-subtle"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://www.instagram.com/darr_sarenaa17/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-muted-foreground hover:text-primary transition-colors shadow-subtle"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. Al Khaidar, S.Tr.Kom.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
