import { CTAFooter, FeatureSection, Hero, HowItWorks, NavHeader, UseCases } from "@/components/landing";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavHeader />
      <main>
        <Hero />
        <FeatureSection />
        <HowItWorks />
        <UseCases />
        <CTAFooter />
      </main>
    </div>
  );
}
