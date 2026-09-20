import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCreateJob, useUpdateJob } from '@/hooks/useJobs';
import { cn } from '@/lib/utils';

const empty = {
  title: '',
  company: '',
  company_info: '',
  location: '',
  type: '',
  sector: '',
  salary: '',
  description: '',
  responsibilities: '',
  requirements: '',
  How_toapply: '',
  closing_date: '',
};

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote', 'Hybrid'];

const sectors = [
  'Fashion and retail',
  'Real estate and property',
  'FMCG and food',
  'Health and optometry',
  'Technology',
  'Other',
];

const fieldBase =
  'mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50';

export default function JobFormModal({ job, open, onClose, adminEmail }) {
  const [form, setForm] = useState(empty);

  const createJob = useCreateJob();
  const updateJob = useUpdateJob();

  const isEditing = Boolean(job);
  const mutation = isEditing ? updateJob : createJob;

  // Load the job into the form when editing, clear it when posting new
  useEffect(() => {
    if (!open) return;

    if (job) {
      setForm({ ...empty, ...job });
    } else {
      setForm(empty);
    }

    mutation.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, job]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isEditing) {
      const { id, created_at, posted_by, is_active, ...fields } = form;
      updateJob.mutate({ id: job.id, fields }, { onSuccess: onClose });
    } else {
      createJob.mutate(
        { ...form, posted_by: adminEmail, is_active: true },
        { onSuccess: onClose },
      );
    }
  }

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">
            {isEditing ? 'Edit job' : 'Post a job'}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? 'Changes go live as soon as you save.'
              : 'This will be published immediately and marked active.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Job title</Label>
            <Input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="Chief Optometrist"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              placeholder="Specsmart"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="company_info">
              About the company{' '}
              <span className="text-muted-foreground">(optional)</span>
            </Label>
            <textarea
              id="company_info"
              name="company_info"
              value={form.company_info}
              onChange={handleChange}
              rows={2}
              className={cn(fieldBase, 'resize-none')}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                placeholder="Lagos or Remote"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="type">Job type</Label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
                required
                className={cn(fieldBase, 'h-9 py-0')}
              >
                <option value="">Select one</option>
                {jobTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="sector">Sector</Label>
              <select
                id="sector"
                name="sector"
                value={form.sector}
                onChange={handleChange}
                required
                className={cn(fieldBase, 'h-9 py-0')}
              >
                <option value="">Select one</option>
                {sectors.map((sector) => (
                  <option key={sector}>{sector}</option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="salary">
                Salary <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input
                id="salary"
                name="salary"
                value={form.salary}
                onChange={handleChange}
                placeholder="₦500,000 to ₦800,000"
                className="mt-2"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={3}
              placeholder="A short introduction to the role."
              className={cn(fieldBase, 'resize-none')}
            />
          </div>

          <div>
            <Label htmlFor="responsibilities">
              Responsibilities{' '}
              <span className="text-muted-foreground">(one per line)</span>
            </Label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              value={form.responsibilities}
              onChange={handleChange}
              required
              rows={4}
              className={cn(fieldBase, 'resize-none')}
            />
          </div>

          <div>
            <Label htmlFor="requirements">
              Requirements{' '}
              <span className="text-muted-foreground">(one per line)</span>
            </Label>
            <textarea
              id="requirements"
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              required
              rows={4}
              className={cn(fieldBase, 'resize-none')}
            />
          </div>

          <div>
            <Label htmlFor="How_toapply">How to apply</Label>
            <textarea
              id="How_toapply"
              name="How_toapply"
              value={form.How_toapply}
              onChange={handleChange}
              rows={2}
              placeholder="Send your CV to..."
              className={cn(fieldBase, 'resize-none')}
            />
          </div>

          <div>
            <Label htmlFor="closing_date">Closing date</Label>
            <Input
              id="closing_date"
              name="closing_date"
              type="date"
              value={form.closing_date}
              onChange={handleChange}
              required
              className="mt-2"
            />
          </div>

          {mutation.isError && (
            <p className="text-sm text-destructive" role="alert">
              Could not save. {mutation.error?.message}
            </p>
          )}

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 rounded-full"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="flex-1 rounded-full"
            >
              {mutation.isPending
                ? 'Saving'
                : isEditing
                  ? 'Save changes'
                  : 'Publish'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
