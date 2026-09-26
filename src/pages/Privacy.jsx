import { Link } from 'react-router';
import Seo from '@/components/layout/Seo';

const sections = [
  {
    title: 'Who we are',
    body: [
      'Gconsult Professional Services is a recruitment and HR advisory firm based in Lagos, Nigeria. This notice explains what personal information we collect through this website and how we handle it.',
      'You can reach us at gconsultrecruitments@gmail.com, on +234 810 686 3792.',
    ],
  },
  {
    title: 'What we collect',
    body: [
      'When you use the contact form, we collect your name, email address, phone number, company name if you provide one, and whatever you write in your message.',
      'When you send us a CV by email, we collect whatever information you have put in it. That usually includes your employment history, education, contact details and sometimes your date of birth or photograph.',
      'We do not use analytics tools, advertising trackers or third-party cookies on this site.',
    ],
  },
  {
    title: 'Why we collect it',
    body: [
      'Contact form submissions are used to answer your enquiry. Nothing more.',
      'CVs are used to match you with roles we are recruiting for. If we think you fit a role, we contact you first, and we will tell you which organisation it is before we do anything else.',
    ],
  },
  {
    title: 'Who we share it with',
    body: [
      'If you are a candidate and we put you forward for a role, your CV and relevant details are sent to that employer. We only do this for roles we have discussed with you.',
      'We do not sell personal information, and we do not share it with anyone for marketing.',
      'Contact form messages are delivered through EmailJS and stored in our email account, which is hosted by Google. Both hold the data on our behalf.',
    ],
  },
  {
    title: 'How long we keep it',
    body: [
      'Contact form messages stay in our email account until they are no longer useful, and we delete them periodically.',
      'CVs are kept for as long as we might reasonably match you with a role, and reviewed at least every two years. Ask us to delete yours at any time and we will.',
    ],
  },
  {
    title: 'Your rights',
    body: [
      'Under the Nigeria Data Protection Act, you can ask us what personal information we hold about you, ask us to correct it if it is wrong, ask us to delete it, or withdraw your consent to us holding it.',
      'Email gconsultrecruitments@gmail.com and we will respond within thirty days. There is no charge.',
    ],
  },
  {
    title: 'Keeping it safe',
    body: [
      'Your information is held in password-protected accounts that only our consultants can access. No system is completely secure, but we do not store personal information anywhere beyond the accounts described here.',
    ],
  },
  {
    title: 'Changes to this notice',
    body: [
      'If we change how we handle personal information, we will update this page and change the date below.',
    ],
  },
];

export default function Privacy() {
  return (
    <main className="bg-secondary pt-32 pb-24 md:pt-40">
      <Seo
        title="Privacy Notice | Gconsult Professional Services"
        description="What personal information Gconsult collects through this website, why we collect it, who we share it with and how to have it removed."
        path="/privacy"
      />

      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
          Privacy notice
        </h1>
        <p className="mt-5 text-sm text-muted-foreground">
          Last updated 26 September 2026
        </p>

        <div className="mt-14 space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-xl text-foreground">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Questions about any of this?{' '}
            <Link
              to="/contact"
              className="text-primary underline-offset-4 hover:underline"
            >
              Get in touch
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
