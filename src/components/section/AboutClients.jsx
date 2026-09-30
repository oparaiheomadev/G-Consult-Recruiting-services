import { motion } from 'motion/react';
import { fadeUp, fadeUpDelayed } from '@/lib/motion';
import nackLogo from '@/assets/nack.webp';
import GiselleHomesLogo from '@/assets/GiselleHomesLogo.webp';
import specs from '@/assets/specs.webp';
import gold from '@/assets/gold.png';

const clients = [
  {
    name: 'Nack Apparel',
    sector: 'Fashion and retail',
    logo: nackLogo,
    initials: 'NA',
  },
  {
    name: 'Specsmart',
    sector: 'Optical and healthcare',
    logo: specs,
    initials: 'SS',
  },
  {
    name: 'GiselleHomes',
    sector: 'Property',
    logo: GiselleHomesLogo,
    initials: 'GH',
  },
  {
    name: 'Goldrich Spicy',
    sector: 'Food and FMCG',
    logo: gold,
    initials: 'GS',
  },
];

function ClientMark({ client }) {
  if (client.logo) {
    return (
      <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-foreground p-1.5">
        <img
          src={client.logo}
          alt=""
          loading="lazy"
          className="size-full object-contain"
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary font-serif text-sm text-secondary-foreground"
    >
      {client.initials}
    </span>
  );
}

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
            Our clients
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
              className="group flex items-center gap-4 rounded-xl border border-border p-5 transition-colors duration-500 hover:border-primary/40"
            >
              <ClientMark client={client} />

              <span className="min-w-0">
                <span className="block truncate font-serif text-base text-foreground">
                  {client.name}
                </span>
                <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                  {client.sector}
                </span>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
