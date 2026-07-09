import {
  Building2,
  Laptop,
  Heart,
  ShoppingBag,
  GraduationCap,
  Globe,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react';

const commitments = [
  {
    icon: ShieldCheck,
    title: 'Verified candidates only',
    description:
      'Every candidate is screened, referenced, and background checked before reaching you.',
  },
  {
    icon: Star,
    title: '90-day guarantee',
    description:
      "If a placement doesn't work out within 90 days, we replace them at no extra cost.",
  },
  {
    icon: Users,
    title: 'Dedicated consultant',
    description:
      'One consultant owns your search from brief to hire — no handoffs, no confusion.',
  },
];

export default function AboutCommitments() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Center icon */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
            <ShieldCheck size={24} className="text-primary" />
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Our commitment
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
            You hire with confidence. We guarantee it.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
            Every engagement comes with our commitment to quality, transparency,
            and results — backed by real guarantees.
          </p>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-card border border-border rounded-xl p-6 animate-fade-in ${
                  index === 0
                    ? 'animation-delay-100'
                    : index === 1
                      ? 'animation-delay-300'
                      : 'animation-delay-500'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-primary" />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
