import { cn } from "@/lib/utils";
import { Link } from "wouter";

export interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  path: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  price,
  image,
  path,
  className,
}: ServiceCardProps) {
  return (
    <div className={cn("bg-card rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1", className)}>
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold mb-2 text-primary dark:text-secondary">{title}</h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-sm text-muted-foreground">A partir de</span>
            <p className="text-xl font-bold text-primary dark:text-secondary">R${price}</p>
          </div>
          <div className="discount-badge">
            -10% ASSINANTES
          </div>
        </div>
        <Link href={path}>
          <a className="block w-full text-center bg-primary hover:bg-primary/90 text-white py-2 rounded transition-colors">
            Saiba Mais
          </a>
        </Link>
      </div>
    </div>
  );
}
