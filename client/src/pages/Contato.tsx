import { useState } from "react";
import { Faq } from "@/components/ui/faq";
import { faqs } from "@/data/faqs";
import { whatsappLinks } from "@/data/whatsapp-links";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contato() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mock form submission - in a real implementation this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo seu contato. Responderei em breve.",
        variant: "default",
      });
      
      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro. Por favor, tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Banner */}
      <div className="relative h-[40vh] overflow-hidden bg-gradient-to-br from-primary/80 to-accent flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1536431273297-92f1f0cc0c40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=800&q=80"
            alt="Mystical contact"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Contato e FAQ
          </h1>
          <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
            Conecte-se comigo para iniciar sua jornada espiritual
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form Section */}
          <div className="lg:w-1/2">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary dark:text-secondary">
              Entre em Contato
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Preencha o formulário abaixo para enviar uma mensagem ou utilize os 
              contatos diretos para um atendimento mais rápido.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 mb-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Nome completo <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  E-mail <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                  WhatsApp
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Mensagem <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Como posso ajudar você?"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
            
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-primary dark:text-secondary">
                Contato Direto
              </h3>
              <div className="space-y-3">
                <a 
                  href={whatsappLinks.contatoGeral}
                  className="flex items-center text-primary dark:text-secondary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp text-xl mr-3"></i>
                  <span>WhatsApp: (27) 98833-6689</span>
                </a>
                <a 
                  href="mailto:contato@terapiasoraculares.com" 
                  className="flex items-center text-primary dark:text-secondary hover:underline"
                >
                  <i className="far fa-envelope text-xl mr-3"></i>
                  <span>E-mail: contato@terapiasoraculares.com</span>
                </a>
              </div>
              
              <h3 className="font-serif text-xl font-bold text-primary dark:text-secondary mt-6">
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="#" className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors">
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
                <a href="#" className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors">
                  <i className="fab fa-tiktok text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="lg:w-1/2">
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary dark:text-secondary">
              Perguntas Frequentes
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Confira as dúvidas mais comuns sobre os atendimentos, agendamentos e 
              políticas de serviço.
            </p>
            
            <Faq items={faqs.gerais} className="mb-10" />
            
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="font-serif text-xl font-bold mb-4 text-primary dark:text-secondary">
                Política de Cancelamento e Remarcação
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <i className="fas fa-info-circle text-secondary mt-1 mr-3"></i>
                  <span>
                    Cancelamentos devem ser feitos com pelo menos 24 horas de antecedência para reembolso integral.
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-info-circle text-secondary mt-1 mr-3"></i>
                  <span>
                    Remarcações são gratuitas se solicitadas com 12 horas de antecedência.
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-info-circle text-secondary mt-1 mr-3"></i>
                  <span>
                    Cancelamentos com menos de 24 horas estão sujeitos a uma taxa de 30% do valor do serviço.
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-info-circle text-secondary mt-1 mr-3"></i>
                  <span>
                    Em caso de problemas técnicos durante a consulta, uma nova sessão será agendada sem custo adicional.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
