import HeroBanner from '../components/section/HeroBanner';
import get from '../assets/get.jpg';
import ContacMessage from '../components/section/ContactMessage';

export default function Contact() {
  return (
    <main>
      <HeroBanner
        badge="Let's talk"
        image={get}
        OverlayClassName="bg-black/70"
        title="Great hires start with "
        highlight="one conversation"
        description="Reach out and a real consultant will respond within 2 business hours."
      />
      <ContacMessage />
    </main>
  );
}
