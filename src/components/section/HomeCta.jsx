import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export default function HomeCta() {
return (
<section aria-labelledby="cta-heading" className="relative isolate overflow-hidden bg-primary py-20 md:py-24">
  <span aria-hidden="true"
    className="pointer-events-none absolute -top-16 left-16 -z-10 size-40 rotate-[41deg] bg-primary-foreground/5" />
  <span aria-hidden="true"
    className="pointer-events-none absolute -bottom-20 right-24 -z-10 size-56 rotate-[47deg] bg-primary-foreground/5" />

  <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center md:justify-between">
    <div>
      <h2 id="cta-heading"
        className="max-w-md text-3xl leading-tight tracking-tight text-primary-foreground md:text-4xl">
        Ready to hire someone great?
      </h2>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
        Tell us about the role and we will have a shortlist with you inside
        two working days.
      </p>
    </div>

    <div className="flex shrink-0 flex-wrap items-center gap-3">
      <Button asChild size="lg" className="rounded-full bg-background px-7 text-foreground hover:bg-background/90">
        <Link to="/contact">Start a search</Link>
      </Button>
      <Button asChild size="lg" variant="outline"
        className="rounded-full border-primary-foreground/30 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
        <Link to="/contact">Book a call</Link>
      </Button>
    </div>
  </div>
</section>
);
}