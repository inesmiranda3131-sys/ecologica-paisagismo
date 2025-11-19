import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import Services from '@/react-app/components/Services';
import About from '@/react-app/components/About';
import Gallery from '@/react-app/components/Gallery';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
