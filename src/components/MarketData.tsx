import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface MarketPrice {
  price: number;
  change: number;
  trend: 'up' | 'down';
  sparklineData: number[];
}

function Sparkline({ data, trend }: { data: number[]; trend: 'up' | 'down' }) {
  const width = 60;
  const height = 24;
  const padding = 2;
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((value, i) => {
    const x = padding + (i / (data.length - 1)) * innerWidth;
    const y = padding + innerHeight - ((value - min) / range) * innerHeight;
    return `${x},${y}`;
  });

  const color = trend === 'up' ? '#059669' : '#dc2626';

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="ml-2"
    >
      <polyline
        points={points.join(' ')}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MarketData() {
  const { t } = useLanguage();
  const [iceLondon, setIceLondon] = useState<MarketPrice>({
    price: 542.30,
    change: 2.45,
    trend: 'up',
    sparklineData: Array(12).fill(542.30),
  });
  const [iceNy, setIceNy] = useState<MarketPrice>({
    price: 23.15,
    change: -0.82,
    trend: 'down',
    sparklineData: Array(12).fill(23.15),
  });
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setIceLondon((prev) => {
        const changeAmount = (Math.random() - 0.5) * 5;
        const newPrice = prev.price + changeAmount;
        const newSparkline = [...prev.sparklineData.slice(1), newPrice];
        return {
          price: newPrice,
          change: changeAmount,
          trend: changeAmount > 0 ? 'up' : 'down',
          sparklineData: newSparkline,
        };
      });

      setIceNy((prev) => {
        const changeAmount = (Math.random() - 0.5) * 0.5;
        const newPrice = prev.price + changeAmount;
        const newSparkline = [...prev.sparklineData.slice(1), newPrice];
        return {
          price: newPrice,
          change: changeAmount,
          trend: changeAmount > 0 ? 'up' : 'down',
          sparklineData: newSparkline,
        };
      });

      setLastUpdate(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const PriceCard = ({ title, data }: { title: string; data: MarketPrice }) => (
    <motion.div
      whileHover={{ y: -2 }}
      className="group relative backdrop-blur-xl bg-white/60 rounded-2xl p-6 border border-white/40 shadow-lg transition-all duration-300 hover:bg-white/80"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-widest">
            {title}
          </h3>
          <div
            className={`px-2 py-1 rounded-md text-xs font-bold flex items-center ${
              data.trend === 'up'
                ? 'bg-emerald-500/15 text-emerald-700'
                : 'bg-red-500/15 text-red-700'
            }`}
          >
            {data.trend === 'up' ? '↑' : '↓'}
            {Math.abs(data.change).toFixed(2)}%
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <motion.div
              key={data.price}
              initial={{ scale: 1.05, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-3xl font-bold text-slate-900"
            >
              ${data.price.toFixed(2)}
            </motion.div>
            <p className="text-xs text-slate-500 font-medium mt-1">/MT</p>
          </div>

          <Sparkline data={data.sparklineData} trend={data.trend} />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400/40 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-emerald-500/30 to-emerald-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3">
            {t.marketData.title}
          </h2>
          <p className="text-lg text-slate-600">
            {t.marketData.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <PriceCard title={t.marketData.iceLondon} data={iceLondon} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <PriceCard title={t.marketData.iceNy} data={iceNy} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-end text-xs text-slate-500"
        >
          {t.marketData.lastUpdate}: {lastUpdate.toLocaleTimeString()}
        </motion.div>
      </div>
    </section>
  );
}
