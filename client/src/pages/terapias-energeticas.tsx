import React from "react";
import { ServiceCard } from "@/components/ui/service-card";

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

export default function TerapiasEnergeticasPage() {
  return (
    <main>
      <div className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-primary/80 to-accent overflow-hidden rounded-b-3xl shadow-lg mb-8">
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">Terapias Energéticas</h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-2">Reiki e Thetahealing para equilíbrio, cura e transformação</p>
        </div>
      </div>
      <section className="max-w-3xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {terapias.map((terapia, idx) => (
          <ServiceCard key={idx} {...terapia} />
        ))}
      </section>
      <section className="max-w-2xl mx-auto px-4 mb-10">
        <div className="bg-[#aafad0]/20 border border-[#aafad0] rounded-xl p-6 flex flex-col items-center text-center">
          <p className="text-[#3be88c] font-bold text-lg mb-2">Assinantes do Plano Conexão Cigana têm 10% de desconto em todos os serviços</p>
        </div>
      </section>
    </main>
  );
} 