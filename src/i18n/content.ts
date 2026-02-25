export type Language = 'tr' | 'en' | 'pt';

export interface Content {
  nav: {
    home: string;
    services: string;
    presence: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  marketData: {
    title: string;
    subtitle: string;
    iceLondon: string;
    iceNy: string;
    lastUpdate: string;
  };
  services: {
    title: string;
    subtitle: string;
    trading: {
      title: string;
      description: string;
    };
    logistics: {
      title: string;
      description: string;
    };
    quality: {
      title: string;
      description: string;
    };
  };
  presence: {
    title: string;
    subtitle: string;
    regions: {
      brazil: string;
      middleEast: string;
      asia: string;
      europe: string;
    };
  };
  about: {
    title: string;
    description: string;
    stats: {
      experience: string;
      countries: string;
      capacity: string;
      clients: string;
    };
  };
  footer: {
    company: string;
    contact: string;
    copyright: string;
  };
}

export const translations: Record<Language, Content> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      services: 'Hizmetlerimiz',
      presence: 'Küresel Varlık',
      about: 'Hakkımızda',
      contact: 'İletişim',
    },
    hero: {
      title: 'Küresel Şeker Tedarik Zinciri Mükemmelliği',
      subtitle: 'Brezilya\'dan dünyaya, profesyonel şeker ticareti ve lojistik çözümleri ile uluslararası pazarlarda güvenilir ortağınız.',
      cta: 'Bizimle İletişime Geçin',
    },
    marketData: {
      title: 'Canlı Piyasa Görünümü',
      subtitle: 'Gerçek zamanlı emtia piyasası verileri',
      iceLondon: 'ICE Londra #5',
      iceNy: 'ICE New York #11',
      lastUpdate: 'Son Güncelleme',
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'Şeker ticaretinin her aşamasında kapsamlı çözümler',
      trading: {
        title: 'Uluslararası Ticaret',
        description: 'Brezilya\'dan küresel pazarlara beyaz ve ham şeker ticareti. Rekabetçi fiyatlandırma ve güvenilir teslimat.',
      },
      logistics: {
        title: 'Lojistik & Tedarik Zinciri',
        description: 'Deniz nakliyesinden gümrük işlemlerine kadar uçtan uca lojistik yönetimi. Zamanında teslimat garantisi.',
      },
      quality: {
        title: 'Kalite Güvencesi',
        description: 'ICUMSA standartlarında sıkı kalite kontrol. Tam şeffaflık ve uluslararası sertifikasyonlar.',
      },
    },
    presence: {
      title: 'Küresel Varlığımız',
      subtitle: 'Brezilya\'dan 4 kıtaya şeker ihracatı',
      regions: {
        brazil: 'Brezilya Üretim Merkezi',
        middleEast: 'Orta Doğu & Afrika',
        asia: 'Asya-Pasifik',
        europe: 'Avrupa Pazarları',
      },
    },
    about: {
      title: 'Meba Brasil Hakkında',
      description: 'Meba Brasil, Brezilya\'nın önde gelen şeker üreticileri ile stratejik ortaklıklar kurarak, dünya çapında güvenilir ve şeffaf ticaret hizmetleri sunmaktadır. Yüksek kalite standartları ve müşteri odaklı yaklaşımımızla, uluslararası emtia ticaretinde fark yaratıyoruz.',
      stats: {
        experience: '15+ Yıl Deneyim',
        countries: '40+ Ülke',
        capacity: '500K+ Ton/Yıl',
        clients: '100+ Aktif Müşteri',
      },
    },
    footer: {
      company: 'Meba Brasil',
      contact: 'İletişim: info@mebabrasil.com',
      copyright: '© 2024 Meba Brasil. Tüm hakları saklıdır.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      presence: 'Global Presence',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Global Sugar Supply Chain Excellence',
      subtitle: 'From Brazil to the world, your trusted partner in international sugar trading and logistics solutions.',
      cta: 'Get in Touch',
    },
    marketData: {
      title: 'Live Market Insights',
      subtitle: 'Real-time commodity market data',
      iceLondon: 'ICE London #5',
      iceNy: 'ICE New York #11',
      lastUpdate: 'Last Update',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive solutions at every stage of sugar trading',
      trading: {
        title: 'International Trading',
        description: 'White and raw sugar trading from Brazil to global markets. Competitive pricing and reliable delivery.',
      },
      logistics: {
        title: 'Logistics & Supply Chain',
        description: 'End-to-end logistics management from maritime shipping to customs clearance. On-time delivery guaranteed.',
      },
      quality: {
        title: 'Quality Assurance',
        description: 'Rigorous quality control to ICUMSA standards. Full transparency and international certifications.',
      },
    },
    presence: {
      title: 'Our Global Presence',
      subtitle: 'Sugar exports from Brazil to 4 continents',
      regions: {
        brazil: 'Brazil Production Hub',
        middleEast: 'Middle East & Africa',
        asia: 'Asia-Pacific',
        europe: 'European Markets',
      },
    },
    about: {
      title: 'About Meba Brasil',
      description: 'Meba Brasil establishes strategic partnerships with Brazil\'s leading sugar producers, delivering reliable and transparent trading services worldwide. With high-quality standards and a customer-focused approach, we make a difference in international commodity trading.',
      stats: {
        experience: '15+ Years Experience',
        countries: '40+ Countries',
        capacity: '500K+ Tons/Year',
        clients: '100+ Active Clients',
      },
    },
    footer: {
      company: 'Meba Brasil',
      contact: 'Contact: info@mebabrasil.com',
      copyright: '© 2024 Meba Brasil. All rights reserved.',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      services: 'Serviços',
      presence: 'Presença Global',
      about: 'Sobre',
      contact: 'Contato',
    },
    hero: {
      title: 'Excelência Global na Cadeia de Fornecimento de Açúcar',
      subtitle: 'Do Brasil para o mundo, seu parceiro confiável em soluções de comércio internacional e logística de açúcar.',
      cta: 'Entre em Contato',
    },
    marketData: {
      title: 'Visão do Mercado ao Vivo',
      subtitle: 'Dados do mercado de commodities em tempo real',
      iceLondon: 'ICE Londres #5',
      iceNy: 'ICE Nova York #11',
      lastUpdate: 'Última Atualização',
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções abrangentes em todas as etapas do comércio de açúcar',
      trading: {
        title: 'Comércio Internacional',
        description: 'Comércio de açúcar branco e bruto do Brasil para mercados globais. Preços competitivos e entrega confiável.',
      },
      logistics: {
        title: 'Logística e Cadeia de Suprimentos',
        description: 'Gestão logística de ponta a ponta, desde transporte marítimo até desembaraço aduaneiro. Entrega pontual garantida.',
      },
      quality: {
        title: 'Garantia de Qualidade',
        description: 'Controle rigoroso de qualidade conforme padrões ICUMSA. Total transparência e certificações internacionais.',
      },
    },
    presence: {
      title: 'Nossa Presença Global',
      subtitle: 'Exportações de açúcar do Brasil para 4 continentes',
      regions: {
        brazil: 'Centro de Produção no Brasil',
        middleEast: 'Oriente Médio e África',
        asia: 'Ásia-Pacífico',
        europe: 'Mercados Europeus',
      },
    },
    about: {
      title: 'Sobre a Meba Brasil',
      description: 'A Meba Brasil estabelece parcerias estratégicas com os principais produtores de açúcar do Brasil, oferecendo serviços de comércio confiáveis e transparentes em todo o mundo. Com padrões de alta qualidade e uma abordagem focada no cliente, fazemos a diferença no comércio internacional de commodities.',
      stats: {
        experience: '15+ Anos de Experiência',
        countries: '40+ Países',
        capacity: '500K+ Toneladas/Ano',
        clients: '100+ Clientes Ativos',
      },
    },
    footer: {
      company: 'Meba Brasil',
      contact: 'Contato: info@mebabrasil.com',
      copyright: '© 2024 Meba Brasil. Todos os direitos reservados.',
    },
  },
};
