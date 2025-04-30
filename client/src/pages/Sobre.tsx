import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/data/testimonials";
import { Link } from "wouter";
import { whatsappLinks } from "@/data/whatsapp-links";

export default function Sobre() {
  // Certificates and specialties
  const certificates = [
    "Certificação em Thetahealing® Avançado",
    "Mestre em Reiki Usui",
    "Formação em Leitura de Baralho Cigano",
    "Especialização em Tarô Terapêutico",
    "Terapeuta Integrativa",
    "Radiestesia e Radiônica"
  ];

  const specialties = [
    "Leituras oraculares para orientação pessoal e profissional",
    "Terapias energéticas para equilíbrio e harmonização",
    "Desenvolvimento de potenciais intuitivos",
    "Limpeza e harmonização energética",
    "Reprogramação de crenças limitantes",
    "Tratamento de traumas e bloqueios emocionais"
  ];

  return (
    <main>
      {/* Hero Banner */}
      <div className="relative h-[50vh] overflow-hidden bg-gradient-to-br from-primary/80 to-accent flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800&q=80"
            alt="Spiritual guide"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre Mim
          </h1>
          <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
            Minha jornada espiritual e abordagem no caminho das terapias e leituras oraculares
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Personal Story Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-16">
          <div className="lg:w-1/3">
            <div className="rounded-xl overflow-hidden border-4 border-secondary shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=800&q=80"
                alt="Spiritual guide portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary dark:text-secondary">
              Minha História Pessoal
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Minha jornada espiritual começou há mais de 10 anos, quando percebi que possuía uma sensibilidade 
              especial para captar energias e mensagens do universo. Durante um período desafiador da minha vida, 
              encontrei nas cartas oraculares e nas terapias energéticas o caminho para minha própria cura e transformação.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Desde então, dediquei-me a estudar profundamente diversas práticas energéticas e oraculares, 
              buscando certificações e aprimorando minha sensibilidade intuitiva. O que começou como uma 
              jornada pessoal transformou-se em uma missão de vida: ajudar outras pessoas a encontrarem 
              clareza, equilíbrio e direção através da conexão espiritual.
            </p>
            <p className="text-xl font-dancing mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent dark:from-secondary dark:to-secondary">
              "Acredito que cada pessoa tem seu próprio caminho de luz, e meu papel é iluminar os passos 
              para que cada um encontre sua verdadeira essência"
            </p>
            <p className="text-lg text-muted-foreground">
              Hoje, trabalho com atendimentos online, levando orientação e cura energética para pessoas em 
              diferentes lugares, sempre com o compromisso de trazer clareza e transformação positiva para cada 
              consulta e cada sessão terapêutica.
            </p>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-card rounded-xl shadow-lg p-8">
            <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary flex items-center">
              <i className="fas fa-certificate text-secondary mr-3"></i>
              Formações e Certificações
            </h3>
            <ul className="space-y-3">
              {certificates.map((certificate, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-muted-foreground">{certificate}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-xl shadow-lg p-8">
            <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary flex items-center">
              <i className="fas fa-star text-secondary mr-3"></i>
              Áreas de Especialidade
            </h3>
            <ul className="space-y-3">
              {specialties.map((specialty, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                  <span className="text-muted-foreground">{specialty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-card rounded-xl shadow-lg p-8 mb-16">
          <h3 className="font-serif text-2xl font-bold mb-6 text-primary dark:text-secondary">
            Filosofia de Trabalho
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary dark:bg-secondary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-heart text-white dark:text-gray-900 text-2xl"></i>
              </div>
              <h4 className="font-serif text-lg font-bold mb-3 text-primary dark:text-secondary">Respeito</h4>
              <p className="text-muted-foreground">
                Cada pessoa possui seu próprio caminho espiritual, que deve ser respeitado e honrado em sua singularidade.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary dark:bg-secondary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-balance-scale text-white dark:text-gray-900 text-2xl"></i>
              </div>
              <h4 className="font-serif text-lg font-bold mb-3 text-primary dark:text-secondary">Ética</h4>
              <p className="text-muted-foreground">
                Compromisso com a verdade e a integridade em cada consulta, priorizando sempre o bem-estar do consultante.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary dark:bg-secondary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-lightbulb text-white dark:text-gray-900 text-2xl"></i>
              </div>
              <h4 className="font-serif text-lg font-bold mb-3 text-primary dark:text-secondary">Clareza</h4>
              <p className="text-muted-foreground">
                Comunicação clara e direta das mensagens recebidas, tornando-as acessíveis e aplicáveis ao cotidiano.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold mb-6 text-center text-primary dark:text-secondary">
            O Que Dizem Sobre Meu Trabalho
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.sobre.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-10 text-center text-white">
          <h2 className="font-serif text-3xl font-bold mb-4">Comece Sua Jornada de Transformação</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Estou aqui para ajudar você a encontrar clareza, equilíbrio e direção em sua jornada pessoal.
            Escolha o serviço que melhor atende às suas necessidades ou entre em contato para conversarmos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/#servicos">
              <a className="bg-secondary hover:bg-secondary/90 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
                Ver Todos os Serviços
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
