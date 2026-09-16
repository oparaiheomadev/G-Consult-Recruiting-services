import { Link } from 'react-router';
import { motion } from 'motion/react';
import { fadeUp, fadeUpDelayed } from '@/lib/motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// A small reusable heading for the three detail columns
function ColumnTitle({ children }) {
  return (
    <h3 className="font-sans text-xs font-medium tracking-wide text-foreground">
      {children}
    </h3>
  );
}

export default function ServiceBlock({
  id,
  eyebrow,
  title,
  lede,
  includes,
  stages,
  timeline,
  fee,
  needed,
  image,
  imageAlt,
  pullQuote,
  statValue,
  statLabel,
  reverse = false,
  surface = false,
}) {
  // Is there anything to show in the second column?
  const hasSideContent = image || pullQuote || statValue;

  // When reversed, the side content moves to the left
  const textOrder = reverse ? 'md:order-2' : '';
  const sideOrder = reverse ? 'md:order-1' : '';

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        'scroll-mt-32 overflow-hidden py-24 md:py-28',
        surface ? 'bg-surface' : 'bg-background',
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* TOP HALF — heading on one side, visual on the other */}
        <div
          className={cn(
            'grid items-center gap-12 md:gap-16',
            hasSideContent && 'md:grid-cols-[1.15fr_0.85fr]',
          )}
        >
          <motion.div {...fadeUp} className={textOrder}>
            <p className="text-sm text-primary">{eyebrow}</p>
            <h2
              id={`${id}-heading`}
              className="mt-3 max-w-lg text-3xl leading-tight tracking-tight text-foreground md:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              {lede}
            </p>
          </motion.div>

          {/* Only one of these three will ever show */}
          {image && (
            <motion.div
              {...fadeUpDelayed(0.1)}
              className={cn('relative isolate', sideOrder)}
            >
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-6 -z-10 size-28 rotate-[41deg] bg-accent"
              />
            </motion.div>
          )}

          {statValue && (
            <motion.div
              {...fadeUpDelayed(0.1)}
              className={cn('border-l-2 border-primary pl-7', sideOrder)}
            >
              <span className="block font-serif text-6xl text-foreground md:text-7xl">
                {statValue}
              </span>
              <span className="mt-3 block max-w-56 text-sm leading-relaxed text-muted-foreground">
                {statLabel}
              </span>
            </motion.div>
          )}

          {pullQuote && (
            <motion.blockquote
              {...fadeUpDelayed(0.1)}
              className={cn(
                'border-l-2 border-primary pl-7 font-serif text-xl italic leading-relaxed text-foreground md:text-2xl',
                sideOrder,
              )}
            >
              {pullQuote}
            </motion.blockquote>
          )}
        </div>

        {/* BOTTOM HALF — three columns of detail */}
        <div className="mt-16 grid gap-12 border-t border-border pt-14 md:grid-cols-3 md:gap-10">
          <motion.div {...fadeUpDelayed(0)}>
            <ColumnTitle>What's included</ColumnTitle>
            <ul className="mt-5 space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] size-1.5 shrink-0 rotate-[43deg] bg-primary"
                  />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUpDelayed(0.08)}>
            <ColumnTitle>How it runs</ColumnTitle>
            <ol className="mt-5 space-y-4">
              {stages.map((stage, i) => (
                <li key={stage} className="flex items-start gap-3">
                  <span className="mt-px w-4 shrink-0 font-serif text-sm text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {stage}
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div {...fadeUpDelayed(0.16)}>
            <ColumnTitle>Practicalities</ColumnTitle>
            <dl className="mt-5 space-y-4">
              <div>
                <dt className="text-xs text-muted-foreground">
                  Typical timeline
                </dt>
                <dd className="mt-1 text-sm text-foreground">{timeline}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Fee structure</dt>
                <dd className="mt-1 text-sm leading-relaxed text-foreground">
                  {fee}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">
                  What we need from you
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-foreground">
                  {needed}
                </dd>
              </div>
            </dl>

            <Button asChild size="sm" className="mt-7 rounded-full px-6">
              <Link to="/contact">
                Talk to us about {eyebrow.toLowerCase()}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
