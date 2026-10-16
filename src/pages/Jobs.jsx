import { useMemo, useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { usePublicJobs } from '@/hooks/useJobs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Seo from '@/components/layout/Seo';
import PageHero from '@/components/shared/PageHero';
import JobCard from '@/components/section/JobCard';

const PAGE_SIZE = 15;

function isExpired(job) {
  return Boolean(job.closing_date) && new Date(job.closing_date) < new Date();
}

export default function Jobs() {
  const { data: jobs = [], isLoading, isError } = usePublicJobs();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  useEffect(() => setPage(1), [search]);
  const visible = useMemo(() => {
    const query = search.trim().toLowerCase();

    const matched = jobs.filter((job) => {
      if (!query) return true;
      return [job.title, job.company, job.location, job.sector]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(query));
    });

    // Open roles first, closed ones at the bottom
    return [...matched].sort(
      (a, b) => Number(isExpired(a)) - Number(isExpired(b)),
    );
  }, [jobs, search]);

  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const paginated = visible.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const openCount = jobs.filter((job) => !isExpired(job)).length;

  return (
    <main>
      <Seo
        title="Open Roles | Gconsult Recruitment, Nigeria"
        description="Current vacancies we are recruiting for across Nigeria. Browse open roles and apply directly."
        path="/jobs"
      />

      {/* <PageHero
        badge="Open roles"
        title="Roles we are recruiting for."
        intro="Every listing here is a live search we are running for a client. Apply directly, and a consultant reads every application."
      /> */}

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          {/* Search */}
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, company, location or sector"
              aria-label="Search roles"
              className="h-12 rounded-full border-border bg-card pl-11 placeholder:text-muted-foreground/60"
            />
          </div>

          {!isLoading && !isError && (
            <p className="mt-4 text-sm text-muted-foreground">
              {openCount === 0
                ? 'No open roles at the moment.'
                : `${openCount} open ${openCount === 1 ? 'role' : 'roles'}`}
            </p>
          )}

          {/* States */}
          {isLoading && (
            <p className="py-20 text-center text-sm text-muted-foreground">
              Loading roles...
            </p>
          )}

          {isError && (
            <p className="py-20 text-center text-sm text-destructive">
              Could not load roles right now. Please try again shortly.
            </p>
          )}

          {!isLoading && !isError && visible.length === 0 && (
            <div className="rounded-2xl border border-border bg-card p-10 text-center">
              <h2 className="font-serif text-xl text-card-foreground">
                {search
                  ? 'Nothing matches that search.'
                  : 'No roles listed yet.'}
              </h2>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Send us your CV and the kind of work you are after. When
                something fits, a consultant contacts you directly.
              </p>
              <Button asChild className="mt-7 rounded-full px-7">
                <a href="mailto:gconsultrecruitments@gmail.com?subject=CV%20submission">
                  Send us your CV
                </a>
              </Button>
            </div>
          )}

          {/* List */}
          {paginated.length > 0 && (
            <ul className="mt-8 space-y-4">
              {paginated.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </ul>
          )}
          {visible.length > PAGE_SIZE && (
            <div className="mt-10 flex items-center justify-between">
              <Button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                variant="outline"
                className="rounded-full px-6"
              >
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {page} of {totalPages}
              </span>
              <Button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                variant="outline"
                className="rounded-full px-6"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
