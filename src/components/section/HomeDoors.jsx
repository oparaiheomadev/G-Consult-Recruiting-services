import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import hiringImg from '@/assets/Hiring.jpg';
import roleImg from '@/assets/Role.jpg';

const doors = [
  {
    title: "I'm hiring",
    body: 'Tell us the role and the kind of person it needs. First shortlist lands in two days.',
    cta: 'Start a search',
    to: '/contact',
    image: hiringImg,
    alt: 'A hiring manager in conversation across a desk',
    wide: true,
  },
  {
    title: 'I want a role',
    body: 'Browse open positions, or send your CV and we will come to you.',
    cta: 'View open roles',
    to: '/jobs',
    image: roleImg,
    alt: 'A professional working at a laptop',
    wide: false,
  },
];

export default function HomeDoors() {
  return (
    <section
      aria-label="Choose your path"
      className="grid md:grid-cols-[1.25fr_0.75fr]"
    >
      {doors.map((door) => (
        <Link
          key={door.title}
          to={door.to}
          className="group relative isolate block min-h-[26rem] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary"
        >
          <img
            src={door.image}
            alt={door.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Legibility layer. Heavier at the base where the text sits. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-background/45 transition-colors duration-500 group-hover:bg-background/35"
          />

          <div className="dark absolute inset-x-0 bottom-0 bg-background/85 p-7 backdrop-blur-[2px] md:p-9">
            <h2 className="font-serif text-2xl text-foreground md:text-3xl">
              {door.title}
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {door.body}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary">
              {door.cta}
              <ArrowUpRight
                className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
