import { motion } from 'motion/react';
import { fadeUp, fadeUpDelayed } from '@/lib/motion';

const practices = [
  {
    title: 'The person who takes your brief runs your search',
    body: 'No handover to an account manager, and no repeating yourself to someone new halfway through.',
  },
  {
    title: 'Five candidates, never a longer list',
    body: 'If we cannot find five worth your time, we tell you that instead of padding the shortlist.',
  },
  {
    title: 'We interview before you do',
    body: 'Every shortlisted candidate has had a real conversation with us, not just a CV screen.',
  },
  {
    title: 'We will tell you when the role is the problem',
    body: 'Sometimes the salary, the title or the reporting line is why nobody good is applying.',
  },
];

export default function AboutPractices() {
  return (
    <section
      aria-labelledby="practices-heading"
      className="bg-surface py-20 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
        <motion.div {...fadeUp}>
          <h2
            id="practices-heading"
            className="text-3xl leading-tight tracking-tight text-foreground md:text-4xl"
          >
            How we actually work.
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Four practices, not four values. Each of these is something you can
            hold us to.
          </p>
        </motion.div>

        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {practices.map((practice, i) => (
            <motion.div
              key={practice.title}
              {...fadeUpDelayed(0.06 * i)}
              className="border-l-2 pl-5"
              style={{
                borderColor: `color-mix(in srgb, var(--primary) ${100 - i * 22}%, var(--surface))`,
              }}
            >
              <dt className="text-sm font-medium leading-snug text-foreground">
                {practice.title}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {practice.body}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
