import { CategoryExperience } from "@/components/categories/CategoryExperience";
import { CelebrationBuilder } from "@/components/builder/CelebrationBuilder";
import { VisitCTA } from "@/components/cta/VisitCTA";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { IntroRibbon } from "@/components/intro/IntroRibbon";
import { Navbar } from "@/components/nav/Navbar";
import { StickyActionBar } from "@/components/nav/StickyActionBar";
import { Reviews } from "@/components/reviews/Reviews";
import { JsonLd } from "@/components/seo/JsonLd";
import { StoreLocation } from "@/components/store/StoreLocation";
import { WhyVisit } from "@/components/trust/WhyVisit";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main id="main" className="pb-24 md:pb-0">
        <Hero />
        <IntroRibbon />
        <CategoryExperience />
        <CelebrationBuilder />
        <WhyVisit />
        <Reviews />
        <StoreLocation />
        <VisitCTA />
      </main>
      <Footer />
      <StickyActionBar />
      <CustomCursor />
    </>
  );
}
