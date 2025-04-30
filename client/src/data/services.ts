// Services data for homepage and other sections
export const services = [
  {
    title: "Jogos de Tarot",
    description: "Consultas que revelam insights para momentos específicos ou questões pontuais",
    price: 107,
    image: "https://images.unsplash.com/photo-1514513256673-87bd6a3413a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    path: "/tarot"
  },
  {
    title: "Leituras de Ciclos",
    description: "Análise profunda dos períodos mensais ou anuais para melhor planejamento",
    price: 107,
    image: "https://images.unsplash.com/photo-1620283085439-39620a1e621b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    path: "/leituras"
  },
  {
    title: "Terapias Energéticas",
    description: "Tratamentos que equilibram energias e promovem bem-estar interior",
    price: 250,
    image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    path: "/terapias"
  }
];

// Services details for individual pages
export const tarotServices = {
  jogoDe5Cartas: {
    title: "Jogo de 5 Cartas",
    price: 107,
    discountPrice: 96.30,
    duration: "35 minutos",
    description: "Consulta focada em questões específicas com análise de 5 aspectos principais.",
    features: [
      "5 aspectos específicos da sua questão",
      "Tendências para o futuro próximo",
      "Energias ao seu redor",
      "Conselhos práticos"
    ]
  },
  jogoDe10Cartas: {
    title: "Jogo de 10 Cartas",
    price: 170,
    discountPrice: 153,
    duration: "1 hora",
    description: "Análise completa e detalhada para uma visão abrangente da situação.",
    features: [
      "10 aspectos detalhados da sua situação",
      "Análise de tendências a médio prazo",
      "Padrões energéticos mais profundos",
      "Bloqueios e potenciais",
      "Orientações detalhadas para os próximos passos"
    ]
  }
};

export const leituraServices = {
  leituraMensal: {
    title: "Leitura Mensal",
    price: 107,
    discountPrice: 96.30,
    duration: "40 minutos",
    description: "Panorama completo das energias e tendências para os próximos 30 dias.",
    features: [
      "Análise geral do mês",
      "Aspectos profissionais",
      "Situação financeira",
      "Área emocional",
      "Relacionamentos amorosos",
      "Conselho especial"
    ]
  },
  leituraAniversario: {
    title: "Leitura de Aniversário",
    price: 170,
    discountPrice: 153,
    duration: "1:20 horas",
    description: "Mapeamento completo do seu novo ciclo anual, com análise dos 12 meses.",
    features: [
      "Análise completa do novo ciclo",
      "Tendências para os 12 meses",
      "Aspectos profissionais e financeiros",
      "Relacionamentos e vida social",
      "Saúde e bem-estar",
      "Crescimento pessoal e espiritual",
      "Desafios e oportunidades",
      "Conselho para o novo ciclo"
    ]
  }
};

export const terapiaServices = {
  thetahealing: {
    title: "Thetahealing",
    price: 350,
    discountPrice: 315,
    duration: "1:30 horas",
    description: "Terapia para reprogramação de crenças limitantes e liberação de bloqueios emocionais.",
    features: [
      "Identificação de crenças limitantes",
      "Reprogramação de padrões negativos",
      "Cura energética em nível profundo",
      "Liberação de bloqueios emocionais",
      "Conexão com sua essência espiritual",
      "Transformação de traumas e memórias"
    ]
  },
  reiki: {
    title: "Reiki",
    price: 250,
    discountPrice: 225,
    duration: "1:30 horas",
    description: "Terapia energética para harmonização, equilíbrio e bem-estar.",
    features: [
      "Equilíbrio dos chakras",
      "Harmonização energética",
      "Relaxamento profundo",
      "Redução do estresse e ansiedade",
      "Aumento da vitalidade",
      "Suporte ao bem-estar físico e emocional"
    ]
  }
};
