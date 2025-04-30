import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  content: string;
  author: string;
  role?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  content,
  author,
  role,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <div className={cn("testimonial-card bg-card p-6 rounded-lg shadow-md", className)}>
      {rating > 0 && (
        <div className="flex items-center mb-4">
          <div className="text-secondary">
            {[...Array(rating)].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
          </div>
        </div>
      )}
      <p className="italic mb-4 text-muted-foreground">{content}</p>
      <div className="font-semibold text-primary dark:text-secondary">{author}</div>
      {role && <div className="text-sm text-muted-foreground">{role}</div>}
    </div>
  );
}
