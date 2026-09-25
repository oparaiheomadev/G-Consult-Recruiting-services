import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import logoLight from '@/assets/Gconsults-light.png';

export default function Preloader() {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Keep it short. Hide as soon as the page is ready,
    // with a small floor so it doesn't flash on fast connections.
    const floor = setTimeout(() => setDone(true), 1200);

    function onLoad() {
      setTimeout(() => setDone(true), 300);
    }

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }

    return () => {
      clearTimeout(floor);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-surface"
        >
          {/* Diamond texture */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-20 size-64 rotate-[41deg] bg-accent"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -right-16 size-72 rotate-[47deg] bg-accent"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/4 right-1/4 size-10 rotate-[43deg] bg-primary/10"
          />

          <motion.img
            src={logoLight}
            alt="Gconsult"
            className="relative h-10 w-auto"
            animate={reduceMotion ? {} : { y: [0, -10, 0] }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
