import { Link } from 'react-router';
import { Mail, MapPin, Phone } from 'lucide-react';
import logoDark from '@/assets/gconsult-dark.png';

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'About us', to: '/about' },
      { label: 'Our team', to: '/about' },
      { label: 'Industries', to: '/industries' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Executive search', to: '/services' },
      { label: 'Core recruitment', to: '/services' },
      { label: 'HR consulting', to: '/services' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark relative isolate overflow-hidden bg-background pt-20 pb-8">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 -z-10 size-64 rotate-[41deg] bg-secondary/30"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logoDark}
                alt="Gconsult Professional Services"
                className="h-9 w-auto shrink-0"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Connecting exceptional people with ambitious organisations across
              Nigeria.
            </p>

            <a
              href="https://www.linkedin.com/company/gconsult"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Gconsult on LinkedIn"
              className="mt-6 inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-foreground"
            ></a>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="font-sans text-xs font-medium tracking-wide text-foreground">
                {column.heading}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="font-sans text-xs font-medium tracking-wide text-foreground">
              Contact
            </h2>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>Lagos, Nigeria</span>
              </li>

              <li>
                <a
                  href="tel:+2348106863792"
                  className="flex items-start gap-3 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  <Phone
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>+234 810 686 3792</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:gconsultrecruitments@gmail.com"
                  className="flex items-start gap-3 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  <Mail
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="break-all">
                    gconsultrecruitments@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {year} Gconsult Professional Services. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-xs text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              Privacy policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
