import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../lib/supabase';
import { X, Plus, Trash2, Eye, Pencil, Search, LogOut } from 'lucide-react';

const PAGE_SIZE = 15;

export default function AdminDashboard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  // filters
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'active' | 'inactive'
  const [currentPage, setCurrentPage] = useState(1);

  // modals
  const [showPostModal, setShowPostModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null); // job being viewed/deleted
  const [editingJob, setEditingJob] = useState(null); // job being edited, null = creating new

  const [submitting, setSubmitting] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [form, setForm] = useState({
    company_info: '',
    title: '',
    company: '',
    location: '',
    type: '',
    sector: '',
    salary: '',
    description: '',
    requirements: '',
    posted_by: '',
    responsibilities: '',
    closing_date: '',
    How_toapply: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  const fetchJobs = async () => {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching jobs:', error.message);
      return;
    }
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // whenever search or status filter changes, jump back to page 1
  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({
      company_info: '',
      title: '',
      company: '',
      location: '',
      type: '',
      sector: '',
      salary: '',
      description: '',
      requirements: '',
      responsibilities: '',
      closing_date: '',
      How_toapply: '',
    });
  };

  const openPostModal = () => {
    setEditingJob(null);
    resetForm();
    setShowPostModal(true);
  };

  const openEditModal = (job) => {
    setEditingJob(job);
    setForm({
      company_info: job.company_info || '',
      title: job.title,
      company: job.company || '',
      location: job.location,
      type: job.type,
      sector: job.sector || '',
      salary: job.salary || '',
      description: job.description,
      requirements: job.requirements || '',
      responsibilities: job.responsibilities || '',
      closing_date: job.closing_date || '',
      How_toapply: job.How_toapply || '',
    });
    setShowViewModal(false);
    setShowPostModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (editingJob) {
      // updating an existing job
      const { error } = await supabase
        .from('jobs')
        .update({ ...form })
        .eq('id', editingJob.id);

      if (error) {
        console.error('Error updating job:', error.message);
        setSubmitting(false);
        return;
      }
    } else {
      // creating a new job
      const { error } = await supabase.from('jobs').insert({
        ...form,
        posted_by: session.user.email,
        is_active: true,
      });

      if (error) {
        console.error('Error posting job:', error.message);
        setSubmitting(false);
        return;
      }
    }

    resetForm();
    setEditingJob(null);
    setShowPostModal(false);
    setSubmitting(false);
    fetchJobs();
  };

  const confirmDelete = (job) => {
    setSelectedJob(job);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    setDeleting(true);
    const { error } = await supabase
      .from('jobs')
      .delete()
      .eq('id', selectedJob.id);
    setDeleting(false);

    if (error) {
      console.error('Error deleting job:', error.message);
      return;
    }
    setShowDeleteModal(false);
    setSelectedJob(null);
    fetchJobs();
  };

  const toggleActive = async (id, currentStatus) => {
    const { error } = await supabase
      .from('jobs')
      .update({ is_active: !currentStatus })
      .eq('id', id);

    if (error) {
      console.error('Error updating job:', error.message);
      return;
    }
    setShowViewModal(false);
    fetchJobs();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const openViewModal = (job) => {
    setSelectedJob(job);
    setShowViewModal(true);
  };

  // ----- derived data: counts, filtering, pagination -----

  const activeCount = jobs.filter((j) => j.is_active).length;
  const inactiveCount = jobs.filter((j) => !j.is_active).length;

  const filteredJobs = jobs
    .filter((job) => {
      if (statusFilter === 'active') return job.is_active;
      if (statusFilter === 'inactive') return !job.is_active;
      return true;
    })
    .filter((job) => job.title.toLowerCase().includes(search.toLowerCase()));

  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / PAGE_SIZE));
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <main className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-[#0b2e1f] px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-white font-medium text-base">
            G-<span className="text-primary">Consult</span> Admin
          </h1>
          <p className="text-gray-300 text-xs mt-0.5">{session?.user?.email}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={openPostModal}
            className="flex items-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            <Plus size={15} />
            Post new job
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 border border-white/30 text-white text-sm px-3 py-2 rounded-lg hover:bg-white/10 transition"
          >
            <LogOut size={15} />
            Logout
          </button>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-xl font-medium text-foreground">
            All posted jobs
          </h2>
          <span className="text-sm text-subtle">{jobs.length} jobs</span>
        </div>

        {/* status tabs */}
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-4 py-1.5 rounded-full text-sm ${
              statusFilter === 'all'
                ? 'bg-[#0b2e1f] text-white'
                : 'bg-white border'
            }`}
          >
            All {jobs.length}
          </button>
          <button
            onClick={() => setStatusFilter('active')}
            className={`px-4 py-1.5 rounded-full text-sm ${
              statusFilter === 'active'
                ? 'bg-[#0b2e1f] text-white'
                : 'bg-white border'
            }`}
          >
            Active {activeCount}
          </button>
          <button
            onClick={() => setStatusFilter('inactive')}
            className={`px-4 py-1.5 rounded-full text-sm ${
              statusFilter === 'inactive'
                ? 'bg-[#0b2e1f] text-white'
                : 'bg-white border'
            }`}
          >
            Inactive {inactiveCount}
          </button>
        </div>

        {/* search */}
        <div className="relative mb-6">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-subtle"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search jobs..."
            className="w-full bg-white border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary"
          />
        </div>

        {/* job list */}
        {loading ? (
          <p className="text-subtle text-sm">Loading jobs...</p>
        ) : paginatedJobs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-subtle text-sm">No jobs found.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {paginatedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-cardbg-cardborder border-border rounded-xl px-6 py-5 flex items-start justify-between gap-4"
              >
                <div>
                  <h3 className="text-foreground font-medium text-sm">
                    {job.title}
                  </h3>
                  <p className="text-subtle text-xs mt-1">
                    {job.location} · {formatDate(job.created_at)}
                  </p>
                  <p className="text-subtle text-xs mt-1">
                    Posted by {job.posted_by}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      job.is_active
                        ? 'bg-primary/10 text-primary'
                        : 'bg-red-50 text-red-500'
                    }`}
                  >
                    {job.is_active ? 'Active' : 'Inactive'}
                  </span>
                  <button
                    onClick={() => openViewModal(job)}
                    className="p-2 rounded-lg border text-subtle hover:text-foreground"
                    title="View job"
                  >
                    <Eye size={15} />
                  </button>
                  <button
                    onClick={() => openEditModal(job)}
                    className="p-2 rounded-lg border text-subtle hover:text-foreground"
                    title="Edit job"
                  >
                    <Pencil size={15} />
                  </button>
                  <button
                    onClick={() => confirmDelete(job)}
                    className="p-2 rounded-lg border border-red-200 text-red-400 hover:bg-red-50"
                    title="Delete job"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* pagination — only shows once there's more than one page's worth */}
        {filteredJobs.length > PAGE_SIZE && (
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm border rounded-lg disabled:opacity-40"
            >
              Prev
            </button>
            <span className="text-sm text-subtle">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm border rounded-lg disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Post / Edit job modal */}
      {showPostModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <h2 className="text-lg font-medium">
                {editingJob ? 'Edit job' : 'Post new job'}
              </h2>
              <button onClick={() => setShowPostModal(false)}>
                <X size={18} />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="px-6 py-6 flex flex-col gap-4"
            >
              <div>
                <label className="block text-xs font-medium mb-1.5">
                  Company info <span className="text-subtle">(optional)</span>
                </label>
                <textarea
                  name="company_info"
                  value={form.company_info}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Brief information about the company..."
                  className="w-full border rounded-lg px-4 py-2.5 text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5">
                  Job title
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Marketing Manager"
                  className="w-full border rounded-lg px-4 py-2.5 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5">
                  Company
                </label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Zenith Bank"
                  className="w-full border rounded-lg px-4 py-2.5 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5">
                    Location
                  </label>
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    required
                    placeholder="Lagos or Remote"
                    className="w-full border rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5">
                    Job type
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-4 py-2.5 text-sm"
                  >
                    <option value="">Select type</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5">
                    Sector
                  </label>
                  <select
                    name="sector"
                    value={form.sector}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-4 py-2.5 text-sm"
                  >
                    <option value="">Select sector</option>
                    <option>Finance</option>
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>FMCG</option>
                    <option>Education</option>
                    <option>Public sector</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5">
                    Salary (optional)
                  </label>
                  <input
                    name="salary"
                    value={form.salary}
                    onChange={handleChange}
                    placeholder="₦500,000 - ₦800,000"
                    className="w-full border rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5">
                  Job description
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Short intro about the role..."
                  className="w-full border rounded-lg px-4 py-2.5 text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5">
                  Key responsibilities{' '}
                  <span className="text-subtle normal-case">
                    (one per line)
                  </span>
                </label>
                <textarea
                  name="responsibilities"
                  value={form.responsibilities}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={
                    'Manage a portfolio of clients\nLead weekly team meetings\n...'
                  }
                  className="w-full border rounded-lg px-4 py-2.5 text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5">
                  Requirements{' '}
                  <span className="text-subtle normal-case">
                    (one per line)
                  </span>
                </label>
                <textarea
                  name="requirements"
                  value={form.requirements}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={
                    '3+ years experience\nStrong communication skills\n...'
                  }
                  className="w-full border rounded-lg px-4 py-2.5 text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-1.5">
                  How to apply
                </label>
                <textarea
                  name="How_toapply"
                  value={form.How_toapply}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Send your CV and cover letter to..."
                  className="w-full border rounded-lg px-4 py-2.5 text-sm resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* <div>
                  <label className="block text-xs font-medium mb-1.5">
                    Apply email
                  </label>
                  <input
                    name="apply_email"
                    type="email"
                    value={form.apply_email}
                    onChange={handleChange}
                    required
                    placeholder="hr@company.com"
                    className="w-full border rounded-lg px-4 py-2.5 text-sm"
                  />
                </div> */}
                <div>
                  <label className="block text-xs font-medium mb-1.5">
                    Closing date
                  </label>
                  <input
                    name="closing_date"
                    type="date"
                    value={form.closing_date}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="bg-[#0b2e1f] text-white text-sm font-semibold py-3 rounded-lg disabled:opacity-60"
              >
                {submitting
                  ? 'Saving...'
                  : editingJob
                    ? 'Save changes'
                    : 'Publish job'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* View job modal */}
      {showViewModal && selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] flex flex-col">
            {/* header stays fixed, doesn't scroll away */}
            <div className="flex items-center justify-between px-6 py-5 border-b shrink-0">
              <h2 className="text-lg font-medium">{selectedJob.title}</h2>
              <button onClick={() => setShowViewModal(false)}>
                <X size={18} />
              </button>
            </div>

            {/* everything below scrolls internally */}
            <div className="px-6 py-6 overflow-y-auto">
              <p className="text-sm mb-1">
                <span className="font-semibold">Company:</span>{' '}
                {selectedJob.company}
              </p>
              <p className="text-sm mb-1">
                <span className="font-semibold">Location:</span>{' '}
                {selectedJob.location}
              </p>

              <div className="flex gap-2 my-3">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                  {selectedJob.type}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                  {selectedJob.sector}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${selectedJob.is_active ? 'bg-primary/10 text-primary' : 'bg-red-50 text-red-500'}`}
                >
                  {selectedJob.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>

              {selectedJob.salary && (
                <p className="text-sm mb-4">
                  <span className="font-semibold">Salary:</span>{' '}
                  {selectedJob.salary}
                </p>
              )}

              {selectedJob.company_info && (
                <p className="text-sm mb-4">
                  <span className="font-semibold">Company Info:</span>{' '}
                  {selectedJob.company_info}
                </p>
              )}

              <p className="font-semibold text-sm mb-1">Job description</p>
              <p className="text-sm text-muted-foreground mb-4">
                {selectedJob.description}
              </p>

              <p className="font-semibold text-sm mb-1">Key Responsibilities</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mb-4">
                {selectedJob.responsibilities
                  ?.split('\n')
                  .filter((line) => line.trim() !== '')
                  .map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
              </ul>

              <p className="font-semibold text-sm mb-1">Requirements</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground mb-4">
                {selectedJob.requirements
                  ?.split('\n')
                  .filter((line) => line.trim() !== '')
                  .map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
              </ul>

              {selectedJob.How_toapply && (
                <>
                  <p className="font-semibold text-sm mb-1">How to apply</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {selectedJob.How_toapply}
                  </p>
                </>
              )}

              {/* <p className="text-sm mb-1">
                <span className="font-semibold">Apply email:</span>{' '}
                {selectedJob.apply_email}
              </p> */}
              {selectedJob.closing_date && (
                <p className="text-sm mb-1">
                  <span className="font-semibold">Closing date:</span>{' '}
                  {formatDate(selectedJob.closing_date)}
                </p>
              )}

              <p className="text-xs text-subtle mt-4 mb-6">
                Posted by {selectedJob.posted_by}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => openEditModal(selectedJob)}
                  className="flex-1 border rounded-lg py-2.5 text-sm flex items-center justify-center gap-2"
                >
                  <Pencil size={14} /> Edit
                </button>
                <button
                  onClick={() =>
                    toggleActive(selectedJob.id, selectedJob.is_active)
                  }
                  className="flex-1 border rounded-lg py-2.5 text-sm"
                >
                  {selectedJob.is_active ? 'Mark inactive' : 'Mark active'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirmation modal */}
      {showDeleteModal && selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6 text-center">
            <p className="font-medium mb-2">Delete "{selectedJob.title}"?</p>
            <p className="text-sm text-subtle mb-6">
              This can't be undone. The listing will be removed immediately.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 border rounded-lg py-2.5 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex-1 bg-red-500 text-white rounded-lg py-2.5 text-sm disabled:opacity-60"
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
