import teamsBg from '../assets/teams.jpg';

const steps = [
  {
    number: '01',
    tier: 'Step one',
    title: 'Share your brief',
    description: 'Tell us who you need and what success looks like.',
    features: [
      'Role requirements & seniority',
      'Company culture & values',
      'Timeline & budget',
      'Deal-breakers & must-haves',
    ],
  },
  {
    number: '02',
    tier: 'Step two',
    title: 'We search & screen',
    description: 'We tap our network so only the best reach your desk.',
    features: [
      'Active & passive candidate search',
      'CV screening & assessment',
      'First-round interviews',
      'Culture fit evaluation',
    ],
  },
  {
    number: '03',
    tier: 'Step three',
    title: 'Meet your shortlist',
    description: 'A curated shortlist lands in your inbox within 48hrs.',
    features: [
      'Maximum 5 shortlisted candidates',
      'Detailed candidate profiles',
      'Interview scheduling support',
      'Reference checks coordinated',
    ],
    popular: true,
  },
  {
    number: '04',
    tier: 'Step four',
    title: 'Hire with confidence',
    description: 'We stay with you through offer, onboarding and beyond.',
    features: [
      'Offer negotiation support',
      'Onboarding coordination',
      '30, 60 & 90 day follow-up',
      'Replacement guarantee',
    ],
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative bg-background bg-cover bg-center bg-no-repeat px-6 py-24"
      style={{ backgroundImage: `url(${teamsBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/85" />

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            How it works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground max-w-xl mx-auto leading-tight">
            From brief to hire in{' '}
            <em className="text-secondary-foreground not-italic">
              as little as 2 weeks
            </em>
          </h2>
          <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
            A process built around your time — delivering the right people, not
            just available ones.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-7 flex flex-col animate-fade-in border ${
                step.popular
                  ? 'bg-primary/10 border-primary/30'
                  : 'bg-card border-border'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular badge */}
              {step.popular && (
                <div className="absolute -top-3 right-5 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                  Key step
                </div>
              )}

              {/* Tier label */}
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {step.tier}
              </p>

              {/* Title */}
              <h3 className="font-serif text-xl font-medium text-foreground mb-1">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-muted-foreground mb-6">
                {step.description}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-border mb-6" />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {step.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-0.5 text-sm leading-none">
                      ✓
                    </span>
                    <span className="text-sm text-foreground font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
