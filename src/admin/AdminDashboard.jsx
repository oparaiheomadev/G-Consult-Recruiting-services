import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { Eye, LogOut, Pencil, Plus, Search, Trash2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useJobs } from '@/hooks/useJobs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import JobFormModal from './JobFormModal';
import JobViewModal from './JobViewModal';
import DeleteJobDialog from './DeleteJobDialog';

const PAGE_SIZE = 15;

const filters = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

function formatDate(value) {
  if (!value) return '';
  return new Date(value).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { data: jobs = [], isLoading, isError, error } = useJobs();

  const [session, setSession] = useState(null);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [page, setPage] = useState(1);

  // Modal state. formOpen controls visibility, editingJob holds which job (null = new).
  const [formOpen, setFormOpen] = useState(false);
  const [viewJob, setViewJob] = useState(null);
  const [deleteJob, setDeleteJob] = useState(null);
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
  }, []);

  useEffect(() => setPage(1), [search, status]);

  const counts = useMemo(
    () => ({
      all: jobs.length,
      active: jobs.filter((job) => job.is_active).length,
      inactive: jobs.filter((job) => !job.is_active).length,
    }),
    [jobs],
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return jobs
      .filter((job) => {
        if (status === 'active') return job.is_active;
        if (status === 'inactive') return !job.is_active;
        return true;
      })
      .filter((job) => {
        if (!query) return true;
        return [job.title, job.company, job.location]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(query));
      });
  }, [jobs, status, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate('/admin/login');
  }

  return (
    <main className="min-h-screen bg-surface">
      {/* Header */}
      <header className="dark bg-background">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <p className="font-serif text-lg text-foreground">Gconsult admin</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => {
                setEditingJob(null);
                setFormOpen(true);
              }}
              size="sm"
              className="rounded-full px-5"
            >
              <Plus className="size-4" aria-hidden="true" />
              Post a job
            </Button>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="rounded-full px-4"
            >
              <LogOut className="size-4" aria-hidden="true" />
              Log out
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="font-serif text-2xl text-foreground">Job listings</h1>

        {/* Filters */}
        <div className="mt-7 flex flex-wrap items-center gap-2">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setStatus(item.value)}
              aria-pressed={status === item.value}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm transition-colors duration-300',
                status === item.value
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:text-foreground',
              )}
            >
              {item.label} {counts[item.value]}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mt-4">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, company or location"
            aria-label="Search jobs"
            className="bg-card pl-9"
          />
        </div>

        {/* List */}
        <div className="mt-7">
          {isLoading && (
            <p className="py-16 text-center text-sm text-muted-foreground">
              Loading jobs...
            </p>
          )}

          {isError && (
            <p className="py-16 text-center text-sm text-destructive">
              Could not load jobs. {error?.message}
            </p>
          )}

          {!isLoading && !isError && visible.length === 0 && (
            <p className="py-16 text-center text-sm text-muted-foreground">
              No jobs match this view.
            </p>
          )}

          <ul className="space-y-3">
            {visible.map((job) => (
              <li
                key={job.id}
                className="flex flex-wrap items-start justify-between gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="min-w-0">
                  <p className="font-medium text-card-foreground">
                    {job.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {job.company}, {job.location}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Posted {formatDate(job.created_at)} by {job.posted_by}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <Badge
                    variant="secondary"
                    className={cn(
                      'rounded-full font-normal',
                      job.is_active
                        ? 'bg-accent text-primary'
                        : 'bg-muted text-muted-foreground',
                    )}
                  >
                    {job.is_active ? 'Active' : 'Inactive'}
                  </Badge>

                  <Button
                    onClick={() => setViewJob(job)}
                    variant="outline"
                    size="icon-sm"
                    aria-label={`View ${job.title}`}
                  >
                    <Eye className="size-4" aria-hidden="true" />
                  </Button>
                  <Button
                    onClick={() => {
                      setEditingJob(job);
                      setFormOpen(true);
                    }}
                    variant="outline"
                    size="icon-sm"
                    aria-label={`Edit ${job.title}`}
                  >
                    <Pencil className="size-4" aria-hidden="true" />
                  </Button>
                  <Button
                    onClick={() => setDeleteJob(job)}
                    variant="outline"
                    size="icon-sm"
                    aria-label={`Delete ${job.title}`}
                    className="text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Pagination */}
        {filtered.length > PAGE_SIZE && (
          <div className="mt-8 flex items-center justify-between">
            <Button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              variant="outline"
              size="sm"
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
              size="sm"
            >
              Next
            </Button>
          </div>
        )}
      </div>

      {/* Modals */}
      <JobFormModal
        job={editingJob}
        open={formOpen}
        onClose={() => setFormOpen(false)}
        adminEmail={session?.user?.email}
      />

      <JobViewModal
        job={viewJob}
        onClose={() => setViewJob(null)}
        onEdit={(job) => {
          setViewJob(null);
          setEditingJob(job);
          setFormOpen(true);
        }}
      />

      <DeleteJobDialog job={deleteJob} onClose={() => setDeleteJob(null)} />
    </main>
  );
}
