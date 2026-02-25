import { motion } from 'framer-motion';
import { ArrowRight, Globe, Ship, BadgeCheck, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useMobile } from '../hooks/useMobile';

export default function Hero() {
  const { t } = useLanguage();
  const isMobile = useMobile();

  const stats = [
    {
      icon: Globe,
      value: '30+',
      label: 'Ülke',
      sublabel: 'Küresel İhracat Ağı',
    },
    {
      icon: Ship,
      value: '500K+',
      label: 'Ton',
      sublabel: 'Yıllık Tedarik Kapasitesi',
    },
    {
      icon: BadgeCheck,
      value: 'ISO 9001',
      label: '',
      sublabel: 'Sertifikalı Kalite',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Güven',
      sublabel: 'Şeffaf Ticaret Süreci',
    },
  ];

  const mobileAnimation = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    transition: { duration: 0 }
  };

  const desktopAnimation = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100/60 pt-32 pb-12 lg:pt-40 lg:pb-0 overflow-hidden">
      {!isMobile && (
        <div className="absolute inset-0 opacity-50 will-change-auto">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-300/60 to-emerald-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-400/50 to-emerald-200/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-emerald-300/20 rounded-full blur-3xl"></div>
        </div>
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-12rem)]">
          <motion.div
            {...(isMobile ? mobileAnimation : desktopAnimation)}
            className="text-left"
          >
            {isMobile ? (
              <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg shadow-emerald-500/20">
                <span className="text-white text-sm font-semibold tracking-wide">
                  ICUMSA 45 • VHP • REFINED SUGAR
                </span>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg shadow-emerald-500/20"
              >
                <span className="text-white text-sm font-semibold tracking-wide">
                  ICUMSA 45 • VHP • REFINED SUGAR
                </span>
              </motion.div>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            <motion.button
              whileHover={!isMobile ? { scale: 1.03 } : undefined}
              whileTap={!isMobile ? { scale: 0.97 } : undefined}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:from-emerald-600 hover:to-emerald-700 transition-all group"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>

            <div className="mt-16 lg:hidden">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-emerald-500/30 bg-emerald-100">
                <img
                  src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sugar Trading"
                  className="w-full h-64 sm:h-80 object-cover"
                  loading="eager"
                  decoding="async"
                  width="400"
                  height="300"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0 : 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20 border-2 border-emerald-500/30 hover:shadow-emerald-500/30 transition-shadow duration-500">
              <img
                src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Sugar Trading"
                className="w-full h-[600px] object-cover"
                loading="eager"
                decoding="async"
                width="1200"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent"></div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl shadow-emerald-500/20 border-2 border-emerald-500/20"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                  <BadgeCheck className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-sm text-emerald-700 font-medium">Premium Quality</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">ICUMSA 45</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: isMobile ? 0.1 : 0.5 }}
        className="mt-20 lg:mt-24 border-t border-emerald-300/50 bg-gradient-to-b from-emerald-50/60 via-white to-emerald-100/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.sublabel}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: isMobile ? 0 : (0.6 + index * 0.1) }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-white border-2 border-emerald-500/20 group-hover:border-emerald-500 group-hover:bg-gradient-to-br group-hover:from-emerald-50 group-hover:to-emerald-100/50 transition-all shadow-sm shadow-emerald-500/10">
                    <Icon className="text-emerald-600 group-hover:text-emerald-700" size={24} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    {stat.label && (
                      <p className="text-sm font-semibold text-emerald-800">
                        {stat.label}
                      </p>
                    )}
                    <p className="text-xs text-slate-600 leading-tight">
                      {stat.sublabel}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
