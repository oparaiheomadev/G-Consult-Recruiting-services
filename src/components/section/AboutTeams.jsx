import { motion } from 'motion/react';
import { fadeUpDelayed } from '@/lib/motion';
import personOneImg from '@/assets/team.webp';

const people = [
  {
    name: '[First name Last name]',
    role: '[Role]',
    body: '[One or two lines: background, which sectors they cover, what they handle on a search.]',
    image: personOneImg,
  },
  {
    name: '[First name Last name]',
    role: '[Role]',
    body: '[One or two lines: background, which sectors they cover, what they handle on a search.]',
    image: personOneImg,
    offset: true,
  },
];

export default function AboutTeam() {
  return (
    <section
      aria-labelledby="team-heading"
      className="relative isolate overflow-hidden bg-background py-24 md:py-28"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-12 top-32 -z-10 size-28 rotate-[43deg] bg-accent/60"
      />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUpDelayed(0)} className="max-w-md">
          <h2
            id="team-heading"
            className="text-3xl leading-tight tracking-tight text-foreground md:text-4xl"
          >
            Who you will actually be dealing with.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            There are three of us. Two will be on your search, and you will know
            both by name before it starts.
          </p>
        </motion.div>

        <ul className="mt-16 grid max-w-3xl gap-10 sm:grid-cols-2 sm:gap-12">
          {people.map((person, i) => (
            <motion.li
              key={person.name}
              {...fadeUpDelayed(0.1 + i * 0.1)}
              className={person.offset ? 'sm:mt-14' : undefined}
            >
              <div className="group relative isolate">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Diamond corner mark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-3 -right-3 size-9 rotate-[43deg] bg-background"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-[3px] -right-[3px] size-3 rotate-[43deg] bg-primary transition-transform duration-500 ease-out group-hover:scale-125"
                />
              </div>

              <h3 className="mt-6 font-serif text-xl text-foreground">
                {person.name}
              </h3>
              <p className="mt-1 text-sm text-primary">{person.role}</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {person.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
