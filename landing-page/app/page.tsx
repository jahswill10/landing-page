import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-2";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-7";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection/>
        <Features/>
        <IntegrationsSection/>
        <FAQsThree/>
        <FooterSection/>
      </main>
    </div>
  );
}
