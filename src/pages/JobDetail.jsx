import { Link, useParams } from 'react-router';
import {
  ArrowLeft,
  Building2,
  Clock,
  Mail,
  MapPin,
  Wallet,
} from 'lucide-react';
import { usePublicJob } from '@/hooks/useJobs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Seo from '@/components/layout/Seo';

function formatDate(value) {
  if (!value) return '';
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// Turns newline-separated text into a bulleted list
function BulletList({ text }) {
  const lines = (text || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) return null;

  return (
    <ul className="mt-4 space-y-3">
      {lines.map((line, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-[7px] size-1.5 shrink-0 rotate-[43deg] bg-primary"
          />
          <span className="text-sm leading-relaxed text-muted-foreground">
            {line}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }) {
  return (
    <div className="mt-10">
      <h2 className="font-serif text-lg text-foreground">{title}</h2>
      {children}
    </div>
  );
}

export default function JobDetail() {
  const { slug } = useParams();
  const { data: job, isLoading, isError } = usePublicJob(slug);

  if (isLoading) {
    return (
      <main className="bg-surface pt-32 pb-24 md:pt-40">
        <p className="text-center text-sm text-muted-foreground">
          Loading role...
        </p>
      </main>
    );
  }

  if (isError || !job) {
    return (
      <main className="bg-surface pt-32 pb-24 md:pt-40">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h1 className="font-serif text-2xl text-foreground">
            This role is no longer listed.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            It may have been filled or closed. Have a look at what else we are
            recruiting for.
          </p>
          <Button asChild className="mt-8 rounded-full px-7">
            <Link to="/jobs">See open roles</Link>
          </Button>
        </div>
      </main>
    );
  }

  const expired =
    Boolean(job.closing_date) && new Date(job.closing_date) < new Date();

  const facts = [
    { icon: Building2, label: 'Company', value: job.company },
    { icon: MapPin, label: 'Location', value: job.location },
    { icon: Clock, label: 'Type', value: job.type },
    { icon: Wallet, label: 'Salary', value: job.salary },
  ].filter((fact) => fact.value);

  return (
    <main className="bg-surface pb-24">
      <Seo
        title={`${job.title} at ${job.company} | GConsults`}
        description={job.description?.slice(0, 150)}
        path={`/jobs/${job.slug}`}
      />

      {/* Header */}
      <div className="dark relative isolate overflow-hidden bg-background pt-32 pb-16 md:pt-40 md:pb-20">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-20 -z-10 size-72 rotate-[41deg] bg-secondary/90"
        />

        <div className="mx-auto max-w-3xl px-6">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All roles
          </Link>

          <div className="mt-7 flex flex-wrap items-center gap-2 ">
            {expired ? (
              <Badge
                variant="secondary"
                className="rounded-full bg-destructive/15 font-normal text-destructive"
              >
                Applications closed
              </Badge>
            ) : (
              <Badge
                variant="secondary"
                className="rounded-full bg-secondary font-normal text-primary"
              >
                {job.type}
              </Badge>
            )}
            {job.sector && (
              <Badge
                variant="secondary"
                className="rounded-full bg-secondary font-normal text-muted-foreground"
              >
                {job.sector}
              </Badge>
            )}
          </div>

          <h1 className="mt-5 text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            {job.title}
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            {job.company}, {job.location}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-6">
        <div className="-mt-5 rounded-2xl border border-border bg-card p-7 shadow-sm md:p-10">
          {/* Facts */}
          <dl className="grid gap-5 sm:grid-cols-2">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="flex items-start gap-3">
                  <Icon
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-0.5 text-sm text-card-foreground">
                      {fact.value}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>

          <Separator className="my-8" />

          {job.company_info && (
            <Section title="About the company">
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {job.company_info}
              </p>
            </Section>
          )}

          <Section title="About the role">
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {job.description}
            </p>
          </Section>

          {job.responsibilities && (
            <Section title="What you will be doing">
              <BulletList text={job.responsibilities} />
            </Section>
          )}

          {job.requirements && (
            <Section title="What we are looking for">
              <BulletList text={job.requirements} />
            </Section>
          )}

          {job.What_we_offer && (
            <Section title="What we offer">
              <BulletList text={job.What_we_offer} />
            </Section>
          )}

          {job.How_toapply && (
            <Section title="How to apply">
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {job.How_toapply}
              </p>
            </Section>
          )}

          {job.closing_date && (
            <p className="mt-10 text-sm text-muted-foreground">
              {expired ? 'Closed on ' : 'Applications close '}
              <span className="text-foreground">
                {formatDate(job.closing_date)}
              </span>
            </p>
          )}
        </div>

        {/* Apply */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-7 md:p-10">
          {expired ? (
            <>
              <h2 className="font-serif text-xl text-card-foreground">
                This role has closed.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                Applications are no longer being accepted. Send us your CV
                anyway and we will be in touch when something similar comes up.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-7 rounded-full px-7"
              >
                <a href="mailto:info@gconsultservices.com.ng?subject=CV%20submission">
                  Send us your CV
                </a>
              </Button>
            </>
          ) : (
            <>
              <h2 className="font-serif text-xl text-card-foreground">
                Interested in this role?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                A consultant reads every application. You will hear back either
                way.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                {job.apply_url && (
                  <Button asChild size="lg" className="rounded-full px-7">
                    <a
                      href={job.apply_url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Apply on their site
                    </a>
                  </Button>
                )}

                {job.apply_email && (
                  <Button
                    asChild
                    size="lg"
                    variant={job.apply_url ? 'outline' : 'default'}
                    className="rounded-full px-7"
                  >
                    <a
                      href={`mailto:${job.apply_email}?subject=${encodeURIComponent(
                        `Application: ${job.title}`,
                      )}`}
                    >
                      <Mail className="size-4" aria-hidden="true" />
                      Apply by email
                    </a>
                  </Button>
                )}

                {!job.apply_url && !job.apply_email && (
                  <Button asChild size="lg" className="rounded-full px-7">
                    <Link to="/contact">Get in touch</Link>
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
