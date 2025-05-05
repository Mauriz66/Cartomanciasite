import React from "react";
import { Link } from "wouter";
import { ServiceCard } from "@/components/ui/service-card";

const bannerImage = "/assets/images/image_fx (5).jpg";
const jogo5Image = "/assets/images/image_fx (7).jpg";
const jogo10Image = "/assets/images/image_fx (4).jpg";

const servicosLeituras = [
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

      {/* Cards de Leituras e Jogos */}
      <section className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {servicosLeituras.map((servico, idx) => (
          <ServiceCard key={idx} {...servico} />
        ))}
      </section>

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