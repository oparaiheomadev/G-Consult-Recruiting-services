import Seo from '@/components/layout/Seo';
import PageHero from '@/components/shared/PageHero';
import CtaBanner from '@/components/shared/CtaBanner';
import IndustrySectors from '@/components/section/IndustrySectors';

export default function Industries() {
  return (
    <main>
      <Seo
        title="Industries We Recruit In | Fashion, Property, FMCG, Health, Tech and others"
        description="Five sectors we have actually placed people in, the roles we filled, and what hiring in each one really involves."
        path="/industries"
      />
      <PageHero
        badge="Where we work"
        title="Five sectors we know from the inside."
        intro="We only list industries where we have actually placed people. These are the roles we have filled and what hiring in each one really involves."
      />
      <IndustrySectors />
      <CtaBanner
        title="Hiring in a sector not listed here?"
        body="The process is the same. Tell us the role and we will be honest about whether we are the right firm for it."
        primaryLabel="Talk it through"
        secondaryLabel={null}
      />
    </main>
  );
}
