import { Link } from "wouter";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Faq } from "@/components/ui/faq";
import { tarotServices } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { whatsappLinks } from "@/data/whatsapp-links";

export default function BaralhoCigano() {
  const baralhoCiganoServicos = [
    {
      title: "Jogo de 5 Cartas",
      description: "Leitura detalhada com 5 cartas do baralho cigano para responder uma questão específica",
      price: "R$107,00",
      image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
      path: "/baralho-cigano/5-cartas"
    },
    {
      title: "Jogo de 10 Cartas",
      description: "Leitura completa com 10 cartas do baralho cigano para uma visão mais ampla da situação",
      price: "R$170,00",
      image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
      path: "/baralho-cigano/10-cartas"
    }
  ];

  return (
    <main>
      {/* Hero Banner */}
      <div className="relative h-[50vh] overflow-hidden bg-gradient-to-br from-primary/80 to-accent flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=400&q=80" 
            alt="Baralho cigano cards"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Jogos de Baralho Cigano
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-8 max-w-2xl mx-auto">
            As leituras de baralho cigano são realizadas com o baralho cigano, que oferece uma
            visão clara e direta sobre suas questões e caminhos
          </p>
          <a 
            href={whatsappLinks.contatoGeral}
            className="bg-secondary hover:bg-secondary/90 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all shadow-lg inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp mr-2"></i> Agendar Consulta
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {baralhoCiganoServicos.map((servico, index) => (
            <ServiceCard
              key={index}
              title={servico.title}
              description={servico.description}
              price={servico.price}
              image={servico.image}
              path={servico.path}
            />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-sans text-3xl font-bold mb-10 text-center text-primary dark:text-secondary">
            O Que Dizem Sobre Meu Trabalho
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.baralhoCigano.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="font-sans text-3xl font-bold mb-10 text-center text-primary dark:text-secondary">
          Perguntas Frequentes
        </h2>
        <Faq items={faqs.baralhoCigano} />
      </div>
    </main>
  );
}
