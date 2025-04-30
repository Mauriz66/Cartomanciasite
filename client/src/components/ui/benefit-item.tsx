import { cn } from "@/lib/utils";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function BenefitItem({
  icon,
  title,
  description,
  className,
}: BenefitItemProps) {
  return (
    <div className={cn("flex items-start", className)}>
      <div className="text-secondary mr-4 mt-1">
        <i className={cn(icon, "text-xl")}></i>
      </div>
      <div>
        <h4 className="font-bold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
