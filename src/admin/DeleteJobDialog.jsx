import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useDeleteJob } from '@/hooks/useJobs';

export default function DeleteJobDialog({ job, onClose }) {
  const deleteJob = useDeleteJob();

  if (!job) return null;

  function handleDelete() {
    deleteJob.mutate(job.id, { onSuccess: onClose });
  }

  return (
    <Dialog open={Boolean(job)} onOpenChange={(next) => !next && onClose()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-serif text-lg">
            Delete this listing?
          </DialogTitle>
          <DialogDescription>
            {job.title} at {job.company} will be removed immediately. This
            cannot be undone.
          </DialogDescription>
        </DialogHeader>

        {deleteJob.isError && (
          <p className="text-sm text-destructive" role="alert">
            Could not delete. {deleteJob.error?.message}
          </p>
        )}

        <div className="mt-2 flex gap-3">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1 rounded-full"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            disabled={deleteJob.isPending}
            variant="destructive"
            className="flex-1 rounded-full"
          >
            {deleteJob.isPending ? 'Deleting' : 'Delete'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
