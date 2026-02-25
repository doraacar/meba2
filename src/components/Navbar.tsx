import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'tr', label: 'TR' },
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
  ];

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.presence, href: '#presence' },
    { label: t.nav.about, href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 transition-all duration-500 bg-white shadow-lg shadow-emerald-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-20 lg:gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2 justify-self-start"
          >
            <svg className="w-9 h-9 text-emerald-600 transition-all" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2C20 2 12 8 12 16C12 22 16 28 20 32C24 28 28 22 28 16C28 8 20 2 20 2Z" fill="currentColor" opacity="0.8"/>
              <circle cx="20" cy="16" r="4" fill="currentColor" opacity="1"/>
              <path d="M8 18C6 22 8 28 14 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              <path d="M32 18C34 22 32 28 26 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
            </svg>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Meba Brasil
            </span>
          </motion.div>

          <div className="hidden lg:flex items-center justify-center gap-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="px-4 py-2 text-sm font-medium rounded-md transition-all text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 whitespace-nowrap"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-1 justify-self-end border-l pl-4 border-slate-300">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-all ${
                  language === lang.code
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'text-slate-600 hover:bg-emerald-50'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-900 justify-self-end col-start-3"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e);
                    setMobileMenuOpen(false);
                  }}
                  className="block text-slate-700 hover:text-emerald-600 font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex space-x-2 pt-3 border-t">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-4 py-2 text-xs font-semibold rounded transition-all ${
                      language === lang.code
                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                        : 'bg-slate-100 text-slate-600 hover:bg-emerald-50'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
