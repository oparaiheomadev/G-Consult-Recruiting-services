import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

const rotatingWords = [
  'move markets',
  'build cultures.',
  'drive growth.',
  'shape futures.',
];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
      {/* Badge */}
      <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
        <span className="text-primary text-xs animate-fade-in">
          Trusted by 180+ organisations across Nigeria
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-foreground font-bold text-3xl md:text-5xl tracking-wider max-w-3xl mb-8 ">
        We don't fill roles. We find people who{' '}
        <span
          className="text-secondary-foreground glass-strong rounded-md px-4 py-1 inline-block align-middle glow-text animate-pulse"
          key={currentWord}
        >
          {rotatingWords[currentWord]}
        </span>
      </h2>

      {/* Subtext */}
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mb-12">
        TalentBridge connects forward-thinking organisations with exceptional
        professionals — across every sector, at every level.
      </p>

      {/* CTAs */}
      <div className="flex items-center gap-4">
        <Link
          to="/contact"
          className="bg-primary text-primary-foreground text-sm font-semibold px-7 py-3 rounded-full hover:opacity-90 transition flex items-center gap-2"
        >
          Hire talent now
          <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></span>
        </Link>

        <Link
          to="/jobs"
          className="border border-foreground/20 text-foreground text-sm font-semibold px-7 py-3 rounded-full hover:bg-surface transition"
        >
          Browse open roles →
        </Link>
      </div>
    </section>
  );
}
