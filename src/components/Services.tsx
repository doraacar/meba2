import { motion } from 'framer-motion';
import { Globe, Ship, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useMobile } from '../hooks/useMobile';

export default function Services() {
  const { t } = useLanguage();
  const isMobile = useMobile();

  const services = [
    {
      icon: Globe,
      number: '01',
      title: t.services.trading.title,
      description: t.services.trading.description,
      subservices: ['Competitive Pricing', 'Global Markets', 'Reliable Delivery'],
    },
    {
      icon: Ship,
      number: '02',
      title: t.services.logistics.title,
      description: t.services.logistics.description,
      subservices: ['Maritime Shipping', 'Customs Clearance', 'Real-time Tracking'],
    },
    {
      icon: Award,
      number: '03',
      title: t.services.quality.title,
      description: t.services.quality.description,
      subservices: ['ICUMSA Standards', 'Full Transparency', 'Certifications'],
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-emerald-50/70 via-emerald-100/40 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-50 will-change-auto">
        <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-gradient-to-br from-emerald-400/40 to-emerald-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-tl from-emerald-500/35 to-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-300/20 to-emerald-400/20 rounded-full blur-3xl"></div>
      </div>
      {!isMobile && (
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 600">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#grid)" />
          </svg>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.3 : 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-6 leading-tight">
            {t.services.title}
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                transition={{ delay: isMobile ? 0 : (index * 0.15), duration: isMobile ? 0.3 : 0.6 }}
                whileHover={!isMobile ? { y: -12, scale: 1.02 } : undefined}
                className="group relative h-full"
              >
                {!isMobile && (
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/40 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}

                <div className="relative h-full p-8 rounded-3xl bg-white border-2 border-emerald-500/20 shadow-xl shadow-emerald-500/10 group-hover:border-emerald-500/50 group-hover:shadow-2xl group-hover:shadow-emerald-500/20 transition-all duration-500 overflow-hidden">
                  {!isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  )}

                  <div className="relative z-20">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-16 h-16 rounded-2xl border-2 border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/0 group-hover:shadow-emerald-500/30">
                          <Icon className="text-emerald-600 group-hover:text-white" size={32} strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="text-7xl font-serif text-emerald-100 group-hover:text-emerald-200 transition-colors duration-300 leading-none">
                        {service.number}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-3 group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all duration-300">
                      {service.title}
                    </h3>

                    <p className="text-slate-700 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.subservices.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:shadow-md group-hover:shadow-emerald-500/50 transition-all"></div>
                          <span className="text-sm text-slate-700 group-hover:text-emerald-800 transition-colors font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full group-hover:w-32 transition-all duration-500 shadow-lg shadow-emerald-500/30"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
