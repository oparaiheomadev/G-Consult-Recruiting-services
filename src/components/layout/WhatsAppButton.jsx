import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { X } from 'lucide-react';

const PHONE = '2348106863792'; // no plus, no spaces
const MESSAGE = 'Hello Gconsult, I would like to talk about a role.';

const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

export default function WhatsAppButton() {
  const reduceMotion = useReducedMotion();
  const [showTip, setShowTip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Show the prompt once, a few seconds in
  useEffect(() => {
    const timer = setTimeout(() => setShowTip(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end gap-3">
      <AnimatePresence>
        {showTip && !dismissed && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-1 max-w-[13rem] rounded-2xl rounded-br-sm border border-border bg-card p-4 shadow-lg"
          >
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="absolute right-2 top-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-3.5" />
            </button>

            <p className="pr-4 text-sm leading-relaxed text-card-foreground">
              Hiring or looking for a role? Message us on WhatsApp.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with Gconsult on WhatsApp"
        onClick={() => setDismissed(true)}
        className="group relative flex size-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 ease-out hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {/* Pulse ring */}
        {!reduceMotion && (
          <span
            aria-hidden="true"
            className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20"
          />
        )}

        <svg
          viewBox="0 0 24 24"
          fill="white"
          className="relative size-7"
          aria-hidden="true"
        >
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35Z" />
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.88L2 22l5.25-1.24A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18.2a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.1.73.74-3.02-.2-.31A8.2 8.2 0 1 1 12 20.2Z" />
        </svg>
      </a>
    </div>
  );
}
