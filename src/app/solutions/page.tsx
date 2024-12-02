import React from "react";
import HeroSection from "./_components/hero-section";
import Navbar from "./_components/navbar";
import IntegrationsSection from "./_components/integrations-section";
import RunAnyWhereSection from "./_components/run-any-where-section";
import ModelsSection from "./_components/models-section";
import GetStartedSection from "./_components/get-started-section";
import UseCasesSection from "./_components/use-cases-section";
import ResourcesSection from "./_components/resources-section";
import DocumentationSection from "./_components/documentation-section";
import EcosystemSection from "./_components/ecosystem-section";

export default function Page() {
  return (
    <main className="[&>*]:scroll-m-[calc(var(--upbar-height)+var(--navbar-height)-4px)]">
      <HeroSection />
      <Navbar />
      <ModelsSection />
      <IntegrationsSection />
      <RunAnyWhereSection />
      <GetStartedSection />
      <UseCasesSection />
      <EcosystemSection />
      <ResourcesSection />
      <DocumentationSection />
    </main>
  );
}
