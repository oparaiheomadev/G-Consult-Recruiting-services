import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How quickly can you deliver a shortlist?',
    a: 'For core recruitment, within 48 hours of an agreed brief. Executive searches take longer because the pool is smaller and the approach is direct, typically four to eight weeks from brief to signed offer.',
  },
  {
    q: 'What does the placement guarantee cover?',
    a: 'If a placement leaves or is let go within the guarantee period, we run the search again at no additional fee. Thirty days on core recruitment, ninety on executive search.',
  },
  {
    q: 'How are your fees structured?',
    a: 'A percentage of the first-year package, invoiced on start date rather than on shortlist. Executive search is retained, split across three stages. We confirm the figure in writing before any work begins.',
  },
  {
    q: 'Do you work outside Lagos?',
    a: 'Yes. We place across Nigeria and handle remote and hybrid roles. Our consultants are Lagos-based and travel for client meetings where a search calls for it.',
  },
  {
    q: 'Can you handle a confidential replacement search?',
    a: 'Regularly. Searches where the current postholder is still in role are run without naming your organisation until a candidate reaches final stages.',
  },
];

export default function HomeFaq() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-background py-20 md:py-24"
    >
      <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div>
          <h2
            id="faq-heading"
            className="text-3xl leading-tight tracking-tight text-foreground md:text-4xl"
          >
            Questions we get asked.
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            If yours is not here, ask us directly and we will answer it plainly.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.q}
              value={faq.q}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-5 text-left text-base font-normal text-foreground hover:no-underline [&[data-state=open]]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 pr-8 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
