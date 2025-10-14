import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
 

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">
             WEST<span className="text-accent">FORD</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where Heritage Flows Into Every Bottle
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/collection" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Brand & Collection
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:02081261760" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
                <Phone size={16} className="group-hover:text-accent transition-colors" />
                +44 (0) 808 280 0089
              </a>
              <a href="mailto:info@west-ford.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
                <Mail size={16} className="group-hover:text-accent transition-colors" />
                info@west-ford.com
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-accent" />
                <span>35 Firs Avenue London, England, N11 3NE</span>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </footer>
  );
};

export default Footer;
