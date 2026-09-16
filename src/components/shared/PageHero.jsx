import { motion } from 'motion/react';
import { fadeUp, fadeUpDelayed } from '@/lib/motion';

export default function PageHero({ badge, title, intro }) {
  return (
    <section className="dark relative isolate overflow-hidden bg-background pt-36 pb-20 md:pt-44 md:pb-24">
      <motion.span
        {...fadeUpDelayed(0.3)}
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-20 -z-10 size-72 rotate-[41deg] bg-secondary/40"
      />
      <motion.span
        {...fadeUpDelayed(0.3)}
        aria-hidden="true"
        className="pointer-events-none absolute top-20 -left-12 -z-10 size-36 rotate-[43deg] bg-secondary/30"
      />
      <motion.span
        {...fadeUpDelayed(0.3)}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-1/3 -z-10 size-10 rotate-[47deg] bg-secondary/50"
      />

      <div className="mx-auto max-w-6xl px-6">
        {badge && (
          <motion.span
            {...fadeUpDelayed(0.3)}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/10 py-1.5 pl-3 pr-4"
          >
            <span
              aria-hidden="true"
              className="size-1.5 rotate-[43deg] bg-primary"
            />
            <span className="text-xs text-primary">{badge}</span>
          </motion.span>
        )}

        <motion.h1
          {...fadeUpDelayed(0.5)}
          className="max-w-xl text-4xl leading-[1.15] tracking-tight text-foreground md:text-5xl"
        >
          {title}
        </motion.h1>

        {intro && (
          <motion.p
            {...fadeUpDelayed(0.7)}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
