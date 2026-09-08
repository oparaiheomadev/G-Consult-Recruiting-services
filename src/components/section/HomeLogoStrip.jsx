export default function LogoStrip() {
  const logos = [
    { name: 'Nack Apparel', domain: 'nackapparel.com' },
    { name: 'GiselleHomes', domain: 'gisellehomes.com' },
    { name: 'Specsmart', domain: 'specsmart.ng' },
    { name: 'Goldrich Spicy', domain: 'goldrichspicy.com.ng' },
  ];

  return (
    <section className=" py-8 overflow-hidden bg-surface">
      <p className="text-xs uppercase tracking-widest text-center mb-6 text-muted-foreground">
        Trusted by
      </p>

      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos, ...logos, ...logos, ...logos].map(
          (logo, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-10 shrink-0"
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${logo.domain}&sz=64`}
                alt={logo.name}
                className="h-8 w-auto object-contain grayscale hover:grayscale-0 hover:-translate-y-0.5 transition-all duration-300"
                onError={(e) => {
                  e.target.replaceWith(
                    Object.assign(document.createElement('span'), {
                      textContent: logo.name,
                      className: 'text-sm font-semibold',
                      style: `color: var(--color-text-muted); font-family: 'Playfair Display', serif`,
                    }),
                  );
                }}
              />
            </div>
          ),
        )}
      </div>
    </section>
  );
}
