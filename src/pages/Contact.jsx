import Seo from '@/components/layout/Seo';

import ContactMessage from '@/components/section/ContactMessage';

export default function Contact() {
  return (
    <main>
      <Seo
        title="Contact  | Talk to a Recruitment Consultant in Lagos"
        description="Hiring or looking for a role? Reach one of our consultants directly. We reply within two working hours."
        path="/contact"
      />
      <ContactMessage />
    </main>
  );
}
