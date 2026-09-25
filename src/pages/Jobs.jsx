import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import Seo from '@/components/layout/Seo';

export default function Jobs() {
  return (
    <main className="dark relative isolate flex min-h-screen items-center overflow-hidden bg-background px-6 pt-32 pb-24">
      <Seo
        title="Jobs at  | Open Roles in Lagos, Nigeria"
        description="Our job board is launching soon. In the meantime, send us your CV and we will be in touch when a role matches your background."
        path="/jobs"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-20 -z-10 size-72 rotate-[41deg] bg-secondary/40"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 left-8 -z-10 size-28 rotate-[47deg] bg-secondary/30"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-1/3 -z-10 size-7 rotate-[43deg] bg-secondary/50"
      />

      <div className="mx-auto w-full max-w-2xl">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/10 py-1.5 pl-3 pr-4">
          <span
            aria-hidden="true"
            className="size-1.5 rotate-[43deg] bg-primary"
          />
          <span className="text-xs text-primary">Launching soon</span>
        </span>

        <h1 className="mt-7 text-4xl leading-[1.15] tracking-tight text-foreground md:text-5xl">
          Our job board is on the way.
        </h1>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
          We are building a place to list every role we are recruiting for.
          Until it is live, send us your CV and the kind of work you are looking
          for. When something fits, you will hear from a consultant directly,
          not an automated reply.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Button asChild size="lg" className="rounded-full px-7">
            <a href="mailto:recruitments@gmail.com?subject=CV%20submission">
              Send us your CV
            </a>
          </Button>

          <Link
            to="/industries"
            className="border-b border-border pb-1 text-sm text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            See the sectors we work in
          </Link>
        </div>

        <p className="mt-14 border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
          Already spoken to us about a role? Get in touch with your consultant
          directly, or{' '}
          <Link
            to="/contact"
            className="text-primary underline-offset-4 hover:underline"
          >
            use the contact form
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
