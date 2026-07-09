import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    initials: 'TO',
    quote:
      '"TalentBridge sent us a shortlist of five candidates in under 48 hours. We hired two. Both are still with us three years later. That\'s the kind of partner you don\'t replace."',
    name: 'Tolu Akinpeloye',
    role: 'Founder & Director · Nack Apparel',
  },
  {
    initials: 'MK',
    quote:
      '"We\'d tried three other agencies before G-Consult. None of them came close. Within two weeks we had our Head of Engineering in place. Exceptional service from start to finish."',
    name: 'Mark Coackley',
    role: 'CEO · Specsmart',
  },
  {
    initials: 'FB',
    quote:
      '"The team understood our culture immediately. They didn\'t just send CVs — they sent people who actually fit. Our last three hires all came through G-Consult."',
    name: 'Fatima Bello',
    role: 'HR Director · MTN Nigeria',
  },
];

export default function HomeTestimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  function prev() {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }

  function next() {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }

  return (
    <section className="bg-off-white py-10 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-primary mb-3">
            Client voice
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-text-dark max-w-md leading-tight">
            Trusted by teams building for the long run
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="bg-background rounded-2xl p-8 md:p-10">
          {/* Quote */}
          <p
            className="text-foreground/90 text-sm md:text-base leading-relaxed italic mb-8 animate-fade-in"
            key={current}
          >
            {testimonials[current].quote}
          </p>

          {/* Author + controls */}
          <div className="flex items-center justify-between">
            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold shrink-0">
                {testimonials[current].initials}
              </div>
              <div>
                <p className="text-foreground text-sm font-medium">
                  {testimonials[current].name}
                </p>
                <p className="text-muted-foreground text-xs">
                  {testimonials[current].role}
                </p>
              </div>
            </div>

            {/* Arrow controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-primary w-5 h-2'
                    : 'bg-muted-foreground/30 w-2 h-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
