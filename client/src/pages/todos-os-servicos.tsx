import React from "react";
import { ServiceCard } from "@/components/ui/service-card";

const leituras = [
  {
    title: "Jogo de 5 Cartas",
    subtitle: "Leitura objetiva para decisões rápidas e clareza no momento",
    price: "R$107",
    memberPrice: "R$96,30 para assinantes",
    image: "/assets/images/image_fx (7).jpg",
    path: "/baralho-cigano/5-cartas",
  },
  {
    title: "Jogo de 10 Cartas",
    subtitle: "Leitura completa e aprofundada da sua situação atual",
    price: "R$170",
    memberPrice: "R$153 para assinantes",
    image: "/assets/images/image_fx (4).jpg",
    path: "/baralho-cigano/10-cartas",
  },
  {
    title: "Leitura Mensal",
    subtitle: "Previsões e orientações para o mês em todas as áreas da vida",
    price: "R$107",
    memberPrice: "R$96,30 para assinantes",
    image: "/assets/images/image_fx (8).jpg",
    path: "/leitura-mensal",
  },
  {
    title: "Leitura de Aniversário",
    subtitle: "Mapa completo do seu novo ciclo pessoal e desafios do ano",
    price: "R$170",
    memberPrice: "R$153 para assinantes",
    image: "/assets/images/image_fx (9).jpg",
    path: "/leitura-aniversario",
  },
];

const terapias = [
  {
    title: "Reiki",
    subtitle: "Alinhamento energético para equilíbrio e bem-estar integral.",
    price: "R$250",
    memberPrice: "R$225 para assinantes",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80",
    path: "/reiki",
  },
  {
    title: "Thetahealing",
    subtitle: "Terapia profunda para transformar crenças limitantes.",
    price: "R$350",
    memberPrice: "R$315 para assinantes",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    path: "/thetahealing",
  },
];

export default function TodosOsServicosPage() {
  return (
    <main>
      <div className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-primary/80 to-accent overflow-hidden rounded-b-3xl shadow-lg mb-8">
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">Todos os Serviços</h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-2">Confira todos os atendimentos disponíveis: leituras, jogos de cartas e terapias energéticas</p>
        </div>
      </div>
      <section className="max-w-5xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Leituras e Jogos de Cartas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {leituras.map((servico, idx) => (
            <ServiceCard key={idx} {...servico} />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-primary mb-6 mt-12">Terapias Energéticas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {terapias.map((servico, idx) => (
            <ServiceCard key={idx} {...servico} />
          ))}
        </div>
      </section>
      <section className="max-w-2xl mx-auto px-4 mb-10">
        <div className="bg-[#aafad0]/20 border border-[#aafad0] rounded-xl p-6 flex flex-col items-center text-center">
          <p className="text-[#3be88c] font-bold text-lg mb-2">Assinantes do Plano Conexão Cigana têm 10% de desconto em todos os serviços</p>
        </div>
      </section>
    </main>
  );
} 