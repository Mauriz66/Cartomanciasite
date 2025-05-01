// Services data for homepage and other sections
export const services = [
  {
    title: "Jogos de Baralho Cigano",
    description: "Leituras oraculares com o baralho cigano para orientação e clareza",
    price: "A partir de R$107,00",
    image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
    path: "/baralho-cigano"
  },
  {
    title: "Plano Conexão Cigana",
    description: "Plano mensal com benefícios exclusivos e descontos",
    price: "R$49,90/mês",
    image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
    path: "/plano-conexao"
  }
];

// Services details for individual pages
export const baralhoCiganoServices = [
  {
    title: "Jogo de 5 Cartas",
    description: "Leitura detalhada com 5 cartas do baralho cigano para responder uma questão específica",
    price: "R$107,00",
    image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
    path: "/baralho-cigano/5-cartas"
  },
  {
    title: "Jogo de 10 Cartas",
    description: "Leitura completa com 10 cartas do baralho cigano para uma visão mais ampla da situação",
    price: "R$170,00",
    image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
    path: "/baralho-cigano/10-cartas"
  }
];

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
