import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import { useMobile } from '../hooks/useMobile';

export default function GlobalPresence() {
  const { t } = useLanguage();
  const isMobile = useMobile();
  const [activeRegion, setActiveRegion] = useState<number | null>(null);

  const regions = [
    {
      id: 0,
      name: 'Brezilya Ana Merkez',
      key: 'brazil',
      color: '#10b981',
      colorTw: 'from-emerald-400 to-emerald-600',
      x: 280,
      y: 380,
      isHub: true,
    },
    {
      id: 1,
      name: 'Avrupa Pazarı',
      key: 'europe',
      color: '#f59e0b',
      colorTw: 'from-amber-400 to-amber-600',
      x: 500,
      y: 200,
      isHub: false,
    },
    {
      id: 2,
      name: 'Orta Doğu & Afrika',
      key: 'middleEast',
      color: '#06b6d4',
      colorTw: 'from-cyan-400 to-cyan-600',
      x: 560,
      y: 300,
      isHub: false,
    },
    {
      id: 3,
      name: 'Asya-Pasifik',
      key: 'asia',
      color: '#3b82f6',
      colorTw: 'from-blue-400 to-blue-600',
      x: 750,
      y: 280,
      isHub: false,
    },
  ];

  return (
    <section id="presence" className="relative py-32 bg-gradient-to-b from-white via-emerald-50/80 to-emerald-100/60 overflow-hidden">
      <div className="absolute inset-0 opacity-45 will-change-auto">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/50 to-emerald-300/35 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-emerald-500/40 to-emerald-200/35 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.3 : 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-6">
            {t.presence.title}
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            {t.presence.subtitle}
          </p>
        </motion.div>

        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-6xl mx-auto mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-500/30 bg-slate-900 shadow-2xl shadow-emerald-500/20">
              <div className="relative w-full py-32 px-8 text-center">
                <div className="text-emerald-400 text-lg font-semibold">Global Trade Network Map</div>
                <div className="text-emerald-300/60 text-sm mt-2">Desktop View Only</div>
              </div>

              <div className="absolute inset-0 border-2 border-emerald-500/10 rounded-3xl pointer-events-none"></div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: isMobile ? 0 : 0.4, duration: isMobile ? 0.3 : 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {regions.map((region) => (
            <motion.button
              key={region.key}
              onMouseEnter={() => !isMobile && setActiveRegion(region.id)}
              onMouseLeave={() => !isMobile && setActiveRegion(null)}
              onClick={() => isMobile && setActiveRegion(activeRegion === region.id ? null : region.id)}
              whileHover={!isMobile ? { y: -4 } : undefined}
              className="group relative"
            >
              {!isMobile && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/40 to-emerald-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}

              <div className="relative p-6 rounded-2xl bg-white border-2 border-emerald-500/20 group-hover:border-emerald-500/50 shadow-lg shadow-emerald-500/10 group-hover:shadow-xl group-hover:shadow-emerald-500/20 transition-all duration-300 h-full">
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${region.colorTw} text-white text-xs font-bold mb-3 shadow-lg`}>
                  {region.isHub ? 'HUB' : 'MARKET'}
                </div>
                <p className="text-slate-800 font-semibold text-sm leading-tight group-hover:text-emerald-700 transition-colors">
                  {region.name}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
