import { PriceCard } from "@/components/ui/price-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Faq } from "@/components/ui/faq";
import { Link } from "wouter";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { whatsappLinks } from "@/data/whatsapp-links";

export default function Terapias() {
  const terapiaServicos = [
    {
      title: "Thetahealing",
      price: 350,
      discountPrice: 315,
      duration: "1:30 horas",
      image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
      features: [
        "Identificação de crenças limitantes",
        "Reprogramação de padrões negativos",
        "Cura energética em nível profundo",
        "Liberação de bloqueios emocionais",
        "Conexão com sua essência espiritual",
        "Transformação de traumas e memórias"
      ],
      whatsappLink: whatsappLinks.thetahealing
    },
    {
      title: "Reiki",
      price: 250,
      discountPrice: 225,
      duration: "1:30 horas",
      image: "https://images.unsplash.com/photo-1545234717-e905ddb08b7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80",
      features: [
        "Equilíbrio dos chakras",
        "Harmonização energética",
        "Relaxamento profundo",
        "Redução do estresse e ansiedade",
        "Aumento da vitalidade",
        "Suporte ao bem-estar físico e emocional"
      ],
      whatsappLink: whatsappLinks.reiki
    }
  ];

  return (
    <main>
      {/* Hero Banner */}
      <div className="relative h-[50vh] overflow-hidden bg-gradient-to-br from-primary/80 to-accent flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566638892324-a0a267c84d3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800&q=80"
            alt="Energy healing session"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Terapias Energéticas
          </h1>
          <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
            Restaure seu equilíbrio energético e promova transformações profundas
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-serif text-3xl font-bold mb-6 text-primary dark:text-secondary">
            Terapias para Transformação Interior
          </h2>
          <p className="text-lg mb-6 text-muted-foreground">
            As terapias energéticas trabalham com a essência do seu ser para promover cura e transformação
            em níveis profundos. Diferente das leituras oraculares, que trazem orientações e insights, 
            as terapias atuam diretamente em seu campo energético para liberar bloqueios e restaurar o equilíbrio.
          </p>
          <p className="text-lg text-muted-foreground">
            Todas as sessões são realizadas online via chamada de vídeo, com a mesma eficácia de um atendimento
            presencial, pois a energia não está limitada pelo espaço físico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {terapiaServicos.map((servico, index) => (
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
            Compare as Terapias
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b dark:border-muted">
                  <th className="text-left py-3 px-4 text-primary dark:text-secondary">Características</th>
                  <th className="text-center py-3 px-4 text-primary dark:text-secondary">Thetahealing</th>
                  <th className="text-center py-3 px-4 text-primary dark:text-secondary">Reiki</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-muted">
                  <td className="py-3 px-4 text-muted-foreground">Preço</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">R$350 (R$315*)</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">R$250 (R$225*)</td>
                </tr>
                <tr className="border-b dark:border-muted">
                  <td className="py-3 px-4 text-muted-foreground">Duração</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">1:30 horas</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">1:30 horas</td>
                </tr>
                <tr className="border-b dark:border-muted">
                  <td className="py-3 px-4 text-muted-foreground">Foco principal</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">Reprogramação de crenças</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">Equilíbrio energético</td>
                </tr>
                <tr className="border-b dark:border-muted">
                  <td className="py-3 px-4 text-muted-foreground">Nível de mudança</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">Transformação profunda</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">Harmonização sutil</td>
                </tr>
                <tr className="border-b dark:border-muted">
                  <td className="py-3 px-4 text-muted-foreground">Ideal para</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">Traumas e padrões limitantes</td>
                  <td className="text-center py-3 px-4 text-muted-foreground">Estresse e desequilíbrios</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Preço para assinantes do Plano Conexão Cigana</p>
        </div>
        
        {/* Preparation */}
        <div className="bg-card rounded-xl shadow-lg p-8 mb-16">
          <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
            Como Se Preparar Para Uma Sessão
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-secondary mr-4 mt-1"><i className="fas fa-wifi text-xl"></i></div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Conexão Estável</h4>
                <p className="text-muted-foreground">Garanta uma boa conexão de internet para a chamada de vídeo.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-secondary mr-4 mt-1"><i className="fas fa-volume-up text-xl"></i></div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Ambiente Silencioso</h4>
                <p className="text-muted-foreground">Escolha um local tranquilo onde não será interrompido durante a sessão.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-secondary mr-4 mt-1"><i className="fas fa-couch text-xl"></i></div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Posição Confortável</h4>
                <p className="text-muted-foreground">Prepare-se para estar confortavelmente sentado ou deitado durante a sessão.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-secondary mr-4 mt-1"><i className="fas fa-glass-water text-xl"></i></div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Hidratação</h4>
                <p className="text-muted-foreground">Tenha um copo de água próximo para se hidratar antes e depois da sessão.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-secondary mr-4 mt-1"><i className="fas fa-list-check text-xl"></i></div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Definição de Intenção</h4>
                <p className="text-muted-foreground">Reflita previamente sobre o que deseja trabalhar ou transformar na sessão.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-secondary mr-4 mt-1"><i className="fas fa-heart text-xl"></i></div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Abertura Mental</h4>
                <p className="text-muted-foreground">Mantenha-se aberto para receber a energia e as transformações que virão.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
            O Que Dizem Sobre as Terapias
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.terapias.map((testimonial, index) => (
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
          <Faq items={faqs.terapias} />
        </div>
        
        {/* When to Choose */}
        <div className="bg-card rounded-xl shadow-lg p-8 mb-16">
          <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
            Quando Escolher Terapia vs. Leitura Oracular
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-xl font-bold mb-4 text-primary dark:text-secondary flex items-center">
                <i className="fas fa-cards text-secondary mr-2"></i> Leitura Oracular
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-muted-foreground">Quando busca orientação para decisões importantes</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-muted-foreground">Para entender situações específicas em sua vida</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-muted-foreground">Para ter insights sobre o futuro próximo</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-muted-foreground">Para planejamento de períodos específicos (mês/ano)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold mb-4 text-primary dark:text-secondary flex items-center">
                <i className="fas fa-spa text-secondary mr-2"></i> Terapia Energética
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-muted-foreground">Quando sente bloqueios emocionais persistentes</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-muted-foreground">Para transformar padrões negativos recorrentes</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-muted-foreground">Para cura de traumas e memórias dolorosas</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-muted-foreground">Para equilíbrio energético e bem-estar geral</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Promotion */}
        <div className="gradient-primary-light rounded-2xl p-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-4 text-primary dark:text-secondary">
            Economize 10% em Todas as Terapias
          </h3>
          <p className="mb-6 max-w-2xl mx-auto text-muted-foreground">
            Assine o Plano Conexão Cigana por apenas R$49,90/mês e ganhe 10% de desconto em todas 
            as terapias, além de 5 perguntas mensais garantidas e outros benefícios exclusivos.
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
