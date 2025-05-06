import { cn } from "@/lib/utils";

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
        "service-card bg-white dark:bg-[#241a3e] border border-[#e5e7eb] dark:border-[#3a2d5c] rounded-2xl shadow-lg overflow-hidden max-w-[350px] w-full flex flex-col transition-shadow hover:shadow-2xl",
        className
      )}
    >
      <div className="card-img relative w-full h-[180px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="card-content p-6 flex flex-col flex-1">
        <h3 className="card-title text-xl font-bold mb-2 text-[#241a3e] dark:text-white">{title}</h3>
        {subtitle && <p className="card-desc text-base text-muted-foreground dark:text-[#e0d6ff] mb-3">{subtitle}</p>}
        {extraText && (
          <div className="mb-2 text-accent dark:text-[#3be88c] text-sm font-semibold italic">{extraText}</div>
        )}
        <div className="card-price flex flex-col gap-2 mb-4">
          <span className="original-price text-lg font-bold text-primary dark:text-[#ffe36e]">{price}</span>
          {badge && (
            <div className="discount-badge inline-block bg-[#3be88c] text-[#241a3e] dark:bg-[#1e7c4a] dark:text-white px-3 py-1 rounded-full text-xs font-bold">
              {badge}
            </div>
          )}
        </div>
        <a
          href={path}
          className="card-btn block w-full text-center bg-gradient-to-r from-accent to-primary text-white dark:from-[#ffe36e] dark:to-[#ffb800] dark:text-[#241a3e] font-bold rounded-full py-3 text-base mt-auto shadow hover:from-primary hover:to-accent dark:hover:from-[#ffb800] dark:hover:to-[#ffe36e] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba Mais
        </a>
      </div>
    </div>
  );
}
