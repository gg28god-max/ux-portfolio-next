import Hero from '@/components/Hero';
import CaseStudyGrid from '@/components/CaseStudyGrid';
import TechStackGrid from '@/components/TechStackGrid';

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <CaseStudyGrid />
      <TechStackGrid />
    </div>
  );
}
