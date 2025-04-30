import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary dark:bg-[#2D2240] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-secondary">Terapias Oraculares</h3>
            <p className="mb-6 text-gray-300">
              Orientação espiritual e terapias energéticas para guiar sua jornada pessoal.
            </p>
            <div className="space-y-2">
              <Link href="/">
                <a className="flex items-center text-gray-300 hover:text-secondary transition-colors">
                  <i className="fas fa-home w-5 mr-2"></i> Início
                </a>
              </Link>
              <Link href="/plano-conexao">
                <a className="flex items-center text-gray-300 hover:text-secondary transition-colors">
                  <i className="fas fa-star w-5 mr-2"></i> Conexão Cigana
                </a>
              </Link>
              <Link href="/#servicos">
                <a className="flex items-center text-gray-300 hover:text-secondary transition-colors">
                  <i className="fas fa-gem w-5 mr-2"></i> Serviços
                </a>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-secondary">Serviços</h3>
            <div className="space-y-2">
              <Link href="/tarot">
                <a className="flex items-center text-gray-300 hover:text-secondary transition-colors">
                  <i className="fas fa-cards w-5 mr-2"></i> Jogos de Tarot
                </a>
              </Link>
              <Link href="/leituras">
                <a className="flex items-center text-gray-300 hover:text-secondary transition-colors">
                  <i className="fas fa-book-open w-5 mr-2"></i> Leituras de Ciclos
                </a>
              </Link>
              <Link href="/terapias">
                <a className="flex items-center text-gray-300 hover:text-secondary transition-colors">
                  <i className="fas fa-spa w-5 mr-2"></i> Terapias Energéticas
                </a>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-secondary">Contato</h3>
            <div className="space-y-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=5527988336689&text=Ol%C3%A1!+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+seus+servi%C3%A7os.+Poderia+me+ajudar?+Obrigado&type=phone_number&app_absent=0"
                className="flex items-center text-gray-300 hover:text-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp w-5 mr-2 text-xl"></i> WhatsApp
              </a>
              <a 
                href="mailto:contato@terapiasoraculares.com" 
                className="flex items-center text-gray-300 hover:text-secondary transition-colors"
              >
                <i className="far fa-envelope w-5 mr-2 text-xl"></i> Email
              </a>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  <i className="fab fa-tiktok text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Terapias Oraculares. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
