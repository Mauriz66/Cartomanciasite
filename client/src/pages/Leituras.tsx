import { PriceCard } from "@/components/ui/price-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Faq } from "@/components/ui/faq";
import { Link } from "wouter";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { whatsappLinks } from "@/data/whatsapp-links";

export default function Leituras() {
  const leituraServicos = [
    {
      title: "Leitura Mensal",
      price: 107,
      discountPrice: 96.30,
      duration: "40 minutos",
      image: "https://images.unsplash.com/photo-1572567844508-92fab8873270?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
      features: [
        "Análise geral do mês",
        "Aspectos profissionais",
        "Situação financeira",
        "Área emocional",
        "Relacionamentos amorosos",
        "Conselho especial"
      ],
      whatsappLink: whatsappLinks.leituraMensal
    },
    {
      title: "Leitura de Aniversário",
      price: 170,
      discountPrice: 153,
      duration: "1:20 horas",
      image: "https://images.unsplash.com/photo-1516450137517-f5f1bb244d7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
      features: [
        "Análise completa do novo ciclo",
        "Tendências para os 12 meses",
        "Aspectos profissionais e financeiros",
        "Relacionamentos e vida social",
        "Saúde e bem-estar",
        "Crescimento pessoal e espiritual",
        "Desafios e oportunidades",
        "Conselho para o novo ciclo"
      ],
      whatsappLink: whatsappLinks.leituraAniversario
    }
  ];

  return (
    <main>
      {/* Hero Banner */}
      <div className="relative h-[50vh] overflow-hidden bg-gradient-to-br from-primary/80 to-accent flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800&q=80"
            alt="Oracle reading cards"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Leituras de Ciclos
          </h1>
          <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
            Compreenda os períodos da sua vida e planeje-se para o sucesso
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold mb-6 text-primary dark:text-secondary">
            Leituras para Momentos de Transição
          </h2>
          <p className="text-lg mb-6 text-muted-foreground">
            As leituras de ciclos são focadas em períodos específicos da sua vida, como meses ou anos completos.
            Estas análises trazem uma visão abrangente dos diferentes aspectos da sua vida durante este período,
            permitindo que você se prepare e aproveite melhor as energias disponíveis.
          </p>
          <p className="text-lg text-muted-foreground">
            Escolha entre a Leitura Mensal para orientação a curto prazo ou a Leitura de Aniversário
            para uma análise completa do seu novo ciclo anual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {leituraServicos.map((servico, index) => (
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
            Compare as Leituras
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b dark:border-muted">
                  <th className="text-left py-3 px-4 text-primary dark:text-secondary">Características</th>
                  <th className="text-center py-3 px-4 text-primary dark:text-secondary">Leitura Mensal</th>
                  <th className="text-center py-3 px-4 text-primary dark:text-secondary">Leitura de Aniversário</th>
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
                  <td className="text-center py-3 px-4 text-muted-foreground">40 minutos</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">1:20 horas</td>
                </tr>
                <tr className="border-b dark:border-muted">
                  <td className="py-3 px-4 text-muted-foreground">Período analisado</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">30 dias</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">12 meses</td>
                </tr>
                <tr className="border-b dark:border-muted">
                  <td className="py-3 px-4 text-muted-foreground">Áreas analisadas</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">6 áreas principais</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">10 aspectos detalhados</td>
                </tr>
                <tr className="border-b dark:border-muted">
                  <td className="py-3 px-4 text-muted-foreground">Ideal para</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">Planejamento mensal</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">Planejamento anual</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Preço para assinantes do Plano Conexão Cigana</p>
        </div>
        
        {/* Benefits */}
        <div className="bg-card rounded-xl shadow-lg p-8 mb-16">
          <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
            Benefícios das Leituras de Ciclos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-secondary mr-4 mt-1"><i className="fas fa-calendar-alt text-xl"></i></div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Planejamento Estratégico</h4>
                <p className="text-muted-foreground">Conheça as tendências e planeje ações nos momentos mais propícios.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-secondary mr-4 mt-1"><i className="fas fa-lightbulb text-xl"></i></div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Autoconhecimento</h4>
                <p className="text-muted-foreground">Entenda seus padrões e ciclos pessoais para crescimento consciente.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-secondary mr-4 mt-1"><i className="fas fa-compass text-xl"></i></div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Orientação nos Momentos Decisivos</h4>
                <p className="text-muted-foreground">Tenha clareza para tomar decisões importantes em períodos específicos.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-secondary mr-4 mt-1"><i className="fas fa-balance-scale text-xl"></i></div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Equilíbrio Energético</h4>
                <p className="text-muted-foreground">Aproveite melhor as energias disponíveis em cada período da sua vida.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
            O Que Dizem Sobre as Leituras
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.leituras.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
              />
            ))}
          </div>
        </div>
        
        {/* FAQ */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
            Perguntas Frequentes
          </h3>
          <Faq items={faqs.leituras} />
        </div>
        
        {/* Promotion */}
        <div className="gradient-primary-light rounded-2xl p-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-4 text-primary dark:text-secondary">
            Economize 10% em Todas as Leituras
          </h3>
          <p className="mb-6 max-w-2xl mx-auto text-muted-foreground">
            Assine o Plano Conexão Cigana por apenas R$49,90/mês e ganhe 10% de desconto em todas 
            as leituras, além de 5 perguntas mensais garantidas e outros benefícios exclusivos.
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
