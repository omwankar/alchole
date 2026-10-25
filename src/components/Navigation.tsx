import { Link, useLocation } from "react-router-dom";
import { media } from "@/data/media";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Collection", path: "/collection" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `relative text-sm font-medium tracking-wide transition-colors ${
      isActive(path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="site-container flex items-center justify-between gap-4 py-3 md:py-4">
        <Link to="/" className="flex min-w-0 items-center">
          <img
            src={media.logo}
            alt="West Ford"
            className="h-10 w-auto max-w-[180px] object-contain object-left sm:h-12 md:h-14 md:max-w-[240px]"
          />
        </Link>

        <div className="hidden items-center gap-4 md:flex xl:gap-7">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={linkClass(link.path)}>
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                  isActive(link.path) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="rounded-md border border-primary/50 p-2 text-primary md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent side="right" className="border-border bg-background">
            <SheetHeader>
              <SheetTitle className="font-display text-left text-primary">West Ford</SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`text-lg ${linkClass(link.path)}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
