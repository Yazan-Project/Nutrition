import Header from '../components/Header';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Platform from '../components/Platform';
import HowItWorks from '../components/HowItWorks';
import Testimonial from '../components/Testimonial';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Steps from '../components/Steps';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Platform />
      <HowItWorks />
      <Testimonial />
      <Features />
      <Pricing />
      <Steps />
      <FAQ />
      <Footer />
    </main>
  );
}
