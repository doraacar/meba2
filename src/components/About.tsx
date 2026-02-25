import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useMobile } from '../hooks/useMobile';

export default function About() {
  const { t } = useLanguage();
  const isMobile = useMobile();

  const stats = [
    {
      icon: Award,
      value: t.about.stats.experience,
    },
    {
      icon: Users,
      value: t.about.stats.countries,
    },
    {
      icon: TrendingUp,
      value: t.about.stats.capacity,
    },
    {
      icon: Shield,
      value: t.about.stats.clients,
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-emerald-100/50 via-emerald-50/70 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-45 will-change-auto">
        <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-gradient-to-br from-emerald-400/45 to-emerald-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[550px] h-[550px] bg-gradient-to-tl from-emerald-500/40 to-emerald-200/35 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.3 : 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              {t.about.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.value}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: isMobile ? 0 : (index * 0.1), duration: isMobile ? 0.3 : 0.6 }}
                    whileHover={!isMobile ? { scale: 1.05, y: -4 } : undefined}
                    className="bg-white rounded-xl p-4 border-2 border-emerald-500/20 shadow-lg shadow-emerald-500/10 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/20 transition-all"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-2 shadow-lg shadow-emerald-500/30">
                      <Icon className="text-white" size={20} />
                    </div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">{stat.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.3 : 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20 border-2 border-emerald-500/30">
              <img
                src="https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Corporate"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl shadow-emerald-500/20 border-2 border-emerald-500/30">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/40">
                        <Award className="text-white" size={24} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-emerald-700 font-medium">ICUMSA Certified</p>
                      <p className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">ISO 9001:2015</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {!isMobile && (
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl p-6 shadow-2xl shadow-emerald-500/40"
              >
                <p className="text-sm font-semibold mb-1">Premium Quality</p>
                <p className="text-3xl font-bold">ICUMSA 45</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
