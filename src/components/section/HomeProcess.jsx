import { motion, useReducedMotion } from 'motion/react';

const steps = [
  {
    title: 'Share your brief',
    body: 'Who you need, what success looks like in the role, and what the deal-breakers are.',
  },
  {
    title: 'We search and screen',
    body: 'Active and passive outreach, then first-round interviews before anyone reaches your desk.',
  },
  {
    title: 'Meet your shortlist',
    body: 'Five candidates, full profiles, references already checked. Never a longer list.',
  },
  {
    title: 'Hire with confidence',
    body: 'Offer negotiation, onboarding support, and we check in at 30, 60 and 90 days.',
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function HomeProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="process-heading"
      className="bg-background py-28 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div>
          <h2
            id="process-heading"
            className="text-3xl leading-tight tracking-tight text-foreground md:text-4xl"
          >
            From brief to hire in as little as two weeks.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A process built around your time, delivering the right people rather
            than the available ones.
          </p>
        </div>

        <motion.ol
          initial={reduceMotion ? undefined : 'hidden'}
          whileInView={reduceMotion ? undefined : 'shown'}
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            shown: { transition: { staggerChildren: 0.14 } },
          }}
          className="relative"
        >
          {/* The line the steps hang from */}
          <motion.span
            aria-hidden="true"
            variants={{
              hidden: { scaleY: 0 },
              shown: {
                scaleY: 1,
                transition: { duration: 1.1, ease },
              },
            }}
            className="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-border"
          />

          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                shown: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
              }}
              className="relative flex gap-6 pb-10 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="relative z-10 mt-[7px] size-[11px] shrink-0 rotate-[43deg] bg-primary"
                style={{ opacity: 1 - i * 0.18 }}
              />

              <div>
                <h3 className="font-serif text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}