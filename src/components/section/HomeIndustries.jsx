import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import nairalImg from '@/assets/naira.jpg';
import technologyImg from '@/assets/technology.jpg';
import healthcareImg from '@/assets/healthcare.jpg';
import retailImg from '@/assets/retail.jpg';
import ngoImg from '@/assets/ngo.jpg';

const industries = [
  {
    name: 'Financial services',
    body: 'Banking, insurance, fintech, risk and compliance.',
    image: nairalImg,
    tall: true,
  },
  { name: 'Technology', image: technologyImg, tall: true },
  { name: 'Healthcare', image: healthcareImg },
  { name: 'FMCG and retail', image: retailImg },
  { name: 'Public sector and NGOs', image: ngoImg },
];

export default function HomeIndustries() {
  return (
    <section
      aria-labelledby="industries-heading"
      className="dark bg-background/90 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2
            id="industries-heading"
            className="max-w-sm text-3xl leading-tight tracking-tight text-foreground md:text-4xl"
          >
            Built for every stage of your growth.
          </h2>

          <Link
            to="/industries"
            className="group inline-flex items-center gap-1.5 text-sm text-primary"
          >
            <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-primary">
              All industries
            </span>
            <ArrowUpRight
              className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2">
          {industries.map((industry) => (
            <li
              key={industry.name}
              className={industry.tall ? 'md:row-span-2' : undefined}
            >
              <Link
                to="/industries"
                className={[
                  'group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-2xl',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                  industry.tall ? 'min-h-[22rem]' : 'min-h-[10.5rem]',
                ].join(' ')}
              >
                <img
                  src={industry.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-background/55 transition-colors duration-500 group-hover:bg-background/40"
                />

                <div className="p-5">
                  <h3 className="font-serif text-lg text-foreground md:text-xl">
                    {industry.name}
                  </h3>
                  {industry.body && (
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {industry.body}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
