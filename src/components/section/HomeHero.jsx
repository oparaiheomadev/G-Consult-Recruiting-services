import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const rotatingWords = [
  'move markets.',
  'build cultures.',
  'drive growth.',
  'shape futures.',
];

export default function HomeHero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="dark bg-background min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
      {/* Badge */}
      <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-10">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span className="text-primary text-xs">
          Trusted by 180+ organisations across Nigeria
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-foreground  font-medium text-4xl md:text-6xl tracking-tight leading-[1.15] max-w-3xl mb-8">
        We don't fill roles. We find people who{' '}
        <span key={currentWord} className="text-primary italic">
          {rotatingWords[currentWord]}
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mb-12">
        G-Consult connects forward-thinking organisations with exceptional
        professionals, across every sector, at every level.
      </p>

      {/* CTAs */}
      <div className="flex items-center gap-3">
        <Button asChild size="lg" className="rounded-full px-7">
          <Link to="/contact">Hire talent now</Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-full px-7"
        >
          <Link to="/services">Browse our services</Link>
        </Button>
      </div>
    </section>
  );
}
