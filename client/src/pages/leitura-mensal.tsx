import React from "react";
import { Link } from "wouter";

const bannerImage = "/assets/images/image_fx (8).jpg";

export default function LeituraMensalPage() {
  return (
    <main>
      {/* Banner */}
      <div className="relative h-56 md:h-72 flex items-center justify-center bg-gradient-to-br from-primary/80 to-accent overflow-hidden rounded-b-3xl shadow-lg mb-8">
        <img src={bannerImage} alt="Calendário lunar com símbolos místicos" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">Leitura Mensal</h1>
          <p className="text-lg text-white/90 font-light mb-2">Previsões e orientações para o mês em todas as áreas da vida</p>
          <p className="text-[#ffe36e] font-bold text-lg">R$107 <span className="text-[#3be88c] italic">(R$96,30 para assinantes)</span></p>
          <p className="text-[#e0d6ff] text-sm">Duração: 40 minutos</p>
        </div>
      </div>

      {/* Áreas analisadas */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">Áreas analisadas</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Energia Geral - Vibração predominante do mês</li>
          <li>Profissional - Oportunidades e desafios no trabalho</li>
          <li>Financeiro - Fluxo de prosperidade</li>
          <li>Emocional - Estado interno e equilíbrio</li>
          <li>Amor - Relacionamentos e vida afetiva</li>
          <li>Conselho Espiritual - Orientação dos guias</li>
        </ul>
      </section>

      {/* Benefícios da leitura mensal */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">Benefícios da leitura mensal</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Planejamento consciente do mês</li>
          <li>Aproveitamento de oportunidades</li>
          <li>Preparação para desafios</li>
          <li>Alinhamento com as energias do período</li>
        </ul>
      </section>

      {/* Box de desconto para assinantes */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <div className="bg-[#aafad0]/20 border border-[#aafad0] rounded-xl p-6 flex flex-col items-center text-center">
          <p className="text-[#3be88c] font-bold text-lg mb-2">Assinantes do Plano Conexão Cigana têm 10% de desconto em todos os serviços</p>
          <Link href="/plano-conexao">
            <a className="bg-gradient-to-r from-[#ffe36e] to-[#ffb800] text-[#241a3e] font-bold rounded-full py-2 px-6 text-base shadow hover:from-[#ffb800] hover:to-[#ffe36e] transition">Conhecer o Plano</a>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-4 mb-16 text-center">
        <Link href="https://api.whatsapp.com/send/?phone=5527988336689&text=Ol%C3%A1!+Gostaria+de+agendar+uma+Leitura+Mensal.+Poderia+me+informar+os+hor%C3%A1rios+dispon%C3%ADveis?+Obrigado&type=phone_number&app_absent=0">
          <a className="inline-block bg-[#3be88c] text-[#241a3e] font-bold rounded-full py-3 px-8 text-lg shadow hover:bg-[#ffe36e] hover:text-[#241a3e] transition">Agendar Leitura Mensal</a>
        </Link>
      </section>
    </main>
  );
} 