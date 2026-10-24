import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import FormatGallery from './components/FormatGallery.jsx';
import Founder from './components/Founder.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import ReviewsFaq from './components/ReviewsFaq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FormatGallery />
        <Founder />
        <HowItWorks />
        <ReviewsFaq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
