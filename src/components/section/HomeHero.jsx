import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Button } from '@/components/ui/button';

const rotatingWords = [
  'move markets',
  'build cultures',
  'drive growth',
  'shape futures',
];

const proof = [
  { value: '47', label: 'hours to first shortlist' },
  { value: '5', label: 'candidates, never more' },
  { value: '90', label: 'days replacement cover' },
];

const ease = [0.22, 1, 0.36, 1];

export default function HomeHero() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % rotatingWords.length),
      3200,
    );
    return () => clearInterval(id);
  }, [reduceMotion]);

  const enter = reduceMotion
    ? {}
    : {
        initial: 'hidden',
        animate: 'shown',
        variants: {
          hidden: {},
          shown: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        },
      };

  const item = reduceMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 14 },
          shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
        },
      };

  return (
    <section
      aria-labelledby="hero-heading"
      className="dark relative isolate overflow-hidden bg-background pt-36 pb-16 md:pt-44 md:pb-20"
    >
      {/* Brand texture */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-16 size-72 rotate-[41deg] bg-secondary/50"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-40 size-16 rotate-[47deg] bg-secondary/40"
      />

      <motion.div
        {...enter}
        className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.6fr_0.4fr] md:items-end"
      >
        <div>
          <motion.h1
            {...item}
            id="hero-heading"
            className="max-w-xl text-4xl leading-[1.12] tracking-tight text-foreground md:text-6xl"
          >
            We don't fill roles.
            <br />
            We find people who{' '}
            <span className="relative inline-block align-baseline">
              {/* Reserves width so the line never reflows */}
              <span className="invisible" aria-hidden="true">
                shape futures
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={index}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 10, filter: 'blur(6px)' }
                  }
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={
                    reduceMotion
                      ? undefined
                      : { opacity: 0, y: -10, filter: 'blur(6px)' }
                  }
                  transition={{ duration: 0.45, ease }}
                  className="absolute inset-0 whitespace-nowrap italic text-primary"
                >
                  {rotatingWords[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            .
          </motion.h1>

          <motion.p
            {...item}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Gconsult is a Lagos recruitment and executive search firm placing
            senior and mid-level professionals with organisations across
            Nigeria.
          </motion.p>

          <motion.div
            {...item}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/contact">Start a search</Link>
            </Button>
            <Link
              to="/services"
              className="border-b border-border pb-1 text-sm text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              See how we work
            </Link>
          </motion.div>
        </div>

        <motion.dl {...item} className="border-l border-border pl-6 md:pl-8">
          {proof.map((stat, i) => (
            <div key={stat.value} className={i > 0 ? 'mt-8' : undefined}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-serif text-3xl text-foreground md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
