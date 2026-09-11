import { Link } from 'react-router';
import { ArrowRight, Clock } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import consultingImg from '@/assets/consulting.jpg';
import executiveImg from '@/assets/Executive.jpg';
import recruitmentImg from '@/assets/recruitment.jpg';

const services = [
  {
    tier: 'Senior appointments',
    title: 'Executive search',
    body: 'Board, C-suite and senior leadership roles, handled discreetly from first brief to signed offer.',
    meta: '4 to 8 weeks',
    image: executiveImg,
    alt: 'Two executives in discussion at a boardroom table',
    to: '/services',
  },
  {
    tier: 'Mid-level hiring',
    title: 'Core recruitment',
    body: 'Every function, every level below the boardroom, with five shortlisted candidates inside two days.',
    meta: '2 to 3 weeks',
    image: recruitmentImg,
    alt: 'A team working together in an open-plan office',
    to: '/services',
    featured: true,
  },
  {
    tier: 'People advisory',
    title: 'HR consulting',
    body: 'Org design, salary benchmarking and workforce planning for teams outgrowing their structure.',
    meta: 'Ongoing retainer',
    image: consultingImg,
    alt: 'A consultant presenting to a team in a meeting room',
    to: '/services',
  },
];

export default function HomeServices() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-surface py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          id="services-heading"
          className="max-w-md text-3xl leading-tight tracking-tight text-foreground md:text-4xl"
        >
          Every kind of hire, one trusted partner.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className={[
                'group h-full gap-0 rounded-2xl bg-card p-3 transition-all duration-500 ease-out',
                'hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5',
                service.featured
                  ? 'border-primary/60'
                  : 'border-border hover:border-primary/40',
              ].join(' ')}
            >
              {/* Inset image */}
              <div className="overflow-hidden ">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </div>

              <CardHeader className="gap-0 px-4 pt-5">
                <Badge
                  variant="secondary"
                  className="mb-3 w-fit rounded-full bg-accent px-3 py-1 text-xs font-normal text-primary"
                >
                  {service.tier}
                </Badge>
                <CardTitle className="font-serif text-xl font-medium leading-snug text-card-foreground transition-colors duration-300 group-hover:text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 px-4 pt-2">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </CardContent>

              <CardFooter className="mt-auto flex-col items-stretch px-4 pb-2">
                <Separator className="mb-4 mt-6 border-b border-primary/5" />
                <Link
                  to={service.to}
                  aria-label={`${service.title} — learn more`}
                  className="flex items-center justify-between"
                >
                  <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="size-3.5" aria-hidden="true" />
                    {service.meta}
                  </span>
                  <ArrowRight
                    className="size-4 text-primary transition-transform duration-300 ease-out group-hover:translate-x-1"
                    className="size-4 text-primary transition-transform duration-300 ease-out group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
