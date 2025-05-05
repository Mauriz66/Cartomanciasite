import { Link } from "wouter";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { BenefitItem } from "@/components/ui/benefit-item";
import { BaralhoCiganoGallery } from "@/components/ui/baralho-cigano-gallery";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { whatsappLinks } from "@/data/whatsapp-links";

// Imagem para o banner
const bannerImage = "/assets/images/image_fx (8).jpg";

export default function Home() {
  return (
    <main>
      {/* Hero Banner */}
      <div className="relative h-[70vh] overflow-hidden bg-gradient-to-br from-primary/80 to-accent flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={bannerImage} 
            alt="Consulta de baralho cigano com velas" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Descubra seu Caminho Espiritual
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-8 max-w-2xl mx-auto">
            Terapias energéticas e leituras oraculares para guiar sua jornada pessoal e espiritual
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/plano-conexao">
              <a className="bg-secondary hover:bg-secondary/90 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
                Conheça o Plano Conexão Cigana
              </a>
            </Link>
            <a href="#servicos" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg transition-all">
              Ver Todos os Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-sans text-3xl font-bold mb-4 text-primary dark:text-secondary">
            Encontre Equilíbrio e Direção
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Todos os atendimentos são realizados online via WhatsApp, trazendo conforto e praticidade para sua jornada espiritual
          </p>
        </div>

        {/* Services Overview */}
        <div id="servicos" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 justify-items-center">
          <ServiceCard
            title="Jogos de Baralho Cigano"
            subtitle="Leituras e jogos para clareza e orientação."
            price="A partir de R$107"
            memberPrice="10% de desconto para assinantes"
            image="/assets/images/image_fx (5).jpg"
            path="/baralho-cigano"
          />
          <ServiceCard
            title="Terapias Energéticas"
            subtitle="Reiki e Thetahealing para equilíbrio e transformação."
            price="A partir de R$250"
            memberPrice="10% de desconto para assinantes"
            image="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80"
            path="/terapias-energeticas"
          />
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/todos-os-servicos">
            <a className="bg-secondary hover:bg-secondary/90 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
              Ver Todos os Serviços
            </a>
          </Link>
        </div>

        {/* Connection Plan Section */}
        <div className="mt-20 gradient-primary-light rounded-2xl p-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h2 className="font-sans text-3xl font-bold mb-4 text-primary dark:text-secondary">
                <i className="fas fa-star text-secondary"></i> Plano Conexão Cigana
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Economize e tenha acesso prioritário aos serviços com nosso plano mensal exclusivo.
                Ideal para quem busca orientação espiritual constante.
              </p>
              <div className="bg-card/70 dark:bg-card rounded-lg p-6 shadow-md mb-6">
                <div className="text-sm font-semibold text-primary dark:text-muted-foreground mb-1">Mensalidade</div>
                <div className="text-4xl font-bold text-primary dark:text-secondary mb-4">R$49,90<span className="text-sm font-normal text-muted-foreground">/mês</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-muted-foreground">5 perguntas mensais garantidas</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-muted-foreground">10% de desconto em todos os serviços</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-muted-foreground">Pergunta bônus no mês de aniversário</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-muted-foreground">Prioridade na fila de atendimento</span>
                  </li>
                </ul>
                <a 
                  href={whatsappLinks.planoConexao}
                  className="block w-full text-center bg-secondary hover:bg-secondary/90 text-gray-900 font-semibold py-3 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Assinar Agora
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-card/80 dark:bg-card rounded-lg shadow-md p-6">
              <h3 className="font-sans text-xl font-bold mb-4 text-primary dark:text-secondary">
                Economia para Assinantes
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b dark:border-muted">
                      <th className="text-left py-3 px-2 text-primary dark:text-secondary">Serviço</th>
                      <th className="text-right py-3 px-2 text-primary dark:text-secondary">Preço Normal</th>
                      <th className="text-right py-3 px-2 text-primary dark:text-secondary">Preço Assinante</th>
                      <th className="text-right py-3 px-2 text-primary dark:text-secondary">Economia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-muted">
                      <td className="py-3 px-2 text-muted-foreground">Pergunta Avulsa</td>
                      <td className="text-right py-3 px-2 text-muted-foreground">R$15,00</td>
                      <td className="text-right py-3 px-2 text-muted-foreground">R$13,50</td>
                      <td className="text-right py-3 px-2 text-green-500">R$1,50</td>
                    </tr>
                    <tr className="border-b dark:border-muted">
                      <td className="py-3 px-2 text-muted-foreground">Jogo de 5 Cartas</td>
                      <td className="text-right py-3 px-2 text-muted-foreground">R$107,00</td>
                      <td className="text-right py-3 px-2 text-muted-foreground">R$96,30</td>
                      <td className="text-right py-3 px-2 text-green-500">R$10,70</td>
                    </tr>
                    <tr className="border-b dark:border-muted">
                      <td className="py-3 px-2 text-muted-foreground">Jogo de 10 Cartas</td>
                      <td className="text-right py-3 px-2 text-muted-foreground">R$170,00</td>
                      <td className="text-right py-3 px-2 text-muted-foreground">R$153,00</td>
                      <td className="text-right py-3 px-2 text-green-500">R$17,00</td>
                    </tr>
                    <tr className="border-b dark:border-muted">
                      <td className="py-3 px-2 text-muted-foreground">Leitura Mensal</td>
                      <td className="text-right py-3 px-2 text-muted-foreground">R$107,00</td>
                      <td className="text-right py-3 px-2 text-muted-foreground">R$96,30</td>
                      <td className="text-right py-3 px-2 text-green-500">R$10,70</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6">
                <Link href="/plano-conexao">
                  <a className="text-primary dark:text-secondary hover:underline flex items-center">
                    <span>Ver todos os benefícios</span>
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* About Section Preview */}
        <div className="mt-20 flex flex-col md:flex-row items-center md:space-x-8 py-10">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-secondary shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80" 
                alt="Spiritual guide portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="font-sans text-3xl font-bold mb-4 text-primary dark:text-secondary">Sobre Mim</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Minha jornada espiritual começou há mais de 10 anos, quando descobri minha conexão com os oráculos 
              e a energia universal. Desde então, dedico-me a aprofundar conhecimentos em diversas práticas 
              espirituais para ajudar pessoas a encontrarem equilíbrio e direção.
            </p>
            <p className="text-xl font-dancing mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent dark:from-secondary dark:to-secondary">
              "Minha missão é iluminar caminhos e trazer clareza através da conexão espiritual"
            </p>
            <Link href="/sobre">
              <a className="inline-flex items-center text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors">
                <span>Conheça minha história completa</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </Link>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="font-sans text-3xl font-bold mb-10 text-center text-primary dark:text-secondary">
            O Que Dizem Sobre Meu Trabalho
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.home.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="mt-20">
          <h2 className="font-sans text-3xl font-bold mb-10 text-center text-primary dark:text-secondary">
            Como Funciona o Atendimento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-primary dark:bg-secondary rounded-full flex items-center justify-center mb-4">
                <span className="text-white dark:text-gray-900 text-2xl font-bold">1</span>
              </div>
              <h3 className="font-sans text-xl font-bold mb-3 text-primary dark:text-secondary">Escolha o Serviço</h3>
              <p className="text-muted-foreground">
                Selecione a consulta ou terapia que melhor atende suas necessidades atuais.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-primary dark:bg-secondary rounded-full flex items-center justify-center mb-4">
                <span className="text-white dark:text-gray-900 text-2xl font-bold">2</span>
              </div>
              <h3 className="font-sans text-xl font-bold mb-3 text-primary dark:text-secondary">Agende pelo WhatsApp</h3>
              <p className="text-muted-foreground">
                Entre em contato para verificar disponibilidade e agendar seu horário.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-card p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-primary dark:bg-secondary rounded-full flex items-center justify-center mb-4">
                <span className="text-white dark:text-gray-900 text-2xl font-bold">3</span>
              </div>
              <h3 className="font-sans text-xl font-bold mb-3 text-primary dark:text-secondary">Receba seu Atendimento</h3>
              <p className="text-muted-foreground">
                No horário marcado, você receberá o atendimento personalizado via WhatsApp.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-br from-primary to-accent rounded-2xl p-10 text-center text-white">
          <h2 className="font-sans text-3xl font-bold mb-4">Comece Sua Jornada Espiritual Hoje</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Escolha o serviço que melhor atende às suas necessidades atuais ou assine o plano 
            Conexão Cigana para benefícios exclusivos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/plano-conexao">
              <a className="bg-secondary hover:bg-secondary/90 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
                Assinar Plano Conexão Cigana
              </a>
            </Link>
            <a 
              href={whatsappLinks.contatoGeral}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp mr-2"></i> Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
