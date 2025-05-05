import { cn } from "@/lib/utils";
import { Link } from "wouter";

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
  return (
    <div
      className={cn(
        "bg-card border border-card text-card-foreground rounded-2xl shadow-lg overflow-hidden max-w-[350px] w-full flex flex-col transition-shadow hover:shadow-2xl dark:bg-[#241a3e] dark:border-[#3a2d5c] dark:text-white",
        className
      )}
    >
      <div className="relative w-full h-[120px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Badge economia customizável */}
        {badge && (
          <div className="absolute top-3 right-3 bg-[#aafad0] text-[#241a3e] font-bold text-sm rounded-full px-4 py-1 shadow z-10">
            {badge}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-primary dark:text-white text-lg font-bold mb-1 border-b-2 border-[#ffe36e] inline-block pb-1">{title}</h3>
        {subtitle && <p className="text-muted-foreground dark:text-[#e0d6ff] text-sm mb-3 min-h-[36px]">{subtitle}</p>}
        {extraText && (
          <div className="mb-2 text-[#3be88c] text-sm font-semibold italic">{extraText}</div>
        )}
        <div className="mb-3">
          <p className="text-[#ffe36e] text-base font-bold">{price}</p>
          {memberPrice && (
            <p className="text-[#3be88c] text-sm italic">{memberPrice}</p>
          )}
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
