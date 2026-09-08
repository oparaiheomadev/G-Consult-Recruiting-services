import { useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../lib/supabase';

export default function AdminLogin() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
      setSuccess('Account created successfully! Please sign in.');
      setIsSignUp(false);
      setEmail('');
      setPassword('');
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    navigate('/admin/dashboard');
  };

  return (
    <main className="bg-background min-h-screen flex items-center justify-center px-6">
      <div className="bg-card border border-border rounded-2xl p-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold tracking-tight">
            <span className="font-serif italic text-foreground">G -</span>
            <span className="text-primary">Consult</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            {isSignUp ? 'Create admin account' : 'Admin portal'}
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 mb-6">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {/* Success message */}
        {success && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 mb-6">
            <p className="text-sm text-primary">{success}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gconsult.ng"
              required
              className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground text-sm font-semibold py-3 rounded-lg hover:opacity-90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            {loading
              ? 'Please wait...'
              : isSignUp
                ? 'Create account'
                : 'Sign in'}
          </button>
        </form>

        {/* Toggle */}
        <button
          onClick={() => {
            setIsSignUp(!isSignUp);
            setError('');
            setSuccess('');
          }}
          className="w-full text-center text-xs text-muted-foreground mt-4 hover:text-foreground transition-colors"
        >
          {isSignUp
            ? 'Already have an account? Sign in'
            : 'New admin? Create account'}
        </button>
      </div>
    </main>
  );
}
