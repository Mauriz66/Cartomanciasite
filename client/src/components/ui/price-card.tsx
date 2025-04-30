import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export interface PriceCardProps {
  title: string;
  price: number;
  discountPrice?: number;
  duration?: string;
  description?: string;
  image?: string;
  features: string[];
  whatsappLink: string;
  className?: string;
}

export function PriceCard({
  title,
  price,
  discountPrice,
  duration,
  description,
  image,
  features,
  whatsappLink,
  className,
}: PriceCardProps) {
  return (
    <div className={cn("bg-card rounded-xl shadow-lg overflow-hidden", className)}>
      {image && (
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
          {discountPrice && (
            <div className="absolute top-4 right-4 discount-badge">
              -10% ASSINANTES
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold mb-2 text-primary dark:text-secondary">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold text-primary dark:text-secondary">R${price}</span>
          {discountPrice && (
            <span className="text-sm text-muted-foreground ml-2">
              (R${discountPrice} para assinantes)
            </span>
          )}
        </div>
        {duration && (
          <div className="mb-6">
            <div className="flex items-center text-muted-foreground mb-2">
              <i className="far fa-clock mr-2"></i>
              <span>Duração: {duration}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <i className="far fa-comment-dots mr-2"></i>
              <span>Via WhatsApp (áudio ou texto)</span>
            </div>
          </div>
        )}
        {description && <p className="text-muted-foreground mb-4">{description}</p>}
        {features.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-3">O que será analisado:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-col space-y-3">
          <a
            href={whatsappLink}
            className="block w-full text-center bg-primary hover:bg-primary/90 text-white py-3 rounded transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp mr-2"></i> Agendar Consulta
          </a>
          {discountPrice && (
            <Link href="/plano-conexao">
              <a className="block w-full text-center bg-card dark:bg-background border border-primary dark:border-secondary text-primary dark:text-secondary py-3 rounded transition-colors">
                Economize 10% como assinante
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
