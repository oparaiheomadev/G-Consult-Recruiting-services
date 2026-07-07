const services = [
  {
    title: 'Executive & senior search',
    description:
      'Discreet, research-led search for C-suite, VP, and director roles. Typical turnaround: 3–4 weeks.',
    tags: ['CEO', 'CFO', 'CTO'],
  },
  {
    title: 'Fast-track & volume hiring',
    description:
      'When you need people fast — we deploy our pre-vetted talent pool to fill roles in 48–72 hours.',
    tags: ['Sales teams', 'Graduate intake'],
  },
  {
    title: 'Contract & interim staffing',
    description:
      'Flexible talent for fixed-term projects, maternity cover, and peak-season demand.',
    tags: ['3–12 month contracts'],
  },
  {
    title: 'HR consulting & advisory',
    description:
      'People strategy, org design, salary benchmarking, and workforce planning.',
    tags: ['Startups', 'SMEs'],
  },
];

export default function CoreServices() {
  return (
    <section className="bg-light-alt py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-text-muted mb-3">
            Core services
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-text-dark leading-tight">
            Built for every stage of your growth
          </h2>
        </div>

        {/* Service list */}
        <div className="flex flex-col gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-light-card border border-border-light rounded-2xl px-7 py-6 border-l-4 border-l-primary animate-fade-in ${
                index === 0
                  ? 'animation-delay-100'
                  : index === 1
                    ? 'animation-delay-200'
                    : index === 2
                      ? 'animation-delay-300'
                      : 'animation-delay-400'
              }`}
            >
              {/* Title */}
              <h3 className="text-base font-semibold text-text-dark mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-text-body border border-primary/20 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
