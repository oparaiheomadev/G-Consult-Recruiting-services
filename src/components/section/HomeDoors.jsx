import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomeDoors() {
  return (
    <section
      aria-label="Choose your path"
      className="grid border-y border-border md:grid-cols-[1.3fr_0.7fr]"
    >
      {/* Primary — employers */}
      <div className="relative isolate overflow-hidden border-l-4 border-primary bg-accent px-8 py-16 md:px-12 md:py-20">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-20 -z-10 size-80 rotate-[41deg] bg-primary/[0.06]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 right-1/4 -z-10 size-8 rotate-[44deg] bg-primary/[0.12]"
        />

        <div className="max-w-md">
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">
            I'm hiring
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Tell us the role and the kind of person it needs. First shortlist
            lands in two days.
          </p>

          <Button asChild size="lg" className="mt-7 rounded-full px-7">
            <Link to="/contact">Hire with us</Link>
          </Button>
        </div>
      </div>

      {/* Secondary — candidates */}
      <Link
        to="/jobs"
        className="group relative isolate block overflow-hidden bg-surface px-8 py-16 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary md:px-12 md:py-20"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 -z-10 size-64 rotate-[47deg] bg-primary/[0.06] transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <span className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background py-1 pl-2.5 pr-3.5 text-xs text-primary">
          <span
            aria-hidden="true"
            className="size-1.5 rotate-[43deg] bg-primary"
          />
          Coming soon
        </span>

        <div className="max-w-xs">
          <h2 className="font-serif text-xl text-foreground md:text-2xl">
            I want a role
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We are building a board of the roles we are recruiting for right
            now.
          </p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary">
            <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-primary">
              See what is coming
            </span>
            <ArrowUpRight
              className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </section>
  );
}
