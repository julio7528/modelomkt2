import ContactForm from './components/ContactForm';
import CookieConsent from './components/CookieConsent';
import DynamicContent from './components/DynamicContent';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Segmentation from './components/Segmentation';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ValueProposition from './components/ValueProposition';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark font-body text-text-light dark:text-text-dark">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <Services />
        <Segmentation />
        <Testimonials />
        <DynamicContent />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}

export default App;
