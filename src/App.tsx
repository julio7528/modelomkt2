import ContactForm from './components/ContactForm';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark font-body text-text-light dark:text-text-dark">
      <Header />
      <main>
        <HeroSection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}

export default App;
