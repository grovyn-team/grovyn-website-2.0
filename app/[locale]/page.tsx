import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Capabilities from "@/components/Capabilities";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main className="flex flex-col bg-white">
      <Hero />
      <Industries />
      <Capabilities />
      <Metrics />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
