import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface TarotGalleryProps {
  className?: string;
}

export function TarotGallery({ className }: TarotGalleryProps) {
  const images = [
    { src: "/src/assets/images/tarot1.jpg", alt: "Tarot cards with crystals" },
    { src: "/src/assets/images/tarot2.jpg", alt: "Ethereal tarot spread with soft lighting" },
    { src: "/src/assets/images/tarot3.jpg", alt: "Purple and gold tarot cards with teacup" },
    { src: "/src/assets/images/tarot4.jpg", alt: "Tarot cards with gold chain decoration" },
    { src: "/src/assets/images/tarot5.jpg", alt: "Tarot reading with candles" },
    { src: "/src/assets/images/tarot6.jpg", alt: "Detailed tarot spread with multiple cards" },
  ];

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-background/80 backdrop-blur-sm border-secondary text-primary hover:bg-accent/20" />
        <CarouselNext className="right-2 bg-background/80 backdrop-blur-sm border-secondary text-primary hover:bg-accent/20" />
      </Carousel>
    </div>
  );
}