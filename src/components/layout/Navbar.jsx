import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import logoLight from '@/assets/gconsult-light.png';
import logoDark from '@/assets/gconsult-dark.png';
import { motion } from 'motion/react';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Only the homepage has a dark hero to sit over.
  const overHero = pathname === '/' && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-colors duration-300',
        overHero
          ? 'dark bg-transparent'
          : 'bg-background border-b border-border',
      )}
    >
      <nav className="mx-auto max-w-6xl px-6 h-18 flex items-center justify-between">
        <Link to="/" className="shrink-0">
          <img
            src={overHero ? logoDark : logoLight}
            alt="Gconsult Professional Services"
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {({ isActive }) => (
                <span className="group relative inline-block py-1 text-sm text-foreground/70 hover:text-foreground transition-colors">
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-px w-full origin-left bg-primary',
                      'transition-transform duration-300 ease-out',
                      isActive
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100',
                    )}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex rounded-full px-5"
          >
            <Link to="/contact">Book a consultation</Link>
          </Button>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
                size-11
                className={cn(
                  'md:hidden',
                  overHero ? 'text-foreground' : 'text-foreground',
                )}
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="dark bg-card border-l border-border w-[85vw] sm:w-80 p-0"
            >
              {/* Diamond texture */}
              <span className="pointer-events-none absolute -top-10 -right-8 size-32 rotate-[41deg] bg-secondary/90" />
              <span className="pointer-events-none absolute top-90 right-50 size-25 rotate-[41deg] bg-secondary/40" />

              <div className="relative flex h-full flex-col px-7 pt-16 pb-10">
                <nav className="flex flex-col">
                  {links.map((link, i) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.12 + i * 0.06,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <NavLink to={link.to} end={link.to === '/'}>
                        {({ isActive }) => (
                          <span className="group flex items-center gap-3 py-4 border-b border-border/60">
                            <span
                              className={cn(
                                'size-1.5 rotate-45 transition-all duration-300',
                                isActive
                                  ? 'bg-primary scale-100'
                                  : 'bg-primary scale-0 group-hover:scale-100',
                              )}
                            />
                            <span
                              className={cn(
                                'font-sans  transition-colors duration-300',
                                isActive
                                  ? 'text-primary'
                                  : 'text-foreground group-hover:text-primary',
                              )}
                            >
                              {link.label}
                            </span>
                          </span>
                        )}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto pt-10">
                  <Button asChild className="w-full rounded-full">
                    <Link to="/contact">Book a consultation</Link>
                  </Button>
                  <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
                    Lagos, Nigeria
                    <br />
                    +234 810 686 3792
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
