import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    target: 1200,
    suffix: '+',
    label: 'Successful placements',
    description: 'Professionals placed across every sector since 2018',
    delay: 0,
  },
  {
    target: 94,
    suffix: '%',
    label: 'Retention at 12 months',
    description: 'Of our placements are still in role a year later',
    delay: 200,
  },
  {
    target: 48,
    suffix: 'hrs',
    label: 'Average first shortlist',
    description: 'From brief to shortlist — no chasing, no waiting',
    delay: 400,
  },
];

function CountUp({ target, suffix, delay }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setTimeout(() => {
            const duration = 1500;
            const steps = 60;
            const increment = target / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);
          }, delay);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, delay]);

  return (
    <span ref={ref}>
      {count}
      <span className="text-2xl ml-0.5">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-off-white border-b border-border-light">
      <div className="container mx-auto px-6 py-5">
        {/* Section intro */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-xs uppercase tracking-widest text-text-muted mb-2">
            By the numbers
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-primary-foreground">
            Results that speak for themselves
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-6 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative px-10 py-4 md:py-8 animate-fade-in ${
                index === 0
                  ? 'animation-delay-100'
                  : index === 1
                    ? 'animation-delay-300'
                    : 'animation-delay-500'
              } ${
                index < stats.length - 1
                  ? 'border-b border-border-light md:border-b-0 md:border-r md:border-border-light'
                  : ''
              }`}
            >
              {/* Top accent line */}
              <div className="w-8 h-0.5 bg-primary mb-6 mx-auto" />
              {/* Number */}
              <p className="font-serif text-4xl md:text-5xl font-medium text-primary-foreground text-center mb-2">
                <CountUp
                  target={stat.target}
                  suffix={stat.suffix}
                  delay={stat.delay}
                />
              </p>

              {/* Label */}
              <p className="text-sm font-medium  text-primary-foreground text-center mb-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
