import { useEffect, useRef, useState } from 'react';

const items = [
  { id: 'executive-search', label: 'Executive search' },
  { id: 'core-recruitment', label: 'Core recruitment' },
  { id: 'hr-consulting', label: 'HR consulting' },
  { id: 'payroll', label: 'Payroll' },
];

export default function ServiceNav() {
  const [active, setActive] = useState(items[0].id);
  const itemRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Slide the active item into view on narrow screens
  useEffect(() => {
    const el = itemRefs.current[active];
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [active]);

  return (
    <nav
      aria-label="Services"
      className="sticky top-16 z-30 border-b border-border bg-background/85 backdrop-blur"
    >
      <div className="relative">
        <ul className="mx-auto flex max-w-6xl gap-8 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <li key={item.id} ref={(el) => (itemRefs.current[item.id] = el)}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className="group relative flex items-center gap-2 whitespace-nowrap py-4 text-sm transition-colors duration-300"
              >
                <span
                  aria-hidden="true"
                  className={[
                    'size-1.5 rotate-[43deg] transition-all duration-300',
                    active === item.id
                      ? 'scale-100 bg-primary'
                      : 'scale-0 bg-primary',
                  ].join(' ')}
                />

                <span
                  className={
                    active === item.id
                      ? 'text-foreground'
                      : 'text-muted-foreground/50 group-hover:text-foreground'
                  }
                >
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hints that the strip scrolls on mobile */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background md:hidden"
        />
      </div>
    </nav>
  );
}
