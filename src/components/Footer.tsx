import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold">Meba Brasil</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              {t.hero.subtitle}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 rounded-lg flex items-center justify-center transition-all hover:shadow-lg hover:shadow-emerald-500/30"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-emerald-600 rounded-lg flex items-center justify-center transition-all hover:shadow-lg hover:shadow-emerald-500/30"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#presence" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  {t.nav.presence}
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.nav.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-slate-400">info@mebabrasil.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-slate-400">+55 11 1234-5678</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-slate-400">São Paulo, Brazil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">{t.footer.copyright}</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
