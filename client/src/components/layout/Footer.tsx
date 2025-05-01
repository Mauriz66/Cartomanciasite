import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary dark:text-secondary">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-muted-foreground hover:text-primary dark:hover:text-secondary transition-colors">
                    Início
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/baralho-cigano">
                  <a className="text-muted-foreground hover:text-primary dark:hover:text-secondary transition-colors">
                    Baralho Cigano
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/plano-conexao">
                  <a className="text-muted-foreground hover:text-primary dark:hover:text-secondary transition-colors">
                    Plano Conexão
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <a className="text-muted-foreground hover:text-primary dark:hover:text-secondary transition-colors">
                    Sobre
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary dark:text-secondary">
              Contato
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary dark:hover:text-secondary transition-colors"
                >
                  <i className="fab fa-whatsapp w-5 mr-2"></i> WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@energetichealing.com" 
                  className="text-muted-foreground hover:text-primary dark:hover:text-secondary transition-colors"
                >
                  <i className="fas fa-envelope w-5 mr-2"></i> Email
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary dark:text-secondary">
              Redes Sociais
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://instagram.com/energetichealing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary dark:hover:text-secondary transition-colors"
                >
                  <i className="fab fa-instagram w-5 mr-2"></i> Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com/energetichealing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary dark:hover:text-secondary transition-colors"
                >
                  <i className="fab fa-facebook w-5 mr-2"></i> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Energetic Healing. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
