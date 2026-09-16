import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Check, Loader2, Mail, MapPin, Phone } from 'lucide-react';
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
  "I'm looking for a job",
  'Executive search enquiry',
  'HR consulting',
  'Payroll',
  'General enquiry',
];

const details = [
  {
    icon: Mail,
    title: 'Email us',
    note: 'We reply within two working hours.',
    value: 'gconsultrecruitments@gmail.com',
    href: 'mailto:gconsultrecruitments@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Office',
    note: 'By appointment, so call ahead.',
    value: 'Lagos, Nigeria',
    href: null,
  },
  {
    icon: Phone,
    title: 'Call us',
    note: 'Monday to Friday, 8am to 6pm.',
    value: '+234 810 686 3792',
    href: 'tel:+2348106863792',
  },
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/gconsult',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.89 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0 4.86a4.98 4.98 0 1 0 0 9.96 4.98 4.98 0 0 0 0-9.96Zm0 8.21a3.23 3.23 0 1 1 0-6.46 3.23 3.23 0 0 1 0 6.46Zm5.17-8.4a1.16 1.16 0 1 0 0-2.33 1.16 1.16 0 0 0 0 2.33Z',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/gconsult',
    path: 'M13.5 22v-8.4h2.83l.42-3.28H13.5V8.22c0-.95.26-1.6 1.63-1.6h1.74V3.69A23.5 23.5 0 0 0 14.33 3.5c-2.5 0-4.22 1.53-4.22 4.35v2.47H7.28v3.28h2.83V22h3.39Z',
  },
];

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
      'mt-2 border-border bg-surface',
      errors[name] && 'border-destructive focus-visible:border-destructive',
    );

  return (
    <main className="bg-surface pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid overflow-hidden rounded-3xl border border-border md:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT — brand panel */}
          <div className="relative isolate overflow-hidden bg-primary p-9 md:p-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-14 -right-10 -z-10 size-40 rotate-[41deg] bg-primary-foreground/10"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-24 -left-10 -z-10 size-28 rotate-[47deg] bg-primary-foreground/10"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-10 -z-10 size-6 rotate-[43deg] bg-primary-foreground/20"
            />

            <h1 className="font-serif text-2xl text-primary-foreground md:text-3xl">
              Get in touch
            </h1>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
              Hiring, looking for a role, or not sure yet. You will reach one of
              the two consultants who would run your search.
            </p>

            <dl className="mt-10 space-y-7">
              {details.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <Icon
                      className="mt-0.5 size-4 shrink-0 text-primary-foreground/80"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-sm font-medium text-primary-foreground">
                        {item.title}
                      </dt>
                      <dd>
                        <span className="mt-0.5 block text-xs text-primary-foreground/70">
                          {item.note}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1.5 block break-all text-sm text-primary-foreground underline-offset-4 hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="mt-1.5 block text-sm text-primary-foreground">
                            {item.value}
                          </span>
                        )}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>

            <div className="mt-12 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/25 text-primary-foreground/80 transition-colors duration-300 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="bg-card p-9 md:p-10">
            <h2 className="font-serif text-2xl text-card-foreground md:text-3xl">
              Tell us what you need
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Or email us directly at{' '}
              <a
                href="mailto:gconsultrecruitments@gmail.com"
                className="text-primary underline-offset-4 hover:underline"
              >
                gconsultrecruitments@gmail.com
              </a>
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
              <div>
                <Label htmlFor="fullName" className="text-sm text-foreground">
                  Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  maxLength={80}
                  className={fieldClass('fullName')}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="company" className="text-sm text-foreground">
                  Company{' '}
                  <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your organisation"
                  maxLength={100}
                  className={fieldClass('company')}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email" className="text-sm text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={fieldClass('email')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm text-foreground">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234 000 000 0000"
                    maxLength={20}
                    className={fieldClass('phone')}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-destructive">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="text-sm text-foreground">
                  What is this about
                </Label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={cn(
                    'h-9 w-full rounded-md border px-3 text-sm text-foreground outline-none',
                    'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
                    fieldClass('subject'),
                  )}
                >
                  <option value="">Select one</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="text-sm text-foreground">
                  How can we help?
                </Label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about the role..."
                  maxLength={2000}
                  className={cn(
                    'w-full resize-none rounded-md border px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground',
                    'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
                    fieldClass('message'),
                  )}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={mutation.isPending}
                className="w-full rounded-full"
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

              <div aria-live="polite" className="min-h-6">
                {mutation.isSuccess && (
                  <p className="flex items-center gap-2 text-sm text-primary">
                    <Check className="size-4" aria-hidden="true" />
                    Message sent. We will reply within two working hours.
                  </p>
                )}
                {mutation.isError && (
                  <p className="text-sm text-destructive">
                    Something went wrong. Please try again, or email us
                    directly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
