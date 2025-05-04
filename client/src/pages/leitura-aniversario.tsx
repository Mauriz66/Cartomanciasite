import React from "react";
import { Link } from "wouter";

const bannerImage = "/assets/images/image_fx (9).jpg";

export default function LeituraAniversarioPage() {
  return (
    <main>
      {/* Banner */}
      <div className="relative h-56 md:h-72 flex items-center justify-center bg-gradient-to-br from-primary/80 to-accent overflow-hidden rounded-b-3xl shadow-lg mb-8">
        <img src={bannerImage} alt="Símbolos de renovação e ciclos" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">Leitura de Aniversário</h1>
          <p className="text-lg text-white/90 font-light mb-2">Mapa completo do seu novo ciclo pessoal e desafios do ano</p>
          <p className="text-[#ffe36e] font-bold text-lg">R$170 <span className="text-[#3be88c] italic">(R$153 para assinantes)</span></p>
          <p className="text-[#e0d6ff] text-sm">Duração: 1:20h</p>
        </div>
      </div>

      {/* Mapa completo do novo ciclo */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">Mapa completo do novo ciclo (10 aspectos)</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Desafios do ano - O que será superado</li>
          <li>Orientação espiritual - Mensagens para o ciclo</li>
          <li>Questões cármicas - Lições a serem aprendidas</li>
          <li>Energia 1º semestre - Primeiros 6 meses</li>
          <li>Energia 2º semestre - Últimos 6 meses</li>
          <li>Facilitadores - O que ajuda seu progresso</li>
          <li>Autopercepção - Como você se sente</li>
          <li>Imagem externa - Como será visto</li>
          <li>Medos e esperanças - Emoções do ciclo</li>
          <li>Resultados do ano - Conquistas possíveis</li>
        </ul>
      </section>

      {/* Momento ideal */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">Momento ideal</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Até 30 dias após o aniversário</li>
          <li>Pode ser um presente especial</li>
          <li>Planejamento anual completo</li>
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
        <Link href="https://api.whatsapp.com/send/?phone=5527988336689&text=Ol%C3%A1!+Gostaria+de+agendar+uma+Leitura+de+Aniversário.+Poderia+me+informar+os+hor%C3%A1rios+dispon%C3%ADveis?+Obrigado&type=phone_number&app_absent=0">
          <a className="inline-block bg-[#3be88c] text-[#241a3e] font-bold rounded-full py-3 px-8 text-lg shadow hover:bg-[#ffe36e] hover:text-[#241a3e] transition">Agendar Leitura de Aniversário</a>
        </Link>
      </section>
    </main>
  );
} 