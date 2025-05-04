import React from "react";
import { Link } from "wouter";

const bannerImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";

export default function ThetahealingPage() {
  return (
    <main>
      {/* Banner */}
      <div className="relative h-56 md:h-72 flex items-center justify-center bg-gradient-to-br from-primary/80 to-accent overflow-hidden rounded-b-3xl shadow-lg mb-8">
        <img src={bannerImage} alt="Ondas cerebrais e energia" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">Thetahealing</h1>
          <p className="text-lg text-white/90 font-light mb-2">Terapia profunda para transformar crenças limitantes</p>
          <p className="text-[#ffe36e] font-bold text-lg">R$350 <span className="text-[#3be88c] italic">(R$315 para assinantes)</span></p>
          <p className="text-[#e0d6ff] text-sm">Duração: 1:30h por vídeo</p>
        </div>
      </div>

      {/* O que é Thetahealing */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">O que é Thetahealing</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Terapia na onda cerebral theta</li>
          <li>Acesso ao subconsciente (88% da mente)</li>
          <li>Ferramenta "digging" para encontrar crenças limitantes</li>
          <li>Transformação profunda de padrões</li>
        </ul>
      </section>

      {/* Processo da sessão */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">Processo da sessão</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Meditação guiada - Alcançar estado theta</li>
          <li>Leitura intuitiva - Análise do campo energético</li>
          <li>Identificação - Descoberta de crenças limitantes</li>
          <li>Transformação - Trabalho sobre as crenças</li>
        </ul>
      </section>

      {/* Situações trabalhadas */}
      <section className="max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">Situações trabalhadas</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Limpeza de mágoas antigas</li>
          <li>Liberação de culpas e medos</li>
          <li>Dissolução de ressentimentos</li>
          <li>Expansão da consciência</li>
          <li>Manifestação de sonhos</li>
          <li>Criação de abundância</li>
          <li>Divórcios energéticos</li>
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
        <Link href="https://api.whatsapp.com/send/?phone=5527988336689&text=Ol%C3%A1!+Gostaria+de+agendar+uma+sessão+de+Thetahealing.+Poderia+me+informar+os+hor%C3%A1rios+dispon%C3%ADveis?+Obrigado&type=phone_number&app_absent=0">
          <a className="inline-block bg-[#3be88c] text-[#241a3e] font-bold rounded-full py-3 px-8 text-lg shadow hover:bg-[#ffe36e] hover:text-[#241a3e] transition">Agendar Thetahealing</a>
        </Link>
      </section>
    </main>
  );
} 