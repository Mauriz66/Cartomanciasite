import React from "react";
import { Link } from "wouter";

const bannerImage = "/assets/images/image_fx (7).jpg";

export default function Jogo5CartasPage() {
  return (
    <main>
      {/* Banner */}
      <div className="relative h-56 md:h-72 flex items-center justify-center bg-gradient-to-br from-primary/80 to-accent overflow-hidden rounded-b-3xl shadow-lg mb-8">
        <img src={bannerImage} alt="5 cartas dispostas em cruz" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">Jogo de 5 Cartas</h1>
          <p className="text-lg text-white/90 font-light mb-2">Leitura objetiva para decisões rápidas e clareza no momento</p>
          <p className="text-[#ffe36e] font-bold text-lg">R$107 <span className="text-[#3be88c] italic">(R$96,30 para assinantes)</span></p>
          <p className="text-[#e0d6ff] text-sm">Duração: 35 minutos</p>
        </div>
      </div>

      {/* O que será analisado */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">O que será analisado</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>O assunto central - Problema ou desafio a ser superado</li>
          <li>Fator importante - O que deve ser levado em consideração</li>
          <li>Sua tarefa - O que precisa ser cumprido</li>
          <li>Passado recente - Influências que ainda atuam</li>
          <li>Futuro imediato - Possíveis conquistas e resultados</li>
        </ul>
      </section>

      {/* Para quem é indicado */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">Para quem é indicado</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Questões específicas e pontuais</li>
          <li>Decisões que precisam ser tomadas rapidamente</li>
          <li>Orientação objetiva para situações atuais</li>
          <li>Clareza sobre próximos passos</li>
        </ul>
      </section>

      {/* Como funciona o atendimento */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">Como funciona o atendimento</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Agendamento via WhatsApp</li>
          <li>Pagamento antecipado</li>
          <li>No horário marcado, envio das fotos das cartas</li>
          <li>Áudio explicativo detalhado de cada posição</li>
          <li>Material fica disponível para consultas futuras</li>
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
        <Link href="https://api.whatsapp.com/send/?phone=5527988336689&text=Ol%C3%A1!+Gostaria+de+agendar+um+Jogo+de+5+Cartas+de+Baralho+Cigano.+Poderia+me+informar+os+hor%C3%A1rios+dispon%C3%ADveis?+Obrigado&type=phone_number&app_absent=0">
          <a className="inline-block bg-[#3be88c] text-[#241a3e] font-bold rounded-full py-3 px-8 text-lg shadow hover:bg-[#ffe36e] hover:text-[#241a3e] transition">Agendar Jogo de 5 Cartas</a>
        </Link>
      </section>
    </main>
  );
} 