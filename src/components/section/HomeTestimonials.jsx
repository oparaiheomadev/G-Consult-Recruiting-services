import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import nackLogo from '@/assets/nack.png';

const testimonials = [
  {
    quote:
      'Gconsult sent us five candidates in under 48 hours. We hired two, and both are still with us three years later. That is the kind of partner you do not replace.',
    name: 'Tolu Akinpeloye',
    role: 'Founder and Director',
    company: 'Nack Apparel',
    logo: nackLogo,
    initials: 'NA',
  },
  {
    quote:
      'We had tried three other agencies before Gconsult. None of them came close. Within two weeks our Head of Engineering was in place.',
    name: 'Mark Coackley',
    role: 'Chief Executive',
    company: 'Specsmart',
    logo: 'https://www.google.com/s2/favicons?domain=specsmart.ng&sz=128',
    initials: 'SS',
  },
  {
    quote:
      'They understood our culture immediately. They did not just send CVs, they sent people who actually fit. Our last three hires all came through Gconsult.',
    name: 'Fatima Bello',
    role: 'HR Director',
    company: 'GiselleHomes',
    logo: 'https://www.google.com/s2/favicons?domain=gisellehomes.com&sz=128',
    initials: 'GH',
  },
];

const ease = [0.22, 1, 0.36, 1];

function CompanyMark({ item }) {
  const [failed, setFailed] = useState(false);

  if (failed || !item.logo) {
    return (
      <span
        aria-hidden="true"
        className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-medium text-secondary-foreground"
      >
        {item.initials}
      </span>
    );
  }

  return (
    <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-card">
      <img
        src={item.logo}
        alt=""
        loading="lazy"
        onError={() => setFailed(true)}
        className="size-7 object-contain"
      />
    </span>
  );
}

export default function HomeTestimonials() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (next) =>
    setIndex((i) => (next + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(() => go(index + 1), 7000);
    return () => clearInterval(id);
  }, [index, paused, reduceMotion]);

  const item = testimonials[index];

  return (
    <section
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="dark relative isolate overflow-hidden bg-background py-24 md:py-28"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-20 -z-10 size-60 rotate-[41deg] bg-secondary/90"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 right-4 -z-10 size-28 rotate-[47deg] bg-secondary/80"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-28 right-1/3 -z-10 size-7 rotate-[43deg] bg-secondary/70"
      />

      <div className="mx-auto max-w-4xl px-6">
        <h2 id="testimonials-heading" className="sr-only">
          What our clients say
        </h2>

        <div className="min-h-[15rem] md:min-h-[13rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={index}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease }}
            >
              <blockquote className="font-serif text-2xl italic leading-[1.45] text-foreground md:text-[2rem]">
                {item.quote}
              </blockquote>

              <figcaption className="mt-9 flex items-center gap-4">
                <CompanyMark item={item} />
                <span>
                  <span className="block text-sm text-foreground">
                    {item.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {item.role}, {item.company}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center">
            {testimonials.map((t, i) => (
              <button
                key={t.company}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial from ${t.company}`}
                aria-current={i === index ? 'true' : undefined}
                className="p-2"
              >
                <span
                  className={[
                    'block size-2 rotate-[43deg] transition-colors duration-300',
                    i === index ? 'bg-primary' : 'bg-muted-foreground/30',
                  ].join(' ')}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-foreground"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-foreground"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
