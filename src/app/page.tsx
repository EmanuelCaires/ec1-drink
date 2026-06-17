import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import IngredientsPreview from "@/components/sections/IngredientsPreview";
import FlavoursPreview from "@/components/sections/FlavoursPreview";
import WaitlistSection from "@/components/sections/WaitlistSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <IngredientsPreview />
      <FlavoursPreview />
      <WaitlistSection />
    </>
  );
}
