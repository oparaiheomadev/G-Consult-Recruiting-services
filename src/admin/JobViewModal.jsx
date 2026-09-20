import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Pencil } from 'lucide-react';
import { useUpdateJob } from '@/hooks/useJobs';

function formatDate(value) {
  if (!value) return '';
  return new Date(value).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

// Turns a block of text into list items, one per line
function BulletList({ text }) {
  const lines = (text || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) return null;

  return (
    <ul className="mt-2 space-y-2">
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
    <div className="mt-6">
      <h3 className="font-sans text-xs font-medium tracking-wide text-foreground">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function JobViewModal({ job, onClose, onEdit }) {
  const updateJob = useUpdateJob();

  if (!job) return null;

  function handleToggle() {
    updateJob.mutate(
      { id: job.id, fields: { is_active: !job.is_active } },
      { onSuccess: onClose },
    );
  }

  return (
    <Dialog open={Boolean(job)} onOpenChange={(next) => !next && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">{job.title}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="rounded-full font-normal">
            {job.type}
          </Badge>
          <Badge variant="secondary" className="rounded-full font-normal">
            {job.sector}
          </Badge>
          <Badge
            variant="secondary"
            className={
              job.is_active
                ? 'rounded-full bg-accent font-normal text-primary'
                : 'rounded-full bg-muted font-normal text-muted-foreground'
            }
          >
            {job.is_active ? 'Active' : 'Inactive'}
          </Badge>
        </div>

        <dl className="mt-5 space-y-2.5">
          <div className="flex gap-3">
            <dt className="w-24 shrink-0 text-xs text-muted-foreground">
              Company
            </dt>
            <dd className="text-sm text-foreground">{job.company}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-24 shrink-0 text-xs text-muted-foreground">
              Location
            </dt>
            <dd className="text-sm text-foreground">{job.location}</dd>
          </div>
          {job.salary && (
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 text-xs text-muted-foreground">
                Salary
              </dt>
              <dd className="text-sm text-foreground">{job.salary}</dd>
            </div>
          )}
          {job.closing_date && (
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 text-xs text-muted-foreground">
                Closes
              </dt>
              <dd className="text-sm text-foreground">
                {formatDate(job.closing_date)}
              </dd>
            </div>
          )}
        </dl>

        <Separator className="mt-6" />

        {job.company_info && (
          <Section title="About the company">
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {job.company_info}
            </p>
          </Section>
        )}

        <Section title="Description">
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {job.description}
          </p>
        </Section>

        <Section title="Responsibilities">
          <BulletList text={job.responsibilities} />
        </Section>

        <Section title="Requirements">
          <BulletList text={job.requirements} />
        </Section>

        {job.How_toapply && (
          <Section title="How to apply">
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {job.How_toapply}
            </p>
          </Section>
        )}

        <p className="mt-7 text-xs text-muted-foreground">
          Posted {formatDate(job.created_at)} by {job.posted_by}
        </p>

        {updateJob.isError && (
          <p className="mt-3 text-sm text-destructive" role="alert">
            Could not update. {updateJob.error?.message}
          </p>
        )}

        <div className="mt-5 flex gap-3">
          <Button
            onClick={() => onEdit(job)}
            variant="outline"
            className="flex-1 rounded-full"
          >
            <Pencil className="size-4" aria-hidden="true" />
            Edit
          </Button>
          <Button
            onClick={handleToggle}
            disabled={updateJob.isPending}
            variant="outline"
            className="flex-1 rounded-full"
          >
            {updateJob.isPending
              ? 'Updating'
              : job.is_active
                ? 'Mark inactive'
                : 'Mark active'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
