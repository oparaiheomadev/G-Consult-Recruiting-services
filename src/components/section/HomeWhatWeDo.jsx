import { Search, Zap, Clock, BarChart } from 'lucide-react';

const services = [
  {
    icon: Search,
    tier: 'Executive',
    title: 'Executive Search',
    description: 'For senior leadership roles',
    features: [
      'Dedicated senior consultant',
      'Passive candidate outreach',
      'Full reference & background checks',
      'Cultural fit assessment',
      '90-day placement guarantee',
    ],
    popular: false,
  },
  {
    icon: Clock,
    tier: 'Fast-track',
    title: 'Rapid Hire',
    description: 'For urgent needs',
    features: [
      '48hr first shortlist',
      'Pre-vetted talent pool',
      'Same-day briefing call',
      'Flexible contract options',
      'Dedicated account manager',
    ],
    popular: false,
  },
  {
    icon: Zap,
    tier: 'Standard',
    title: 'Core Recruitment',
    description: 'For mid-level roles',
    features: [
      'Talent sourcing & screening',
      'CV shortlisting',
      'Interview coordination',
      'Offer management support',
      '30-day placement guarantee',
    ],
    popular: true,
  },
  {
    icon: BarChart,
    tier: 'Consulting',
    title: 'HR Consulting',
    description: 'Strategic people advisory',
    features: [
      'Org design & restructuring',
      'Salary benchmarking',
      'HR policy development',
      'Workforce planning',
      'People strategy advisory',
    ],
    popular: false,
  },
];

export default function HomeWhatWeDo() {
  return (
    <section className="bg-surface py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-subtle mb-3 ">
            What we offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground max-w-xl mx-auto leading-tight">
            Every kind of hire.{' '}
            <em className="not-italic text-muted-foreground">
              One trusted partner.
            </em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`relative rounded-xl p-9 flex flex-col animate-fade-in ${
                  index === 0
                    ? 'animation-delay-100'
                    : index === 1
                      ? 'animation-delay-300'
                      : index === 2
                        ? 'animation-delay-500'
                        : 'animation-delay-600'
                } ${
                  service.popular
                    ? 'bg-background border border-border'
                    : 'bg-cardbg-cardborder border-border'
                }`}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-3 right-5 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                    Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
                    service.popular ? 'bg-primary/20' : 'bg-surface'
                  }`}
                >
                  <Icon
                    size={18}
                    className={
                      service.popular ? 'text-primary' : 'text-muted-foreground'
                    }
                  />
                </div>

                {/* Tier label */}
                <p
                  className={`text-xs uppercase tracking-widest mb-2 ${
                    service.popular ? 'text-muted-foreground' : 'text-subtle'
                  }`}
                >
                  {service.tier}
                </p>

                {/* Title */}
                <h3
                  className={`font-serif text-2xl font-medium mb-1 ${
                    service.popular ? 'text-foreground' : 'text-foreground'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm mb-6 ${
                    service.popular ? 'text-muted-foreground' : 'text-subtle'
                  }`}
                >
                  {service.description}
                </p>

                {/* Divider */}
                <div
                  className={`w-full h-px mb-6 ${
                    service.popular ? 'bg-border' : 'bg-border-light'
                  }`}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-0.5 text-base leading-none">
                        ✓
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          service.popular
                            ? 'text-foreground'
                            : 'text-foreground'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition hover:opacity-90 ${
                    service.popular
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-surface text-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary'
                  }`}
                >
                  Select {service.title}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
