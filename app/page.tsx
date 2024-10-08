import About from "@/components/sections/about";
import Services from "@/components/sections/expertise";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero/hero";
import Portfolio from "@/components/sections/portfolio";

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </>
  );
}
