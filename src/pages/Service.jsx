import Seo from '@/components/layout/Seo';
import PageHero from '@/components/shared/PageHero';
import CtaBanner from '@/components/shared/CtaBanner';
import ServiceNav from '@/components/section/ServiceNav';
import ServiceBlock from '@/components/section/ServiceBlock';
import executiveImg from '@/assets/Executive.webp';

export default function Service() {
  return (
    <main>
      <Seo
        title="Recruitment Services | Executive Search, Payroll and HR Consulting"
        description="Executive search, core recruitment, HR consulting and payroll for organisations across Nigeria. Timelines, fees and what each service involves."
        path="/services"
      />
      <PageHero
        badge="What we do"
        title="Three ways we help you hire."
        intro="Every engagement is run by one consultant from first brief to ninety-day check-in. Here is what each one involves, what it costs and what we need from you."
      />

      <ServiceNav />

      <ServiceBlock
        id="executive-search"
        eyebrow="Executive search"
        title="Senior appointments, handled quietly."
        lede="For board, C-suite and head-of-function roles where the right person is already employed and will not be answering job adverts. We approach them directly, on your behalf, without naming you until they are serious."
        image={executiveImg}
        imageAlt="A boardroom prepared for a meeting"
        includes={[
          'A dedicated senior consultant for the full search',
          'Market mapping of the relevant talent pool',
          'Direct approach to passive candidates',
          'Full reference and background checks',
          'Competency and culture-fit assessment',
          'Offer negotiation and resignation support',
        ]}
        stages={[
          'Briefing session and role definition, usually two hours',
          'Market map and longlist presented for your sign-off',
          'Direct approach, screening and first-round interviews',
          'Shortlist of five, then client interviews and offer',
        ]}
        timeline="Four to eight weeks from brief to signed offer"
        fee="Retained, invoiced in three stages: on engagement, on shortlist, and on start date. Percentage of first-year package, confirmed in writing before any work begins."
        needed="A clear brief, a decision-maker available for feedback within 48 hours, and an agreed salary band."
      />

      <ServiceBlock
        id="core-recruitment"
        eyebrow="Core recruitment"
        title="Everything below the boardroom."
        lede="Mid-level and specialist hiring across every function. We keep a live pool of candidates we have already interviewed, which is how a first shortlist reaches you inside two working days."
        statValue="5"
        statLabel="Candidates on every shortlist. If we cannot find five worth your time, we tell you rather than padding the list."
        reverse
        surface
        includes={[
          'Talent sourcing across active and passive channels',
          'CV screening against your actual requirements',
          'First-round interview before anyone reaches you',
          'Interview scheduling and coordination',
          'Offer management and counter-offer handling',
          'Thirty-day replacement cover',
        ]}
        stages={[
          'Brief taken by phone or in person, usually 45 minutes',
          'Sourcing and screening, first shortlist within 48 hours',
          'You interview, we coordinate and gather feedback',
          'Offer, acceptance and start-date confirmation',
        ]}
        timeline="Two to three weeks from brief to accepted offer"
        fee="Percentage of first-year package, invoiced on start date rather than on shortlist. No fee if you do not hire."
        needed="The role requirements, your salary range, and interview availability in the week after shortlist."
      />

      <ServiceBlock
        id="hr-consulting"
        eyebrow="HR consulting"
        title="For teams growing faster than their structure."
        lede="Sometimes the problem is not that you cannot find the person. It is that the role, the pay band or the reporting line is wrong. We work on that side of it too."
        pullQuote="Half the searches that stall are not talent problems. They are structure problems nobody has named yet."
        includes={[
          'Organisational design and role definition',
          'Salary benchmarking against the Nigerian market',
          'HR policy development and handbooks',
          'Workforce planning and headcount modelling',
          'Performance framework design',
          'Advisory retainer for ongoing questions',
        ]}
        stages={[
          'Discovery session with the leadership team',
          'Review of current structure, pay bands and documentation',
          'Findings and recommendations presented in writing',
          'Implementation support, as much or as little as you want',
        ]}
        timeline="Two to six weeks for a project, or an ongoing monthly retainer"
        fee="Project fee agreed upfront based on scope, or a fixed monthly retainer for ongoing advisory."
        needed="Access to your current structure and pay data, and a sponsor at leadership level."
      />

      <ServiceBlock
        id="payroll"
        eyebrow="Payroll"
        title="Salaries out on time, every month."
        lede="Monthly payroll processing for small and mid-sized teams, including PAYE, pension and NHF remittances. You approve the run, we handle everything after it."
        statValue="100%"
        statLabel="On-time processing. If a payment misses its date because of us, that month is free."
        surface
        includes={[
          'Monthly payroll computation and payslip generation',
          'PAYE calculation and remittance to state IRS',
          'Pension contributions filed with your PFA',
          'NHF and NSITF remittances where applicable',
          'Statutory filings and annual returns support',
          'Individual payslips issued to each employee',
        ]}
        stages={[
          'Onboarding: we take your employee data, salary structure and statutory registrations',
          'Each month you send changes, we prepare the run and send it for approval',
          'You approve, we process payments and file the statutory deductions',
          'Payslips issued and a reconciliation report sent to you within two working days',
        ]}
        timeline="Two weeks to set up, then a fixed monthly cycle"
        fee="Fixed monthly fee based on headcount, with no charge for the setup month. Quoted before you commit."
        needed="Employee records, current salary structure, your TIN and pension registration details, and one approver."
      />

      <CtaBanner
        title="Not sure which one you need?"
        body="Describe the situation and we will tell you honestly which of these fits, or whether it is something else entirely."
        primaryLabel="Talk it through"
        secondaryLabel={null}
      />
    </main>
  );
} // bg-transparent text-primary-foreground border border-primary-foreground
