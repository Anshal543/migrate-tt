import { HeroSection } from "@/components/sections/hero-section";
import { WorkWithUsSection } from "@/components/sections/work-with-us-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Circle } from "lucide-react";
import ProjectGsap from "@/components/projectsgsap";
import { Suspense } from "react";
import { ServicesSection } from "@/components/sections/services-section";
import MaskedImageScroll from "@/components/ImageScroll";
import { HorizontalServices } from "@/components/HorizontalShowcase";
import { BentoDemo } from "@/components/sections/Bento";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden bg-pattern">
      <HeroSection />
      <HorizontalServices />
      <BentoDemo />
      <ProjectGsap showmore={true} />
      {/* <ServicesSection /> */}
      {/* <WorkWithUsSection /> */}
      <ContactSection />
    </div>
  );
}
