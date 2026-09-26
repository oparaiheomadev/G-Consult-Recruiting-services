import { motion } from 'motion/react';
import { fadeUp, fadeUpDelayed } from '@/lib/motion';
import storyImg from '@/assets/AboutUs.webp';

export default function AboutStory() {
  return (
    <section
      aria-labelledby="story-heading"
      className="bg-background py-24 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <motion.div {...fadeUp} className="relative isolate">
          <img
            src={storyImg}
            alt="A hiring conversation in progress"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-7 -left-7 -z-10 size-28 rotate-[41deg] bg-accent"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-5 right-8 -z-10 size-14 rotate-[47deg] bg-accent"
          />
        </motion.div>

        <div>
          <motion.h2
            {...fadeUpDelayed(0.05)}
            id="story-heading"
            className="max-w-lg text-3xl leading-tight tracking-tight text-foreground md:text-4xl"
          >
            We started because good hiring kept coming down to luck.
          </motion.h2>

          <motion.div
            {...fadeUpDelayed(0.15)}
            className="mt-7 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground"
          >
            <p>
              was founded in 2020 by a practising HR Specilaist who had spent
              years on the client side of recruitment, receiving shortlists of
              twenty people for a role that needed five, and interviewing
              candidates nobody had spoken to properly.
            </p>
            <p>
              The problem was never a shortage of talent. It was that agencies
              were paid on volume, so volume is what clients got. Briefs were
              taken by one person and worked by another. Nobody was accountable
              for whether the hire was still there a year later.
            </p>
            <p className="text-foreground">
              We built the opposite. Fewer clients, longer relationships, and a
              consultant who stays with your search from the first conversation
              to the ninety-day check-in.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
