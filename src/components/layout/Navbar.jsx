import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/contact', label: 'Contact' },

  { to: '/jobs', label: 'Jobs' },
];

export default function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${
        isScrolled ? 'glass-strong py-3' : 'bg-background py-4'
      }`}
    >
      {/* ================= NAVBAR ================= */}
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight">
          <span className="font-serif italic text-foreground">G -</span>
          <span className="text-primary">Consult</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <div className=" flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-8 py-2 text-sm  transition-colors duration-200 ${
                  pathname === link.to
                    ? 'text-foreground  border-b-2 border-foreground/40 bg-surface font-bold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-surface font-bold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setOpenMobileMenu((prev) => !prev)}
        >
          {openMobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {openMobileMenu && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3  transition-colors duration-200 ${
                  pathname === link.to
                    ? 'text-primary font-bold text-lg '
                    : 'text-foreground/60 hover:bg-surface'
                }`}
                onClick={() => setOpenMobileMenu(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpenMobileMenu(false)}
              className="mt-3 px-4 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg text-center hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              Hire talent now
              <span className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse shrink-0"></span>
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpenMobileMenu(false)}
              className="mt-3 px-4 py-2.5 text-sm font-semibold bg-foreground text-primary-foreground rounded-lg text-center hover:opacity-90 transition"
            >
              Browse open roles
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
