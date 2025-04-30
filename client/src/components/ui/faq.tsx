import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
  className?: string;
}

export function Faq({ items, className }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-card rounded-lg shadow-md overflow-hidden"
        >
          <button 
            className="w-full px-6 py-4 text-left font-semibold text-primary dark:text-secondary flex justify-between items-center"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}
          >
            <span>{item.question}</span>
            <ChevronDown 
              className={cn(
                "transition-transform duration-200",
                openIndex === index ? "rotate-180" : ""
              )} 
            />
          </button>
          <div 
            id={`faq-content-${index}`}
            className={cn(
              "px-6 py-4 border-t dark:border-gray-700 text-muted-foreground transition-all duration-200 overflow-hidden",
              openIndex === index ? "max-h-96" : "max-h-0 py-0 opacity-0"
            )}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
