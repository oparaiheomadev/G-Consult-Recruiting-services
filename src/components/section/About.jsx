import { Target, Eye, Users, Clock, Award, TrendingUp } from 'lucide-react';
import aboutBg from '../../assets/teams.jpg';

const differences = [
  {
    icon: Users,
    title: 'People-first approach',
    description:
      'Every candidate and client is a long-term partner, not a transaction.',
  },
  {
    icon: Clock,
    title: '48hr turnaround',
    description:
      'From brief to shortlist in under 48 hours — without sacrificing quality.',
  },
  {
    icon: Award,
    title: 'Industry specialists',
    description:
      'Our consultants recruit within sectors they have worked in themselves.',
  },
  {
    icon: TrendingUp,
    title: '94% retention rate',
    description: "Our placements stay. That's the metric we're most proud of.",
  },
];

const values = [
  {
    title: 'Quality over speed',
    description:
      "We'd rather take an extra day than send you someone who won't last.",
  },
  {
    title: 'Radical transparency',
    description: "If a role can't be filled, we'll tell you — and explain why.",
  },
  {
    title: 'Candidate dignity always',
    description:
      'Every person we work with gets honest, respectful communication.',
  },
];

export default function About() {
  return (
    <main>
      {/* ── 1. OUR STORY — image left, text right + stats embedded ── */}
      <section className="bg-background py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image with floating stat */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={aboutBg}
                  alt="G-Consult team"
                  className="w-full h-80 object-cover"
                />
              </div>
              {/* Floating stat cards */}
              <div className="absolute -bottom-6 -right-6 bg-background rounded-xl px-6 py-4 border border-border">
                <p className="font-serif text-3xl font-medium text-foreground">
                  1,200+
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Professionals placed
                </p>
              </div>
              <div className="absolute -top-6 -left-6 bg-primary rounded-xl px-6 py-4">
                <p className="font-serif text-3xl font-medium text-primary-foreground">
                  7yrs
                </p>
                <p className="text-xs text-primary-foreground/70 mt-1">
                  In operation
                </p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-3 animate-fade-in">
                Our story
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-tight mb-6 animate-fade-in animation-delay-100">
                Built because great hiring{' '}
                <em className="not-italic text-primary">
                  shouldn't be this hard
                </em>
              </h2>
              <div className="flex flex-col gap-4 animate-fade-in animation-delay-200">
                <p className="text-sm text-subtle leading-relaxed">
                  G-Consult was founded in Lagos in 2018 out of a simple
                  frustration — too many organisations were settling for the
                  wrong people because finding the right ones felt impossible.
                </p>
                <p className="text-sm text-subtle leading-relaxed">
                  Seven years and 1,200 placements later, we work across
                  finance, technology, healthcare, and beyond — with a team of
                  specialists who recruit in sectors they've worked in
                  themselves.
                </p>
              </div>

              {/* Inline stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 animate-fade-in animation-delay-300">
                <div className="bg-surface border border-border rounded-xl px-5 py-4">
                  <p className="font-serif text-2xl font-medium text-foreground">
                    180+
                  </p>
                  <p className="text-xs text-subtle mt-1">Client companies</p>
                </div>
                <div className="bg-surface border border-border rounded-xl px-5 py-4">
                  <p className="font-serif text-2xl font-medium text-foreground">
                    12
                  </p>
                  <p className="text-xs text-subtle mt-1">Industries served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MISSION & VISION ── */}
      <section className="bg-surface py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cardbg-cardborder border-border rounded-2xl p-8 animate-fade-in animation-delay-100">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Target size={18} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-subtle leading-relaxed">
                To close the gap between ambition and ability — connecting
                leaders who need to build with the talent ready to do it. We
                believe a wrong hire costs more than a slow hire, and a right
                hire changes everything.
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8 animate-fade-in animation-delay-200">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Eye size={18} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To become Nigeria's most trusted recruitment partner — known not
                for the volume of placements we make, but for the quality of the
                people we place and the longevity of those relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHAT MAKES US DIFFERENT ── */}
      <section className="bg-background py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-subtle mb-3">
              Why G-Consult
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
              What makes us different
            </h2>
            <p className="text-sm text-subtle mt-3 max-w-lg mx-auto leading-relaxed">
              We're not just another recruitment agency. Here's what sets us
              apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {differences.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`bg-cardbg-cardborder border-border rounded-xl p-6 animate-fade-in ${
                    index === 0
                      ? 'animation-delay-100'
                      : index === 1
                        ? 'animation-delay-200'
                        : index === 2
                          ? 'animation-delay-300'
                          : 'animation-delay-400'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-subtle leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. VALUES ── */}
      <section className="bg-background py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              What drives us
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-tight">
              The principles behind every placement
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`flex items-start gap-5 animate-fade-in ${
                  index === 0
                    ? 'animation-delay-100'
                    : index === 1
                      ? 'animation-delay-300'
                      : 'animation-delay-500'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
