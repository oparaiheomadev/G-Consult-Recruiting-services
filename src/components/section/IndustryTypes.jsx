import financial from '../../assets/financial.jpg';
import technology from '../../assets/technology.jpg';
import healthcare from '../../assets/healthcare.jpg';
import retail from '../../assets/retail.jpg';
import education from '../../assets/education.jpg';
import ngo from '../../assets/ngo.jpg';

const industries = [
  {
    title: 'Financial Services',
    image: financial,
    description:
      'Banking, insurance, fintech, compliance, risk management and executive leadership recruitment.',
  },
  {
    title: 'Technology',
    image: technology,
    description:
      'Software engineering, product, cloud, cybersecurity, AI, and technology leadership hiring.',
  },
  {
    title: 'Healthcare',
    image: healthcare,
    description:
      'Hospitals, pharmaceuticals, medtech, nursing, allied health and clinical staffing.',
  },
  {
    title: 'FMCG & Retail',
    image: retail,
    description:
      'Commercial, retail operations, supply chain, procurement and logistics recruitment.',
  },
  {
    title: 'Education',
    image: education,
    description:
      'Universities, schools, edtech organisations and academic leadership hiring.',
  },
  {
    title: 'Public Sector & NGOs',
    image: ngo,
    description:
      'Government institutions, development organisations and international NGOs across Africa.',
  },
];

{
}

export default function IndustryTypes() {
  return (
    <section className="bg-background py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest text-subtle mb-3">
            Industries we serve
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-tight mb-6 animate-fade-in animation-delay-100">
            Built for every stage{' '}
            <em className="not-italic text-primary">of your growth</em>
          </h2>

          <p className="text-sm text-subtle leading-relaxed">
            Every industry requires a different recruitment approach. Our
            consultants understand the talent landscape and connect businesses
            with professionals who deliver long-term value
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-3xl border border-border bg-cardbg-cardtransition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h4 className="text-sm font-semibold text-primary mb-2">
                  {industry.title}
                </h4>

                <p className="text-muted-foreground leading-7 mb-6">
                  {industry.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
