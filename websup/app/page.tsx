import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import PersonalSection from "@/components/home/PersonalSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import USP from "@/components/home/USP";
import FreeConceptSection from "@/components/home/FreeConceptSection";
import Cases from "@/components/home/Cases";
import Reviews from "@/components/home/Reviews";
import WorkProcess from "@/components/home/WorkProcess";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <PersonalSection />
      <ServicesOverview />
      <USP />
      <FreeConceptSection />
      <Cases />
      <Reviews />
      <WorkProcess />
      <FAQ />
      <FinalCTA />
    </>
  );
}
