import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { media } from "@/data/media";

const links = [
  { name: "Home", path: "/" },
  { name: "Collection", path: "/collection" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="site-container grid grid-cols-1 gap-10 py-16 md:grid-cols-3">
      <div className="space-y-4">
        <img src={media.logo} alt="West Ford" className="h-12 w-auto" />
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          West Ford. Fine spirits, responsibly enjoyed.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-foreground">The House</h4>
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-foreground">Contact</h4>
        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
          <a href="tel:+448082800089" className="flex items-center gap-2 hover:text-primary">
            <Phone size={16} className="text-primary" />
            +44 (0) 808 280 0089
          </a>
          <a href="mailto:info@west-ford.com" className="flex items-center gap-2 hover:text-primary">
            <Mail size={16} className="text-primary" />
            info@west-ford.com
          </a>
          <p className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 text-primary" />
            35 Firs Avenue, London N11 3NE
          </p>
        </div>
        <div className="flex flex-wrap gap-4 pt-2 text-xs text-muted-foreground">
          <Link to="/privacy" className="hover:text-primary">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-primary">
            Terms
          </Link>
          <Link to="/responsible-drinking" className="hover:text-primary">
            Responsible Drinking
          </Link>
        </div>
      </div>
    </div>
    <div className="border-t border-border py-6 text-center text-xs tracking-wide text-muted-foreground">
      Please drink responsibly. Must be of legal drinking age.
    </div>
  </footer>
);

export default Footer;
