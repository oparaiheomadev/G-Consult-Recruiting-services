import { Link } from 'react-router-dom';

export default function CTABanner({
  label = 'Get started',
  title = 'Ready to hire someone great?',
  description = "Tell us about your open role and we'll have a shortlist on your desk within 48 hours.",
  buttonText = 'Start a search',
  buttonLink = '/contact',
  buttonClassName = 'bg-background text-foreground',
}) {
  return (
    <section className="bg-primary py-20 px-6 text-center">
      <div className="container mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mb-4">
          {label}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-foreground mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-sm text-primary-foreground/70 leading-relaxed mb-8">
          {description}
        </p>
        <Link
          to={buttonLink}
          className={`text-sm font-semibold px-8 py-3 transition-all duration-300 inline-block ${buttonClassName} hover:bg-background hover:text-foreground hover:scale-105`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
