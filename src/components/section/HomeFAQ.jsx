import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: 'How quickly can you deliver a shortlist?',
    a: 'For most roles, five candidates within 48 hours of an agreed brief. Executive searches take longer because the pool is smaller and we approach people directly rather than advertising, so expect four to eight weeks from brief to signed offer.',
  },
  {
    q: 'How are your fees structured?',
    a: 'A percentage of the first-year package, invoiced when the person starts rather than when we send the shortlist. If you do not hire, you do not pay. Executive search is retained and split across three stages. Either way, the figure is agreed in writing before any work begins.',
  },
  {
    q: 'Do candidates pay anything?',
    a: 'Never. Our fees are paid by the employer. If anyone asks you for money to be considered for a role, in our name or any other, it is not us and it is not legitimate.',
  },
  {
    q: 'What happens if the person we hire does not work out?',
    a: 'We run the search again at no additional fee. Thirty days on core recruitment, ninety on executive search. That cover starts from their first day.',
  },
  {
    q: 'Do you work with small companies?',
    a: 'Most of our clients are small and mid-sized businesses. We are a small firm ourselves, which is why a single consultant handles your search from the first conversation through to the ninety-day check-in.',
  },
  {
    q: 'Can you run a search confidentially?',
    a: 'Regularly. Where the current postholder is still in the role, we approach candidates without naming your organisation until they reach final stages and have signed a confidentiality agreement.',
  },
];

export default function HomeFaq() {
  const [open, setOpen] = useState('');

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-surface py-20 md:py-24"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="faq-heading"
          className="max-w-md text-3xl leading-tight tracking-tight text-foreground md:text-4xl"
        >
          Questions we get asked.
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          If yours is not here, ask us directly and we will answer it plainly.
        </p>

        <Accordion
          type="single"
          collapsible
          value={open}
          onValueChange={setOpen}
          className="mt-12 space-y-3"
        >
          {faqs.map((faq) => {
            const isOpen = open === faq.q;

            return (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className={cn(
                  'overflow-hidden rounded-xl border transition-colors duration-300',
                  isOpen
                    ? 'border-primary/30 bg-card'
                    : 'border-border bg-card hover:border-primary/20',
                )}
              >
                <AccordionTrigger
                  className={cn(
                    'gap-4 px-6 py-5 text-left text-base font-normal text-card-foreground',
                    'hover:no-underline [&>svg]:hidden',
                  )}
                >
                  <span className="flex-1">{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'flex size-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300',
                      isOpen
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground',
                    )}
                  >
                    {isOpen ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6 pt-0 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
