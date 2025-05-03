import { cn } from "@/lib/utils";
import { Link } from "wouter";

export interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
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
    <div
      className={cn(
        "bg-[#241a3e] border border-[#3a2d5c] rounded-2xl shadow-lg overflow-hidden max-w-[350px] w-full flex flex-col transition-shadow hover:shadow-2xl",
        className
      )}
    >
      <div className="relative w-full h-[120px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Badge economia */}
        <div className="absolute top-3 right-3 bg-[#aafad0] text-[#241a3e] font-bold text-sm rounded-full px-4 py-1 shadow z-10">
          Economia de até R$17
        </div>
        {/* Ícone decorativo */}
        <div className="absolute left-4 -bottom-5 bg-[#ffe36e] text-[#241a3e] rounded-full w-9 h-9 flex items-center justify-center text-lg border-4 border-[#241a3e] z-10">
          <i className="fas fa-fan"></i>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white text-lg font-bold mb-1 border-b-2 border-[#ffe36e] inline-block pb-1">{title}</h3>
        <p className="text-[#e0d6ff] text-sm mb-3 min-h-[36px]">{description}</p>
        <div className="mb-3">
          <p className="text-[#ffe36e] text-base font-bold">{price}</p>
          <p className="text-[#3be88c] text-sm italic">A partir de R$96,30 para assinantes</p>
        </div>
        <a
          href={path}
          className="w-full bg-gradient-to-r from-[#ffe36e] to-[#ffb800] text-[#241a3e] font-bold rounded-full py-3 text-base mt-auto shadow hover:from-[#ffb800] hover:to-[#ffe36e] transition text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba Mais
        </a>
      </div>
    </div>
  );
}
