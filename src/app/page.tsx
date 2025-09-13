import Hero from "@/components/Hero";
import ServiceImages from "@/components/ServiceImages";
import Services from "@/components/Services";
import Artists from "@/components/Artists";
import OurStory from "@/components/OurStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceImages />
      <Services />
      <Artists />
      <OurStory />
      <Footer />
    </div>
  );
}
