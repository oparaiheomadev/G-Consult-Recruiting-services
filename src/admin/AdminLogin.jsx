import { useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import logoLight from '@/assets/Gconsults-light.png';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

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
  }

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-surface px-6 py-16">
      {/* Diamond field */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-24 -z-10 size-72 rotate-[41deg] bg-accent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 -z-10 size-80 rotate-[47deg] bg-accent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-24 right-1/4 -z-10 size-16 rotate-[43deg] bg-primary/10"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-32 left-1/4 -z-10 size-10 rotate-[44deg] bg-primary/15"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-16 -z-10 size-5 rotate-[42deg] bg-primary/20"
      />

      <div className="w-full max-w-sm">
        <img
          src={logoLight}
          alt=" Professional Services"
          className="mx-auto mb-8 h-9 w-auto shrink-0"
        />

        <div className="rounded-2xl border border-border bg-secondary p-9 shadow-sm">
          <h1 className="text-center font-serif text-xl text-foreground">
            Admin sign in
          </h1>
          <p className="mt-1.5 text-center text-sm text-muted-foreground">
            Manage job listings and postings.
          </p>

          {/* Three brand diamonds as a divider */}
          {/* <div
            aria-hidden="true"
            className="mt-7 flex items-center justify-center gap-1.5"
          >
            <span className="size-1.5 rotate-[43deg] bg-foreground" />
            <span className="size-2 rotate-[43deg] bg-primary" />
            <span className="size-2.5 rotate-[43deg] bg-primary/50" />
          </div> */}

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div>
              <Label htmlFor="email" className="text-sm text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="you@.ng"
                className="mt-2 bg-background"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-sm text-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className="mt-2 bg-background"
              />
            </div>

            {error && (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-full"
            >
              {loading ? 'Signing in' : 'Sign in'}
            </Button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Staff access only. Accounts are created by invitation.
        </p>
      </div>
    </main>
  );
}
