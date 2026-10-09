import HeaderNav from '@/components/HeaderNav';
import Section1Hero from '@/components/Section1Hero';
import Section2PitchDeck from '@/components/Section2PitchDeck';
import Section3DigitalSocial from '@/components/Section3DigitalSocial';
import Section4PrintCollateral from '@/components/Section4PrintCollateral';
import Section5TheCloser from '@/components/Section5TheCloser';
import FooterBar from '@/components/FooterBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <HeaderNav />
      <main>
        <Section1Hero />
        <Section2PitchDeck />
        <Section3DigitalSocial />
        <Section4PrintCollateral />
        <Section5TheCloser />
      </main>
      <FooterBar />
    </div>
  );
}
