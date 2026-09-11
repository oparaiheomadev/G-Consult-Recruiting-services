import teamImg from '@/assets/team.jpg';

const commitments = [
  {
    title: 'Sector specialists, not generalists',
    body: 'Consultants who already know your market, its talent pool and its salary bands.',
  },
  {
    title: 'One consultant, brief to offer',
    body: 'You will not be handed between account managers halfway through a search.',
  },
  {
    title: 'Confidential by default',
    body: 'Sensitive searches and replacement hires handled without exposure.',
  },
  {
    title: 'We stay after the offer',
    body: 'Onboarding support and check-ins at 30, 60 and 90 days as standard.',
  },
];

export default function HomeAbout() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-surface py-24 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <div>
          <h2
            id="about-heading"
            className="max-w-md text-3xl leading-tight tracking-tight text-foreground md:text-4xl"
          >
            Guided by people, not placements.
          </h2>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            We exist to connect ambitious organisations with people who move
            their business forward, and to stay in the relationship long after
            the offer is signed.
          </p>

          <dl className="mt-12 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {commitments.map((item, i) => (
              <div
                key={item.title}
                className="border-l-2 pl-4"
                style={{
                  borderColor: `color-mix(in srgb, var(--primary) ${100 - i * 20}%, var(--surface))`,
                }}
              >
                <dt className="text-sm font-medium text-foreground">
                  {item.title}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative isolate">
          <img
            src={teamImg}
            alt="Gconsult consultants in conversation at the Lagos office"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 -left-6 -z-10 size-32 rotate-[41deg] bg-accent"
          />
        </div>
      </div>
    </section>
  );
}
