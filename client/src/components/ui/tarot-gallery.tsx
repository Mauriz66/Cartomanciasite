import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Importando as imagens com sintaxe para evitar problemas com espaços no nome do arquivo
const image1 = new URL("../../assets/images/image_fx (4).jpg", import.meta.url).href;
const image2 = new URL("../../assets/images/image_fx (5).jpg", import.meta.url).href;
const image3 = new URL("../../assets/images/image_fx (6).jpg", import.meta.url).href;
const image4 = new URL("../../assets/images/image_fx (7).jpg", import.meta.url).href;
const image5 = new URL("../../assets/images/image_fx (8).jpg", import.meta.url).href;
const image6 = new URL("../../assets/images/image_fx (9).jpg", import.meta.url).href;

const tarotImages = [
  { src: image1, alt: "Tarô com cristais e elementos místicos" },
  { src: image2, alt: "Consulta de tarô com velas" },
  { src: image3, alt: "Baralho de tarô com desenhos roxos" },
  { src: image4, alt: "Baralho de tarô roxo e dourado" },
  { src: image5, alt: "Consulta de tarô em mesa iluminada" },
  { src: image6, alt: "Leitura de tarô com cristais" },
];

export function TarotGallery() {
  return (
    <div className="w-full mb-10">
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {tarotImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2 h-full">
                <div className="rounded-lg overflow-hidden h-64 shadow-md transition-all hover:shadow-xl border border-border">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
}