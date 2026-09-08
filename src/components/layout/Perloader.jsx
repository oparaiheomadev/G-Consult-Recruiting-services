import { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();

    function ease(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    let animFrame;
    function tick(now) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      setProgress(Math.round(ease(t) * 100));
      if (t < 1) {
        animFrame = requestAnimationFrame(tick);
      }
    }

    animFrame = requestAnimationFrame(tick);

    const fadeTimer = setTimeout(() => setFadeOut(true), 1400);
    const hideTimer = setTimeout(() => setVisible(false), 1900);

    return () => {
      cancelAnimationFrame(animFrame);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-7 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Logo */}
      <h1 className="text-3xl font-bold tracking-tight animate-fade-in">
        <span
          className="font-serif italic"
          style={{ color: 'var(--color-foreground)' }}
        >
          G -
        </span>
        <span style={{ color: 'var(--color-primary)' }}>Consult</span>
      </h1>

      {/* Tagline */}
      <p
        className="text-xs uppercase tracking-widest animate-fade-in animation-delay-200"
        style={{ color: 'var(--color-muted-foreground)' }}
      >
        Finding the right talent...
      </p>

      {/* Progress bar */}
      <div className="flex items-center gap-3 animate-fade-in animation-delay-300">
        <div
          className="w-48 h-1 rounded-full overflow-visible relative"
          style={{ backgroundColor: 'var(--color-muted)' }}
        >
          <div
            className="h-full rounded-full relative"
            style={{
              width: `${progress}%`,
              backgroundColor: 'var(--color-primary)',
              boxShadow:
                '0 0 8px 2px var(--color-primary), 0 0 20px 4px color-mix(in srgb, var(--color-primary) 40%, transparent)',
            }}
          >
            {/* Glowing dot */}
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
              style={{
                backgroundColor: 'var(--color-secondary-foreground)',
                boxShadow:
                  '0 0 10px 4px var(--color-primary), 0 0 24px 8px color-mix(in srgb, var(--color-primary) 50%, transparent)',
              }}
            />
          </div>
        </div>
        <span
          className="text-xs w-8"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
}
