import { motion } from 'motion/react';
import { fadeUpDelayed } from '@/lib/motion';
import AvatarIllustration from '@/components/ui/avatar-illustration';

const people = [
  {
    name: 'Igwemoh Happiness',
    role: 'Recruitment Specialist',
    gender: 'female',
    body: 'Three years in recruitment, previously at Sigma Consulting Group. Covers fashion, retail and FMCG, and handles first-round interviews on every search she runs.',
  },

  {
    name: 'Oparaiheoma Ebuka David',
    role: 'Developer/Admin-Assistant',
    gender: 'male',
    body: 'Previously at Profeworld Technologies, IOM and UNICEF. Handles the technology side of the practice and supports on recruitment and admin.',
  },
  {
    name: 'Ogwo Nnenna',
    role: 'HR Director',
    gender: 'female',
    body: 'Leads executive search and headhunting, and handles our payroll and HR advisory work. Years of in-house HR experience on the client side of recruitment.',
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

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person, i) => (
            <motion.li
              key={person.name}
              {...fadeUpDelayed(0.1 + i * 0.1)}
              className={person.offset ? 'sm:mt-12' : undefined}
            >
              <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-colors duration-500 hover:border-primary/40">
                <div className="relative isolate w-fit">
                  <AvatarIllustration
                    variant={person.gender}
                    className="size-20"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-1 -right-1 size-3.5 rotate-[43deg] bg-primary transition-transform duration-500 ease-out group-hover:scale-125"
                  />
                </div>

                <h3 className="mt-6 font-serif text-xl text-card-foreground">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm text-primary">{person.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {person.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
