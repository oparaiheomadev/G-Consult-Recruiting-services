import { Link } from 'react-router';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

function formatDate(value) {
  if (!value) return '';
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function JobCard({ job }) {
  const expired = job.closing_date && new Date(job.closing_date) < new Date();

  return (
    <li>
      <Link
        to={`/jobs/${job.slug}`}
        className={cn(
          'group block rounded-2xl border border-border bg-card p-6 transition-all duration-500 ease-out md:p-7',
          expired
            ? 'opacity-60'
            : 'hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-foreground/5',
        )}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 ">
          <div className="min-w-0">
            <h2 className="font-serif text-lg text-card-foreground transition-colors duration-300 group-hover:text-primary md:text-xl">
              {job.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
          </div>

          {expired ? (
            <Badge
              variant="secondary"
              className="rounded-full bg-destructive/10 font-normal text-destructive"
            >
              Closed
            </Badge>
          ) : (
            <Badge
              variant="secondary"
              className="rounded-full bg-accent font-normal text-primary"
            >
              {job.type}
            </Badge>
          )}
        </div>

        {job.description && (
          <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {job.description}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 ">
          <span className="inline-flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" aria-hidden="true" />
              {job.location}
            </span>
            <span>Posted {formatDate(job.created_at)}</span>
          </span>

          <ArrowUpRight
            className="size-4 shrink-0 text-primary transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>
      </Link>
    </li>
  );
}
