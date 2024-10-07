import About from "@/components/sections/about";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      {/* <BusinessCategories /> */}
      <Footer />
    </>
  );
}
