import { Link } from 'react-router-dom';

const footerLinks = {
  Company: [
    { label: 'About us', to: '/about' },
    { label: 'Our team', to: '/about' },
    { label: 'Careers', to: '/contact' },
  ],
  Services: [
    { label: 'Executive search', to: '/services' },
    { label: 'Fast-track hiring', to: '/services' },
    { label: 'Contract staffing', to: '/services' },
    { label: 'HR consulting', to: '/services' },
  ],
  Contact: [
    { label: 'hello@gconsult.ng', to: '/contact' },
    { label: '+234 800 000 0000', to: '/contact' },
    { label: 'Lagos · Abuja', to: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background px-6 pt-16 pb-8">
      <div className="container mx-auto">
        {/* Top row — logo + tagline */}
        <div className="mb-12">
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="font-serif italic text-foreground">G -</span>
            <span className="text-primary">Consult</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
            Connecting exceptional people with ambitious organisations across
            Nigeria.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h5 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {heading}
              </h5>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 G-Consult. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy policy
            </Link>
            <Link
              to="/contact"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
