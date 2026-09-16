import { motion } from 'motion/react';
import { fadeUp, fadeUpDelayed } from '@/lib/motion';

const clients = [
  { name: 'Nack Apparel', sector: 'Fashion and retail' },
  { name: 'Specsmart', sector: 'Optical and healthcare' },
  { name: 'GiselleHomes', sector: 'Property' },
  { name: 'Goldrich Spicy', sector: 'Food and FMCG' },
];

export default function AboutClients() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="dark relative isolate overflow-hidden bg-background/95 py-20 md:py-24"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/4 -z-10 size-52 rotate-[41deg] bg-secondary/35"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 right-16 -z-10 size-9 rotate-[47deg] bg-secondary/50"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <motion.div {...fadeUp}>
          <h2
            id="clients-heading"
            className="max-w-sm text-3xl leading-tight tracking-tight text-foreground md:text-4xl"
          >
            Four organisations have trusted us so far.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            We would rather name them than quote a number. Each one came back
            for a second search.
          </p>
        </motion.div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {clients.map((client, i) => (
            <motion.li
              key={client.name}
              {...fadeUpDelayed(0.05 * i)}
              className="group rounded-xl border border-border p-5 transition-colors duration-500 hover:border-primary/40"
            >
              <span className="block font-serif text-base text-foreground">
                {client.name}
              </span>
              <span className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="size-1 shrink-0 rotate-[43deg] bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                {client.sector}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
