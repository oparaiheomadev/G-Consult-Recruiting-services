import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMessage() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // handle input change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }

  // validate form
  function validate() {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  }

  // handle submit
  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSuccess(true);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      // hide success popup after 4 seconds
      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-background min-h-screen pt-24 pb-20 px-6">
      {/* Success popup */}
      {success && (
        <div className="fixed top-6 right-6 z-50 bg-background border border-primary/30 rounded-xl px-6 py-4 shadow-lg animate-fade-in flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <i
              className="ti ti-check text-primary"
              style={{ fontSize: '16px' }}
              aria-hidden="true"
            ></i>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Message sent!</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              We'll be in touch within 2 business hours.
            </p>
          </div>
          <button
            onClick={() => setSuccess(false)}
            className="ml-4 text-muted-foreground hover:text-foreground"
          >
            <i
              className="ti ti-x"
              style={{ fontSize: '14px' }}
              aria-hidden="true"
            ></i>
          </button>
        </div>
      )}

      <div className="container mx-auto max-w-5xl">
        {/* Page header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-primary mb-3">
            Get in touch
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground leading-tight">
            Let's talk
          </h1>
          <p className="text-sm text-subtle mt-3 max-w-md leading-relaxed">
            Whether you're a business, hiring manager, or job seeker — we're
            here to help.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT — contact info */}
          <div className="flex flex-col gap-4">
            <div className="bg-surface border border-border rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <i
                  className="ti ti-map-pin text-primary"
                  style={{ fontSize: '18px' }}
                  aria-hidden="true"
                ></i>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                  Head office address
                </p>
                <p className="text-sm text-foreground">Lagos, Nigeria</p>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <i
                  className="ti ti-mail text-primary"
                  style={{ fontSize: '18px' }}
                  aria-hidden="true"
                ></i>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                  Email address
                </p>
                <a href="mailto:gconsultrecruitments@gmail.com">
                  <p className="text-sm text-foreground">
                    gconsultrecruitments@gmail.com
                  </p>
                </a>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <i
                  className="ti ti-phone text-primary"
                  style={{ fontSize: '18px' }}
                  aria-hidden="true"
                ></i>
              </div>
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                  Phone number
                </p>
                <a href="tel:+2348106863792">
                  <p className="text-sm text-foreground">+234 8106863792</p>
                </a>
                <p className="text-xs text-subtle mt-1">Mon–Fri, 8am–6pm</p>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-5">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                Connect with us
              </p>
              <div className="flex items-center gap-3">
                {[
                  {
                    iconClass: 'ti ti-brand-facebook',
                    label: 'Facebook',
                    href: 'https://facebook.com/gconsult',
                  },
                  {
                    iconClass: 'ti ti-brand-twitter',
                    label: 'Twitter',
                    href: 'https://twitter.com/gconsult',
                  },
                  {
                    iconClass: 'ti ti-brand-instagram',
                    label: 'Instagram',
                    href: 'https://instagram.com/gconsult',
                  },
                  {
                    iconClass: 'ti ti-brand-linkedin',
                    label: 'LinkedIn',
                    href: 'https://linkedin.com/company/gconsult',
                  },
                ].map(({ iconClass, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-border bg-cardbg-cardflex items-center justify-center text-subtle hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                  >
                    <i
                      className={iconClass}
                      style={{ fontSize: '15px' }}
                      aria-hidden="true"
                    ></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <form
            onSubmit={handleSubmit}
            className="bg-cardbg-cardborder border-border rounded-2xl p-8"
          >
            <h2 className="font-serif text-xl font-medium text-foreground mb-1">
              Send us a message
            </h2>
            <p className="text-xs text-subtle mb-6">
              A consultant will respond within 2 business hours.
            </p>

            {/* Full name */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1.5">
                Full name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full bg-surface border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-subtle focus:outline-none transition-colors ${
                  errors.fullName
                    ? 'border-red-400'
                    : 'border-border focus:border-primary'
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Company */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1.5">
                Company name <span className="text-subtle">(optional)</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your organisation"
                className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1.5">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full bg-surface border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-subtle focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-400'
                      : 'border-border focus:border-primary'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1.5">
                  Phone <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234"
                  className={`w-full bg-surface border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-subtle focus:outline-none transition-colors ${
                    errors.phone
                      ? 'border-red-400'
                      : 'border-border focus:border-primary'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1.5">
                Subject <span className="text-primary">*</span>
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full bg-surface border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none transition-colors ${
                  errors.subject
                    ? 'border-red-400'
                    : 'border-border focus:border-primary'
                }`}
              >
                <option value="">Select a subject</option>
                <option>I want to hire talent</option>
                <option>I'm looking for a job</option>
                <option>Executive search enquiry</option>
                <option>HR consulting</option>
                <option>General enquiry</option>
              </select>
              {errors.subject && (
                <p className="text-xs text-red-500 mt-1">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1.5">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                className={`w-full bg-surface border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-subtle focus:outline-none transition-colors resize-none ${
                  errors.message
                    ? 'border-red-400'
                    : 'border-border focus:border-primary'
                }`}
              />
              {errors.message && (
                <p className="text-xs text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground text-sm font-semibold py-3 rounded-lg hover:bg-background hover:text-foreground transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <i
                    className="ti ti-loader animate-spin"
                    style={{ fontSize: '15px' }}
                    aria-hidden="true"
                  ></i>
                  Sending...
                </>
              ) : (
                'Send message'
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
