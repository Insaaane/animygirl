import { CasesSection } from "@/widgets/cases/ui/CasesSection";
import { ContactSection } from "@/widgets/contact/ui/ContactSection";
import { Footer } from "@/widgets/footer/ui/Footer";
import { Header } from "@/widgets/header/ui/Header";
import { HeroSection } from "@/widgets/hero/ui/HeroSection";
import { PricingSection } from "@/widgets/pricing/ui/PricingSection";
import { ServicesSection } from "@/widgets/services/ui/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CasesSection />
        <ServicesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
