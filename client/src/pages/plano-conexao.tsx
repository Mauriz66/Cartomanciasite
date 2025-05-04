import React from "react";
import { Link } from "wouter";

const bannerImage = "/assets/images/image_fx (6).jpg";

export default function PlanoConexaoPage() {
  return (
    <main>
      {/* Banner */}
      <div className="relative h-56 md:h-72 flex items-center justify-center bg-gradient-to-br from-primary/80 to-accent overflow-hidden rounded-b-3xl shadow-lg mb-8">
        <img src={bannerImage} alt="Imagem mística do plano" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">Plano Conexão Cigana</h1>
          <p className="text-lg text-white/90 font-light mb-2">Plano mensal com benefícios exclusivos e descontos</p>
          <p className="text-[#ffe36e] font-bold text-lg">R$49,90/mês</p>
          <p className="text-[#3be88c] text-base font-semibold italic">10% de desconto em todos os serviços</p>
        </div>
      </div>

      {/* Benefícios do plano */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">Benefícios do Plano</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>5 perguntas mensais garantidas</li>
          <li>10% de desconto em todos os serviços</li>
          <li>Pergunta bônus no mês de aniversário</li>
          <li>Prioridade na fila de atendimento</li>
        </ul>
      </section>

      {/* Vantagens para assinantes */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">Vantagens para Assinantes</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Economia em todos os atendimentos</li>
          <li>Atendimento prioritário</li>
          <li>Descontos cumulativos com promoções</li>
          <li>Acesso a conteúdos e dicas exclusivas</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-4 mb-16 text-center">
        <Link href="https://api.whatsapp.com/send/?phone=5527988336689&text=Ol%C3%A1!+Gostaria+de+assinar+o+Plano+Conexão+Cigana.+Poderia+me+informar+os+detalhes?+Obrigado&type=phone_number&app_absent=0">
          <a className="inline-block bg-[#ffe36e] text-[#241a3e] font-bold rounded-full py-3 px-8 text-lg shadow hover:bg-[#ffb800] hover:text-[#241a3e] transition">Assinar Agora</a>
        </Link>
      </section>
    </main>
  );
} 