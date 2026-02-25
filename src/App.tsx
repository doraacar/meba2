import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketData from './components/MarketData';
import Services from './components/Services';
import GlobalPresence from './components/GlobalPresence';
import About from './components/About';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <MarketData />
        <Services />
        <GlobalPresence />
        <About />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
