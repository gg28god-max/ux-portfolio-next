import Hero from '@/components/Hero';
import SelectedProjects from '@/components/SelectedProjects';
import Testimonials from '@/components/Testimonials';
import ThoughtsBlog from '@/components/ThoughtsBlog';

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <SelectedProjects />
      <Testimonials />
      <ThoughtsBlog />
    </div>
  );
}
