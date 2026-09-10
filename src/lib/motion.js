export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export const fadeUpDelayed = (delay) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay },
});
