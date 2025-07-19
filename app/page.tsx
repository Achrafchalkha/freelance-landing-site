import { HeroSection } from "@/components/hero-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProgramsOverview } from "@/components/programs-overview"
import { Testimonials } from "@/components/testimonials"

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <WhyChooseUs />
      <ProgramsOverview />
      <Testimonials />
    </div>
  )
}
