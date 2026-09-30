import { motion } from 'motion/react';
import { fadeUp, fadeUpDelayed } from '@/lib/motion';
import nackLogo from '@/assets/nack.webp';
import specsLogo from '@/assets/specs.webp';
import giselleLogo from '@/assets/GiselleHomesLogo.webp';
import goldLogo from '@/assets/gold.png';

const clients = [
  { name: 'Nack Apparel', logo: nackLogo },
  { name: 'Specsmart', logo: specsLogo },
  { name: 'GiselleHomes', logo: giselleLogo },
  { name: 'Goldrich Spicy', logo: goldLogo },
];

export default function HomeClients() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="dark relative isolate overflow-hidden bg-background py-20 md:py-24"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 -z-10 size-56 rotate-[41deg] bg-secondary/30"
      />

      <div className="mx-auto max-w-5xl px-6">
        <motion.div {...fadeUp} className="text-center">
          <h2
            id="clients-heading"
            className="mx-auto max-w-lg font-serif text-2xl leading-snug text-foreground md:text-3xl"
          >
            Four organisations have trusted us so far. Every one came back.
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            We would rather name them than quote a number.
          </p>
        </motion.div>

        <ul className="mt-14 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
          {clients.map((client, i) => (
            <motion.li
              key={client.name}
              {...fadeUpDelayed(0.08 * i)}
              className="flex flex-col items-center gap-4 px-4 md:border-r md:border-border md:last:border-r-0"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-foreground p-3">
                <img
                  src={client.logo}
                  alt=""
                  loading="lazy"
                  className="size-full object-contain"
                />
              </span>
              <span className="text-center text-sm text-foreground">
                {client.name}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
