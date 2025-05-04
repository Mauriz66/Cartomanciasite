import React from "react";
import { Link } from "wouter";

const bannerImage = "/assets/images/image_fx (4).jpg";

export default function Jogo10CartasPage() {
  return (
    <main>
      {/* Banner */}
      <div className="relative h-56 md:h-72 flex items-center justify-center bg-gradient-to-br from-primary/80 to-accent overflow-hidden rounded-b-3xl shadow-lg mb-8">
        <img src={bannerImage} alt="10 cartas em disposição especial" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">Jogo de 10 Cartas</h1>
          <p className="text-lg text-white/90 font-light mb-2">Leitura completa e aprofundada da sua situação atual</p>
          <p className="text-[#ffe36e] font-bold text-lg">R$170 <span className="text-[#3be88c] italic">(R$153 para assinantes)</span></p>
          <p className="text-[#e0d6ff] text-sm">Duração: 1 hora</p>
        </div>
      </div>

      {/* O que será analisado */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">O que será analisado</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Assunto principal - Problema ou desafio central</li>
          <li>Orientação Espiritual - Mensagens dos guias</li>
          <li>Passado Cármico - Influências de outras vidas</li>
          <li>Energia do passado recente - O que ainda influencia</li>
          <li>Energia do futuro próximo - Tendências em formação</li>
          <li>Ajudas disponíveis - Recursos para seu progresso</li>
          <li>Autopercepção - Como você se vê na situação</li>
          <li>Percepção externa - Como outros te enxergam</li>
          <li>Esperanças e medos - Emoções envolvidas</li>
          <li>Panorama geral - Resultados possíveis</li>
        </ul>
      </section>

      {/* Para quem é indicado */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">Para quem é indicado</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Questões complexas que exigem análise profunda</li>
          <li>Momentos de grandes decisões</li>
          <li>Compreensão ampla de situações</li>
          <li>Busca por orientação espiritual detalhada</li>
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
        <Link href="https://api.whatsapp.com/send/?phone=5527988336689&text=Ol%C3%A1!+Gostaria+de+agendar+um+Jogo+de+10+Cartas+de+Baralho+Cigano.+Poderia+me+informar+os+hor%C3%A1rios+dispon%C3%ADveis?+Obrigado&type=phone_number&app_absent=0">
          <a className="inline-block bg-[#3be88c] text-[#241a3e] font-bold rounded-full py-3 px-8 text-lg shadow hover:bg-[#ffe36e] hover:text-[#241a3e] transition">Agendar Jogo de 10 Cartas</a>
        </Link>
      </section>
    </main>
  );
} 