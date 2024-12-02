import React from "react";
import HeroSection from "./_components/hero-section";
import Navbar from "./_components/navbar";
import IndustriesSection from "./_components/industries-section";
import ResourcesSection from "./_components/resources";
import UseCasesSection from "./_components/use-cases";
import GetStartedSection from "./_components/get-started";

export default function Page() {
  return (
    <main className="isolate [&>*]:scroll-m-[calc(var(--upbar-height)+var(--navbar-height)-4px)]">
      <HeroSection />
      <Navbar />
      <IndustriesSection />
      <ResourcesSection />
      <UseCasesSection />
      <GetStartedSection />
    </main>
  );
}
