import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { Services } from "@/components/sections/services";
import { ROICalculator } from "@/components/sections/roi-calculator";
import { WorkPreview } from "@/components/sections/work-preview";
import { Process } from "@/components/sections/process";
import { WhyUs } from "@/components/sections/why-us";
import { CTABanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Services />
      <ROICalculator />
      <WorkPreview />
      <Process />
      <WhyUs />
      <CTABanner />
    </>
  );
}
