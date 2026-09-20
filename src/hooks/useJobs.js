import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

// The key Query uses to cache and find this data
const JOBS_KEY = ['jobs'];

// ---- Reading ----

export function useJobs() {
  return useQuery({
    queryKey: JOBS_KEY,
    queryFn: async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });
}

// ---- Writing ----
// Each one refetches the list when it succeeds.

export function useCreateJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (job) => {
      const { error } = await supabase.from('jobs').insert(job);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: JOBS_KEY }),
  });
}

export function useUpdateJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, fields }) => {
      const { error } = await supabase.from('jobs').update(fields).eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: JOBS_KEY }),
  });
}

export function useDeleteJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const { error } = await supabase.from('jobs').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: JOBS_KEY }),
  });
}
