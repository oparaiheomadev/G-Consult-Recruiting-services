import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Button } from '@/components/ui/button';
import heroImg from '@/assets/consultshero.webp';

const rotatingWords = [
  'move markets',
  'build cultures',
  'drive growth',
  'shape futures',
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
          shown: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
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
      className="dark relative isolate overflow-hidden bg-background"
    >
      {/* Image: full bleed on mobile, right side on desktop */}
      <div className="absolute inset-0 md:left-[42%]">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="size-full object-cover object-[90%_center] md:object-[68%_center] "
        />
      </div>

      {/* Fades the dark panel into the image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background)_0%,color-mix(in_srgb,var(--background)_85%,transparent)_50%,color-mix(in_srgb,var(--background)_35%,transparent)_100%)] md:bg-[linear-gradient(to_right,var(--background)_0%,var(--background)_52%,transparent_92%)]"
      />

      {/* Brand texture */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-16 size-56 rotate-[41deg] bg-secondary/40"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 left-[18%] size-12 rotate-[47deg] bg-secondary/30"
      />

      <motion.div
        {...enter}
        className="relative mx-auto max-w-6xl px-6 pt-36 pb-24 md:pt-44 md:pb-32"
      >
        <div className="max-w-xl">
          <motion.h1
            {...item}
            id="hero-heading"
            className="text-4xl leading-[1.12] tracking-tight text-foreground md:text-6xl"
          >
            We don't fill roles.
            <br />
            We find people who{' '}
            <span className="relative inline-block align-baseline">
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
          </motion.h1>

          <motion.p
            {...item}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Gconsult is a recruitment and executive search firm placing senior
            and mid-level professionals with organisations across Nigeria.
          </motion.p>

          <motion.div
            {...item}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/contact">Hire With Us</Link>
            </Button>
            <Link
              to="/services"
              className="border-b border-border pb-1 text-sm text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              See how we work
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
