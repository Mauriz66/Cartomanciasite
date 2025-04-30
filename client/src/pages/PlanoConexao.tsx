import { Link } from "wouter";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { BenefitItem } from "@/components/ui/benefit-item";
import { Faq } from "@/components/ui/faq";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { whatsappLinks } from "@/data/whatsapp-links";

export default function PlanoConexao() {
  const benefits = [
    {
      icon: "fas fa-gem",
      title: "5 Perguntas Mensais",
      description: "Direito a 5 perguntas objetivas por mês, respondidas com prioridade."
    },
    {
      icon: "fas fa-percentage",
      title: "10% de Desconto",
      description: "Em todos os serviços, desde perguntas adicionais até terapias completas."
    },
    {
      icon: "fas fa-gift",
      title: "Pergunta Bônus",
      description: "Uma pergunta adicional gratuita no mês do seu aniversário."
    },
    {
      icon: "fas fa-star",
      title: "Atendimento Prioritário",
      description: "Fila de atendimento preferencial para assinantes."
    },
    {
      icon: "fas fa-mobile-alt",
      title: "App Exclusivo",
      description: "Acesso ao aplicativo com calendário interativo, vídeos semanais e ritual mensal."
    },
    {
      icon: "fas fa-bolt",
      title: "Perguntas Adicionais",
      description: "R$13,50 por pergunta adicional (normal: R$15,00)."
    }
  ];

  return (
    <main>
      {/* Hero Banner */}
      <div className="relative h-[50vh] overflow-hidden bg-gradient-to-br from-primary/80 to-accent flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515011562088-6d201e1e5bb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800&q=80"
            alt="Mystical connection background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Plano Conexão Cigana
          </h1>
          <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
            Orientação espiritual constante com benefícios exclusivos para assinantes
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="lg:w-2/3 mb-12 lg:mb-0">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary dark:text-secondary">
              Orientação Contínua para sua Jornada Espiritual
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              O Plano Conexão Cigana foi criado para quem busca um acompanhamento regular em sua 
              jornada espiritual. Com benefícios exclusivos e economia significativa, você tem 
              acesso privilegiado a todos os serviços.
            </p>
            
            <div className="bg-card rounded-xl shadow-lg p-8 mb-10">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
                Benefícios Exclusivos do Plano
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <BenefitItem
                    key={index}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                  />
                ))}
              </div>
            </div>
            
            {/* Comparison Table */}
            <div className="bg-card rounded-xl shadow-lg p-8">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
                Economize com o Plano
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b dark:border-muted">
                      <th className="text-left py-3 px-4 text-primary dark:text-secondary">Serviço</th>
                      <th className="text-right py-3 px-4 text-primary dark:text-secondary">Preço Normal</th>
                      <th className="text-right py-3 px-4 text-primary dark:text-secondary">Preço Assinante</th>
                      <th className="text-right py-3 px-4 text-primary dark:text-secondary">Economia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-muted">
                      <td className="py-3 px-4 text-muted-foreground">5 Perguntas Avulsas</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$75,00</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">Incluídas</td>
                      <td className="text-right py-3 px-4 text-green-500">R$75,00</td>
                    </tr>
                    <tr className="border-b dark:border-muted">
                      <td className="py-3 px-4 text-muted-foreground">Pergunta Adicional</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$15,00</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$13,50</td>
                      <td className="text-right py-3 px-4 text-green-500">R$1,50</td>
                    </tr>
                    <tr className="border-b dark:border-muted">
                      <td className="py-3 px-4 text-muted-foreground">Jogo de 5 Cartas</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$107,00</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$96,30</td>
                      <td className="text-right py-3 px-4 text-green-500">R$10,70</td>
                    </tr>
                    <tr className="border-b dark:border-muted">
                      <td className="py-3 px-4 text-muted-foreground">Jogo de 10 Cartas</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$170,00</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$153,00</td>
                      <td className="text-right py-3 px-4 text-green-500">R$17,00</td>
                    </tr>
                    <tr className="border-b dark:border-muted">
                      <td className="py-3 px-4 text-muted-foreground">Leitura Mensal</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$107,00</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$96,30</td>
                      <td className="text-right py-3 px-4 text-green-500">R$10,70</td>
                    </tr>
                    <tr className="border-b dark:border-muted">
                      <td className="py-3 px-4 text-muted-foreground">Leitura de Aniversário</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$170,00</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$153,00</td>
                      <td className="text-right py-3 px-4 text-green-500">R$17,00</td>
                    </tr>
                    <tr className="border-b dark:border-muted">
                      <td className="py-3 px-4 text-muted-foreground">Thetahealing</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$350,00</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$315,00</td>
                      <td className="text-right py-3 px-4 text-green-500">R$35,00</td>
                    </tr>
                    <tr className="border-b dark:border-muted">
                      <td className="py-3 px-4 text-muted-foreground">Reiki</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$250,00</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">R$225,00</td>
                      <td className="text-right py-3 px-4 text-green-500">R$25,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Testimonials */}
            <div className="mt-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
                O Que Dizem os Assinantes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.planoConexao.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    content={testimonial.content}
                    author={testimonial.author}
                    role={testimonial.role}
                  />
                ))}
              </div>
            </div>
            
            {/* FAQ */}
            <div className="mt-12">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
                Perguntas Frequentes
              </h3>
              <Faq items={faqs.planoConexao} />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg p-8 text-white mb-8">
                <h3 className="font-serif text-2xl font-bold mb-6">Assine Agora</h3>
                <div className="text-5xl font-bold mb-4">R$49,90<span className="text-sm font-normal">/mês</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle mr-3"></i>
                    <span>5 perguntas mensais garantidas</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle mr-3"></i>
                    <span>10% de desconto em todos os serviços</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle mr-3"></i>
                    <span>Pergunta bônus no aniversário</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle mr-3"></i>
                    <span>Prioridade no atendimento</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle mr-3"></i>
                    <span>App exclusivo para assinantes</span>
                  </li>
                </ul>
                <a 
                  href={whatsappLinks.planoConexao}
                  className="block w-full text-center bg-secondary hover:bg-secondary/90 text-gray-900 font-semibold py-3 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Assinar Plano
                </a>
                <p className="text-sm text-center mt-4 opacity-80">
                  Sem fidelidade. Cancele quando quiser.
                </p>
              </div>
              
              <div className="bg-card rounded-xl shadow-lg p-6">
                <h3 className="font-serif text-xl font-bold mb-4 text-primary dark:text-secondary">Já é assinante?</h3>
                <div className="space-y-3">
                  <a 
                    href={whatsappLinks.jaSouAssinante}
                    className="flex items-center text-primary dark:text-secondary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-comment-dots mr-3"></i>
                    <span>Utilizar pergunta mensal</span>
                  </a>
                  <a 
                    href={whatsappLinks.assinantePerguntaAdicional}
                    className="flex items-center text-primary dark:text-secondary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-plus-circle mr-3"></i>
                    <span>Pergunta adicional (R$13,50)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
