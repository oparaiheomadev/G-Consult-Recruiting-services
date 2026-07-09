const industries = [
  {
    title: 'Financial Services',
    description:
      'Banking, insurance, fintech, and asset management across Nigeria.',
    items: [
      'Commercial Banking',
      'Risk & Compliance',
      'Investment Management',
      'Fintech Startups',
    ],
  },
  {
    title: 'Technology',
    description:
      'Startups, scaleups, and enterprise tech companies building for Africa.',
    items: [
      'Engineering & Product',
      'Data & Analytics',
      'Cybersecurity',
      'CTO & VP level',
    ],
  },
  {
    title: 'Healthcare & Pharma',
    description:
      'Hospitals, pharmaceutical companies, and health administration.',
    items: [
      'Clinical Staffing',
      'Health Administration',
      'Medical Devices',
      'Pharma Operations',
    ],
  },
  {
    title: 'FMCG & Retail',
    description:
      'Leading consumer brands and retail operations across the country.',
    items: [
      'Commercial & Sales',
      'Supply Chain',
      'Brand Management',
      'Operations',
    ],
  },
];

export default function AboutSector() {
  return (
    <section className="bg-light-alt py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-text-muted mb-3">
            Sector expertise
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-text-dark">
            Industries we know inside out
          </h2>
          <p className="text-sm text-text-muted mt-3 max-w-lg mx-auto leading-relaxed">
            Our consultants don't just know recruitment — they know your
            industry.
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`bg-light-card border border-border-light rounded-xl p-7 animate-fade-in ${
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
              <h4 className="text-sm font-semibold text-primary mb-2">
                {industry.title}
              </h4>

              {/* Description */}
              <p className="text-xs text-text-muted leading-relaxed mb-5">
                {industry.description}
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-2 gap-2">
                {industry.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-primary text-xs">✓</span>
                    <span className="text-xs text-text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
