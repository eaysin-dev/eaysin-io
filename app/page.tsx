import { Careers } from '@/components/sections/Careers';
import { Footer } from '@/components/sections/footer';
import { Hero } from '@/components/sections/Hero';
import { Navbar } from '@/components/sections/Navbar';
import { OpenToWork } from '@/components/sections/OpenToWork';
import { Portfolio } from '@/components/sections/projects';
import { ScrollToTop } from '@/components/sections/ScrollToTop';
import { Skills } from '@/components/sections/Skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OpenToWork />
      <Skills />
      {/* <About /> */}
      <Careers />
      <Portfolio />
      {/* <Services /> */}
      {/* <Cta /> */}
      {/* <Testimonials /> */}
      {/* <Team />
      <Pricing />
      <Newsletter /> */}
      {/* <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}
