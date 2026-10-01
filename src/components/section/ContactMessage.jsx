import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Check, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const empty = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const subjects = [
  'I want to hire talent',
  'Executive search enquiry',
  'HR consulting',
  'Payroll',
  'General enquiry',
];

const fieldBase =
  'w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/10';

export default function ContactMessage() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});

  const mutation = useMutation({
    mutationFn: (data) =>
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.fullName,
          from_email: data.email,
          phone: data.phone,
          company: data.company,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      ),
    onSuccess: () => setForm(empty),
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  function validate() {
    const next = {};

    const name = form.fullName.trim();
    if (!name) next.fullName = 'Full name is required';
    else if (name.length < 2) next.fullName = 'That name looks too short';
    else if (!/^[\p{L}\s'-]+$/u.test(name)) next.fullName = 'Use letters only';

    const email = form.email.trim();
    if (!email) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = 'Enter a valid email address';

    const phone = form.phone.trim();
    if (!phone) next.phone = 'Phone number is required';
    else if (!/^[\d\s+()-]{7,20}$/.test(phone))
      next.phone = 'Enter a valid phone number';

    if (!form.subject) next.subject = 'Please select a subject';

    const message = form.message.trim();
    if (!message) next.message = 'Message is required';
    else if (message.length < 10) next.message = 'Tell us a little more';

    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    mutation.mutate(form);
  }

  const fieldClass = (name) =>
    cn(
      fieldBase,
      errors[name] &&
        'border-destructive focus-visible:border-destructive focus-visible:ring-destructive/10',
    );

  return (
    <main className="relative isolate overflow-hidden bg-surface pt-32 pb-24 md:pt-40 md:pb-28">
      {/* Brand texture */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-24 -z-10 size-72 rotate-[41deg] bg-primary/[0.05]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 -z-10 size-80 rotate-[47deg] bg-primary/[0.05]"
      />

      <div className="mx-auto max-w-2xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            Tell us what you need.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            A consultant replies within two working hours. Or email us at{' '}
            <a
              href="mailto:info@gconsultservices.com.ng"
              className="text-primary underline-offset-4 hover:underline"
            >
              info@gconsultservices.com.ng
            </a>
          </p>
        </div>

        {/* Form card */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-7 shadow-sm md:mt-14 md:p-10">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="fullName" className="mb-2 block text-sm">
                  Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder=""
                  maxLength={80}
                  className={fieldClass('fullName')}
                />
                {errors.fullName && (
                  <p className="mt-2 text-xs text-destructive">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="company" className="mb-2 block text-sm">
                  Company{' '}
                  <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder=""
                  maxLength={100}
                  className={fieldClass('company')}
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="email" className="mb-2 block text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder=""
                  className={fieldClass('email')}
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="mb-2 block text-sm">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder=""
                  maxLength={20}
                  className={fieldClass('phone')}
                />
                {errors.phone && (
                  <p className="mt-2 text-xs text-destructive">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="subject" className="mb-2 block text-sm">
                What is this about
              </Label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={cn(fieldClass('subject'), 'appearance-none')}
              >
                <option value="">Select one</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p className="mt-2 text-xs text-destructive">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="mb-2 block text-sm">
                How can we help?
              </Label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="The role, the team, the timeline, or whatever else is useful."
                maxLength={2000}
                className={cn(fieldClass('message'), 'resize-none')}
              />
              {errors.message && (
                <p className="mt-2 text-xs text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="pt-1">
              <Button
                type="submit"
                size="lg"
                disabled={mutation.isPending}
                className="w-full rounded-full sm:w-auto sm:px-10"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2
                      className="size-4 animate-spin"
                      aria-hidden="true"
                    />
                    Sending
                  </>
                ) : (
                  'Send message'
                )}
              </Button>
            </div>

            <div aria-live="polite" className="min-h-6">
              {mutation.isSuccess && (
                <p className="flex items-center gap-2 text-sm text-primary">
                  <Check className="size-4 shrink-0" aria-hidden="true" />
                  Message sent. We will reply within two working hours.
                </p>
              )}
              {mutation.isError && (
                <p className="text-sm text-destructive">
                  Something went wrong. Please try again, or email us directly.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
