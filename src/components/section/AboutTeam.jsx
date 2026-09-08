const team = [
  { name: 'Chioma Nwosu', role: 'MD & Co-founder · 14yrs in HR' },
  { name: 'Emeka Adeyemi', role: 'Head of Executive Search' },
  { name: 'Fatima Bello', role: 'Lead · Tech & Fintech' },
  { name: 'Tunde Ogbonna', role: 'Head of Client Success' },
];

export default function AboutTeam() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-subtle mb-3">
            The team
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-tight">
            Recruiters who've sat on both sides of the table
          </h2>
          <p className="text-sm text-subtle mt-3 max-w-lg leading-relaxed">
            Our consultants come from the industries they recruit in — sharper
            briefs, better candidates, conversations that skip the fluff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {team.map((member, index) => (
            <div
              key={index}
              className={`bg-cardbg-cardborder border-border rounded-xl overflow-hidden animate-fade-in ${
                index === 0
                  ? 'animation-delay-100'
                  : index === 1
                    ? 'animation-delay-200'
                    : index === 2
                      ? 'animation-delay-300'
                      : 'animation-delay-400'
              }`}
            >
              <div className="bg-background h-48 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm font-medium text-foreground">
                  {member.name}
                </p>
                <p className="text-xs text-subtle mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
