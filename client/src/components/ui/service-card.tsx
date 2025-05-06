import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export interface ServiceCardProps {
  title: string;
  subtitle?: string;
  price: string;
  memberPrice?: string;
  badge?: string;
  image: string;
  path: string;
  extraText?: string;
  className?: string;
}

export function ServiceCard({
  title,
  subtitle,
  price,
  memberPrice,
  badge,
  image,
  path,
  extraText,
  className,
}: ServiceCardProps) {
  // Ref para animação de entrada
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.classList.add("opacity-0", "translate-y-8");
    setTimeout(() => {
      el.classList.remove("opacity-0", "translate-y-8");
      el.classList.add("opacity-100", "translate-y-0");
    }, 100);
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        // Estrutura base do card
        "service-card bg-white dark:bg-[#241a3e] border border-[#e5e7eb] dark:border-[#3a2d5c] rounded-2xl shadow-lg overflow-hidden max-w-[350px] w-full flex flex-col transition-all duration-500 ease-out opacity-100 translate-y-0 hover:shadow-2xl group",
        "h-[460px] md:h-[460px]",
        className
      )}
    >
      {/* Imagem do serviço */}
      <div className="card-img relative w-full h-[160px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradiente no rodapé da imagem para legibilidade */}
        <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[rgba(36,26,62,0.7)] to-transparent pointer-events-none" />
        {/* Badge de economia, se houver */}
        {badge && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-[#3be88c] to-[#57FFEA] text-[#241a3e] dark:text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg z-10 animate-pulse border border-[#3be88c]">
            {badge}
          </div>
        )}
      </div>
      {/* Conteúdo do card */}
      <div className="card-content flex flex-col flex-1 items-center text-center px-5 pt-7 pb-5 relative">
        {/* Título com fonte serifada e linha animada ao hover */}
        <h3
          className="card-title text-xl md:text-2xl font-bold font-['Playfair_Display',serif] mb-2 text-[#241a3e] dark:text-white leading-tight relative after:content-[''] after:block after:h-1 after:w-10 after:bg-gradient-to-r after:from-[#ffe36e] after:to-[#ffb800] after:rounded-full after:mx-auto after:mt-2 after:transition-all after:duration-300 group-hover:after:w-24"
        >
          {title}
        </h3>
        {/* Descrição */}
        {subtitle && <p className="card-desc text-sm md:text-base text-[#6b5e7a] dark:text-[#e0d6ff] mb-3 leading-relaxed">{subtitle}</p>}
        {extraText && (
          <div className="mb-2 text-accent dark:text-[#3be88c] text-sm font-semibold italic">{extraText}</div>
        )}
        {/* Preços */}
        <div className="card-price flex flex-col gap-1 mb-4 w-full items-center">
          <span className="original-price text-lg font-bold text-[#ffe36e] dark:text-[#ffe36e] drop-shadow">{price}</span>
          {memberPrice && (
            <span className="discount-price text-sm font-semibold text-[#3be88c] dark:text-[#aafad0] mt-1 italic">{memberPrice}</span>
          )}
        </div>
        {/* Botão Saiba Mais */}
        <a
          href={path}
          className="card-btn block w-full text-center bg-gradient-to-r from-[#ffe36e] to-[#ffb800] hover:from-[#ffb800] hover:to-[#ffe36e] text-[#241a3e] font-bold rounded-full py-3 text-base mt-auto shadow transition-all duration-300 uppercase tracking-wide"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba Mais
        </a>
      </div>
    </div>
  );
}
