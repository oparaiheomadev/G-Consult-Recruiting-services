import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="dark relative isolate flex min-h-screen items-center overflow-hidden bg-background/90 px-6">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-20 -z-10 size-72 rotate-[41deg] bg-secondary/40"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 left-10 -z-10 size-28 rotate-[47deg] bg-secondary/30"
      />

      <div className="mx-auto w-full max-w-2xl">
        <p className="font-serif text-6xl text-primary md:text-7xl">404</p>

        <h1 className="mt-6 text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
          This page has moved on.
        </h1>

        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          The link may be old, or the address may have a typo in it. Here is
          where most people are headed.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-7">
            <Link to="/">Back to home</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-7"
          >
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>

        <nav
          aria-label="Site sections"
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8"
        >
          {[
            { label: 'About', to: '/about' },
            { label: 'Services', to: '/services' },
            { label: 'Industries', to: '/industries' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
