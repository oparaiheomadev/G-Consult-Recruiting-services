import { Link } from 'react-router';

export default function HeroBanner({
  image,
  badge,
  title,
  highlight,
  description,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  OverlayClassName = 'bg-background/80',
}) {
  return (
    <section
      className="relative bg-background bg-cover bg-center bg-no-repeat min-h-[70vh] flex flex-col justify-center px-6 py-24 "
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${OverlayClassName}`} />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-3xl text-center">
        {/* Badge */}
        {badge && (
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8 w-fit animate-fade-in mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs uppercase tracking-widest">
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground leading-tight mb-6 animate-fade-in animation-delay-100">
          {title}{' '}
          {highlight && (
            <em className="text-secondary-foreground not-italic">
              {highlight}
            </em>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mb-10 animate-fade-in animation-delay-200 mx-auto text-center">
            {description}
          </p>
        )}

        {/* CTAs */}
        {(primaryText || secondaryText) && (
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            {primaryText && (
              <Link
                to={primaryLink}
                className="bg-primary text-primary-foreground text-sm font-semibold px-7 py-3 rounded-full hover:opacity-90 transition"
              >
                {primaryText}
              </Link>
            )}
            {secondaryText && (
              <Link
                to={secondaryLink}
                className="bg-e8ede8 text-foreground text-sm font-semibold px-7 py-3 rounded-full border border-foreground/20 hover:bg-surface transition"
              >
                {secondaryText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
