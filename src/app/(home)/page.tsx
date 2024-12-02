import { SlidesSection } from "../components/slides-section";
import { slide1Data, slide2Data, slide3Data } from "./_components/data";
import HeroSection from "./_components/hero";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SlidesSection {...slide1Data} />
      <SlidesSection {...slide2Data} />
      <SlidesSection {...slide3Data} />
      <SlidesSection {...slide1Data} />
      <SlidesSection {...slide2Data} />
      <SlidesSection {...slide3Data} />
      <SlidesSection {...slide1Data} />
    </main>
  );
}
