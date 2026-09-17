import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { fadeUp } from '@/lib/motion';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import fashionImg from '@/assets/fashionImg.webp';
import propertyImg from '@/assets/propertyImg.webp';
import fmcgImg from '@/assets/fmcgImg.webp';
import healthImg from '@/assets/healthImg.webp';
import techImg from '@/assets/techImg.webp';

const sectors = [
  {
    id: 'fashion-retail',
    name: 'Fashion and retail',
    lede: 'Retail hiring lives or dies on the floor. We screen for people who can actually sell, not people who interview well.',
    detail:
      'Sales roles turn over fast when they are filled on paper. We interview for resilience and customer instinct before anyone reaches your shortlist.',
    roles: ['Sales executives', 'Store supervisors', 'Retail associates'],
    image: fashionImg,
  },
  {
    id: 'real-estate',
    name: 'Real estate and property',
    lede: 'Property firms run lean, so every hire sits close to the principal and needs judgement as much as skill.',
    detail:
      'We have placed support and operations roles where discretion mattered as much as competence, for teams where one person covers a lot of ground.',
    roles: ['Personal assistants', 'Operations support', 'Client relations'],
    image: propertyImg,
  },
  {
    id: 'fmcg',
    name: 'FMCG and food',
    lede: 'Margins are thin and the finance function carries the weight. Getting that hire wrong is expensive in a way others are not.',
    detail:
      'We place finance and commercial roles for producers and distributors, with reference checks that go beyond the two names on the CV.',
    roles: ['Accountants', 'Finance officers', 'Commercial roles'],
    image: fmcgImg,
  },
  {
    id: 'health-optometry',
    name: 'Health and optometry',
    lede: 'Clinical hiring has a hard floor: licensing, registration and real practice history. There is no talking around it.',
    detail:
      'We verify credentials before shortlist, and we understand the difference between a practitioner who can run a clinic and one who cannot.',
    roles: [
      'Senior optometrist',
      'Optometrists',
      'Clinic customer care',
      'Business development executive',
      'optician',
    ],
    image: healthImg,
  },
  {
    id: 'technology',
    name: 'Technology',
    lede: 'Good engineers are not applying to adverts. They are employed, busy, and reached directly or not at all.',
    detail:
      'We approach passively rather than posting and waiting, and we brief candidates properly on what they would actually be building.',
    roles: [
      'Frontend developers',
      'Engineering roles',
      'Product and design',
      'more...',
    ],
    image: techImg,
  },
];

export default function IndustrySectors() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (!visible) return;
        const index = refs.current.indexOf(visible.target);
        if (index !== -1) setActive(index);
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="sectors-heading"
      className="bg-background py-20 md:py-24"
    >
      <h2 id="sectors-heading" className="sr-only">
        Sectors we recruit in
      </h2>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Sticky image column — desktop only */}
        <div className="hidden md:block">
          <div className="sticky top-28 h-[32rem] overflow-hidden rounded-2xl bg-muted">
            {sectors.map((sector, i) => (
              <img
                key={sector.id}
                src={sector.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className={cn(
                  'absolute inset-0 size-full object-cover transition-opacity duration-700 ease-out',
                  i === active ? 'opacity-100' : 'opacity-0',
                )}
              />
            ))}

            {/* Position marker */}
            <div className="absolute bottom-5 left-5 flex items-center gap-1.5">
              {sectors.map((sector, i) => (
                <span
                  key={sector.id}
                  className={cn(
                    'h-0.5 rounded-full bg-background transition-all duration-500',
                    i === active ? 'w-6 opacity-90' : 'w-2 opacity-40',
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sector list */}
        <ol className="md:-mt-16">
          {sectors.map((sector, i) => (
            <li
              key={sector.id}
              id={sector.id}
              ref={(el) => (refs.current[i] = el)}
              className="scroll-mt-28 border-b border-border py-14 last:border-0 md:min-h-[32rem] md:py-20"
            >
              <motion.div {...fadeUp}>
                {/* Mobile image */}
                <img
                  src={sector.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="mb-7 aspect-[4/3] w-full rounded-2xl object-cover md:hidden"
                />

                <span className="font-serif text-sm text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-3 font-serif text-2xl leading-snug text-foreground md:text-3xl">
                  {sector.name}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-foreground">
                  {sector.lede}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {sector.detail}
                </p>

                <div className="mt-7">
                  <p className="text-xs text-muted-foreground">
                    Roles we have placed here
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {sector.roles.map((role) => (
                      <Badge
                        key={role}
                        variant="secondary"
                        className="rounded-full bg-accent px-3 py-1 text-xs font-normal text-accent-foreground"
                      >
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
