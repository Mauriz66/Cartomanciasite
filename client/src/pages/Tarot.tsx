import { PriceCard } from "@/components/ui/price-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Faq } from "@/components/ui/faq";
import { Link } from "wouter";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { whatsappLinks } from "@/data/whatsapp-links";

export default function Tarot() {
  const tarotServicos = [
    {
      title: "Jogo de 5 Cartas",
      price: 107,
      discountPrice: 96.30,
      duration: "35 minutos",
      image: "https://images.unsplash.com/photo-1508701963691-88a86f236097?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
      features: [
        "5 aspectos específicos da sua questão",
        "Tendências para o futuro próximo",
        "Energias ao seu redor",
        "Conselhos práticos"
      ],
      whatsappLink: whatsappLinks.jogoDe5Cartas
    },
    {
      title: "Jogo de 10 Cartas",
      price: 170,
      discountPrice: 153,
      duration: "1 hora",
      image: "https://images.unsplash.com/photo-1634729108817-c535a464ceb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
      features: [
        "10 aspectos detalhados da sua situação",
        "Análise de tendências a médio prazo",
        "Padrões energéticos mais profundos",
        "Bloqueios e potenciais",
        "Orientações detalhadas para os próximos passos"
      ],
      whatsappLink: whatsappLinks.jogoDe10Cartas
    }
  ];

  return (
    <main>
      {/* Hero Banner */}
      <div className="relative h-[50vh] overflow-hidden bg-gradient-to-br from-primary/80 to-accent flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1572573515227-14df72060f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800&q=80"
            alt="Tarot cards"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Jogos de Tarot
          </h1>
          <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
            Descubra insights valiosos através das cartas do baralho cigano
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold mb-6 text-primary dark:text-secondary">
            Orientação e Clareza através das Cartas
          </h2>
          <p className="text-lg mb-6 text-muted-foreground">
            As leituras de tarot são realizadas com o baralho cigano, que oferece uma 
            perspectiva única e profunda sobre suas questões. Todas as consultas são realizadas 
            online via WhatsApp, com o mesmo poder e precisão de uma consulta presencial.
          </p>
          <p className="text-lg text-muted-foreground">
            Escolha entre o Jogo de 5 Cartas para questões específicas ou o Jogo de 10 Cartas 
            para uma análise mais abrangente da sua situação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tarotServicos.map((servico, index) => (
            <PriceCard
              key={index}
              title={servico.title}
              price={servico.price}
              discountPrice={servico.discountPrice}
              duration={servico.duration}
              image={servico.image}
              features={servico.features}
              whatsappLink={servico.whatsappLink}
            />
          ))}
        </div>
        
        {/* Comparison */}
        <div className="bg-card rounded-xl shadow-lg p-8 mb-16">
          <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
            Compare os Jogos
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b dark:border-muted">
                  <th className="text-left py-3 px-4 text-primary dark:text-secondary">Características</th>
                  <th className="text-center py-3 px-4 text-primary dark:text-secondary">Jogo de 5 Cartas</th>
                  <th className="text-center py-3 px-4 text-primary dark:text-secondary">Jogo de 10 Cartas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-muted">
                  <td className="py-3 px-4 text-muted-foreground">Preço</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">R$107 (R$96,30*)</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">R$170 (R$153*)</td>
                </tr>
                <tr className="border-b dark:border-muted">
                  <td className="py-3 px-4 text-muted-foreground">Duração</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">35 minutos</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">1 hora</td>
                </tr>
                <tr className="border-b dark:border-muted">
                  <td className="py-3 px-4 text-muted-foreground">Aspectos analisados</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">5 aspectos</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">10 aspectos</td>
                </tr>
                <tr className="border-b dark:border-muted">
                  <td className="py-3 px-4 text-muted-foreground">Profundidade da análise</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">Objetiva</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">Detalhada</td>
                </tr>
                <tr className="border-b dark:border-muted">
                  <td className="py-3 px-4 text-muted-foreground">Ideal para</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">Questões específicas</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">Visão abrangente</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Preço para assinantes do Plano Conexão Cigana</p>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
            O Que Dizem Sobre as Leituras
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.tarot.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
              />
            ))}
          </div>
        </div>
        
        {/* How It Works */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
            Como Funciona uma Consulta
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 mx-auto bg-primary dark:bg-secondary rounded-full flex items-center justify-center mb-4">
                <span className="text-white dark:text-gray-900 text-xl font-bold">1</span>
              </div>
              <h4 className="font-semibold text-primary dark:text-secondary mb-3">Agendamento</h4>
              <p className="text-muted-foreground text-sm">
                Entre em contato pelo WhatsApp para agendar sua consulta.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 mx-auto bg-primary dark:bg-secondary rounded-full flex items-center justify-center mb-4">
                <span className="text-white dark:text-gray-900 text-xl font-bold">2</span>
              </div>
              <h4 className="font-semibold text-primary dark:text-secondary mb-3">Preparação</h4>
              <p className="text-muted-foreground text-sm">
                Envie suas questões específicas antes da consulta.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 mx-auto bg-primary dark:bg-secondary rounded-full flex items-center justify-center mb-4">
                <span className="text-white dark:text-gray-900 text-xl font-bold">3</span>
              </div>
              <h4 className="font-semibold text-primary dark:text-secondary mb-3">Leitura</h4>
              <p className="text-muted-foreground text-sm">
                No horário marcado, receba a leitura por áudio ou texto via WhatsApp.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 mx-auto bg-primary dark:bg-secondary rounded-full flex items-center justify-center mb-4">
                <span className="text-white dark:text-gray-900 text-xl font-bold">4</span>
              </div>
              <h4 className="font-semibold text-primary dark:text-secondary mb-3">Esclarecimentos</h4>
              <p className="text-muted-foreground text-sm">
                Tempo para perguntas e esclarecimentos sobre a leitura.
              </p>
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
            Perguntas Frequentes
          </h3>
          <Faq items={faqs.tarot} />
        </div>
        
        {/* Promotion */}
        <div className="gradient-primary-light rounded-2xl p-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-4 text-primary dark:text-secondary">
            Economize 10% em Todas as Consultas
          </h3>
          <p className="mb-6 max-w-2xl mx-auto text-muted-foreground">
            Assine o Plano Conexão Cigana por apenas R$49,90/mês e ganhe 10% de desconto em todas 
            as consultas, além de 5 perguntas mensais garantidas e outros benefícios exclusivos.
          </p>
          <Link href="/plano-conexao">
            <a className="inline-block bg-secondary hover:bg-secondary/90 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors">
              Conhecer o Plano
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
