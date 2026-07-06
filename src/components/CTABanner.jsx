export default function CTABanner() {
  return (
    <section className="bg-primary py-20 px-6 text-center">
      <div className="container mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mb-4">
          Get started
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-foreground mb-4 leading-tight">
          Ready to hire someone great?
        </h2>
        <p className="text-sm text-primary-foreground/70 leading-relaxed mb-8">
          Tell us about your open role and we'll have a shortlist on your desk
          within 48 hours.
        </p>
        <button className="bg-background text-foreground text-sm font-semibold px-8 py-3 rounded-full hover:opacity-90 transition">
          Start a search
        </button>
      </div>
    </section>
  );
}
