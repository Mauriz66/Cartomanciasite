import React from "react";
import { Link } from "wouter";

const bannerImage = "/assets/images/image_fx (5).jpg";
const jogo5Image = "/assets/images/image_fx (7).jpg";
const jogo10Image = "/assets/images/image_fx (4).jpg";

export default function BaralhoCiganoPage() {
  return (
    <main>
      {/* Banner Principal */}
      <div className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-primary/80 to-accent overflow-hidden rounded-b-3xl shadow-lg mb-8">
        <img
          src={bannerImage}
          alt="Mesa com cartas dispostas em leque"
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">Jogos de Baralho Cigano</h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-2">Leituras oraculares para orientação e clareza em sua jornada</p>
        </div>
      </div>

      {/* Informações Gerais */}
      <section className="max-w-3xl mx-auto px-4 mb-10">
        <h2 className="text-xl font-semibold text-primary mb-3">Informações Gerais dos Atendimentos</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>✓ Todos os atendimentos via WhatsApp</li>
          <li>✓ Horário marcado e pagamento antecipado</li>
          <li>✓ Necessário estar online no horário agendado</li>
          <li>✓ Envio de fotos e áudios para consulta posterior</li>
        </ul>
      </section>

      {/* Cards de Opções */}
      <section className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Jogo de 5 Cartas */}
        <div className="bg-[#241a3e] border border-[#3a2d5c] rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img src={jogo5Image} alt="Jogo de 5 Cartas" className="w-full h-40 object-cover" />
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-white text-lg font-bold mb-1 border-b-2 border-[#ffe36e] inline-block pb-1">Jogo de 5 Cartas</h3>
            <p className="text-[#e0d6ff] text-sm mb-2">Valor: <span className="text-[#ffe36e] font-bold">R$107</span> <span className="text-[#3be88c] italic">(R$96,30 para assinantes)</span></p>
            <p className="text-[#e0d6ff] text-sm mb-2">Duração: 35 minutos</p>
            <p className="text-[#e0d6ff] text-sm mb-4">Ideal para: Questões pontuais e decisões imediatas</p>
            <Link href="/baralho-cigano/5-cartas">
              <a className="w-full bg-gradient-to-r from-[#ffe36e] to-[#ffb800] text-[#241a3e] font-bold rounded-full py-3 text-base mt-auto shadow hover:from-[#ffb800] hover:to-[#ffe36e] transition text-center block">Ver Detalhes</a>
            </Link>
          </div>
        </div>
        {/* Jogo de 10 Cartas */}
        <div className="bg-[#241a3e] border border-[#3a2d5c] rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img src={jogo10Image} alt="Jogo de 10 Cartas" className="w-full h-40 object-cover" />
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-white text-lg font-bold mb-1 border-b-2 border-[#ffe36e] inline-block pb-1">Jogo de 10 Cartas</h3>
            <p className="text-[#e0d6ff] text-sm mb-2">Valor: <span className="text-[#ffe36e] font-bold">R$170</span> <span className="text-[#3be88c] italic">(R$153 para assinantes)</span></p>
            <p className="text-[#e0d6ff] text-sm mb-2">Duração: 1 hora</p>
            <p className="text-[#e0d6ff] text-sm mb-4">Ideal para: Análise profunda e visão completa</p>
            <Link href="/baralho-cigano/10-cartas">
              <a className="w-full bg-gradient-to-r from-[#ffe36e] to-[#ffb800] text-[#241a3e] font-bold rounded-full py-3 text-base mt-auto shadow hover:from-[#ffb800] hover:to-[#ffe36e] transition text-center block">Ver Detalhes</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Tabela Comparativa */}
      <section className="max-w-3xl mx-auto px-4 mb-10">
        <h2 className="text-xl font-semibold text-primary mb-3">Tabela Comparativa</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-[#3a2d5c] rounded-lg overflow-hidden">
            <thead className="bg-[#3a2d5c] text-white">
              <tr>
                <th className="py-2 px-3">Aspecto</th>
                <th className="py-2 px-3">Jogo 5 Cartas</th>
                <th className="py-2 px-3">Jogo 10 Cartas</th>
              </tr>
            </thead>
            <tbody className="bg-[#241a3e] text-[#e0d6ff]">
              <tr>
                <td className="py-2 px-3">Duração</td>
                <td className="py-2 px-3">35 minutos</td>
                <td className="py-2 px-3">1 hora</td>
              </tr>
              <tr>
                <td className="py-2 px-3">Profundidade</td>
                <td className="py-2 px-3">Objetiva</td>
                <td className="py-2 px-3">Completa</td>
              </tr>
              <tr>
                <td className="py-2 px-3">Aspectos analisados</td>
                <td className="py-2 px-3">5 pontos</td>
                <td className="py-2 px-3">10 pontos</td>
              </tr>
              <tr>
                <td className="py-2 px-3">Valor normal</td>
                <td className="py-2 px-3">R$107</td>
                <td className="py-2 px-3">R$170</td>
              </tr>
              <tr>
                <td className="py-2 px-3">Valor assinante</td>
                <td className="py-2 px-3">R$96,30</td>
                <td className="py-2 px-3">R$153</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Box de desconto para assinantes */}
      <section className="max-w-2xl mx-auto px-4 mb-10">
        <div className="bg-[#aafad0]/20 border border-[#aafad0] rounded-xl p-6 flex flex-col items-center text-center">
          <p className="text-[#3be88c] font-bold text-lg mb-2">Assinantes do Plano Conexão Cigana têm 10% de desconto em todos os serviços</p>
          <Link href="/plano-conexao">
            <a className="bg-gradient-to-r from-[#ffe36e] to-[#ffb800] text-[#241a3e] font-bold rounded-full py-2 px-6 text-base shadow hover:from-[#ffb800] hover:to-[#ffe36e] transition">Conhecer o Plano</a>
          </Link>
        </div>
      </section>

      {/* CTA para agendamento */}
      <section className="max-w-2xl mx-auto px-4 mb-16 text-center">
        <Link href="https://api.whatsapp.com/send/?phone=5527988336689&text=Ol%C3%A1!+Gostaria+de+agendar+um+Jogo+de+Baralho+Cigano.+Poderia+me+informar+os+hor%C3%A1rios+dispon%C3%ADveis?+Obrigado&type=phone_number&app_absent=0">
          <a className="inline-block bg-[#3be88c] text-[#241a3e] font-bold rounded-full py-3 px-8 text-lg shadow hover:bg-[#ffe36e] hover:text-[#241a3e] transition">Agendar Atendimento</a>
        </Link>
      </section>
    </main>
  );
} 