import { Link } from "wouter";

const baralhoCiganoImages = [
  {
    src: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
    alt: "Baralho Cigano - Jogo de 5 Cartas",
    title: "Jogo de 5 Cartas",
    description: "Leitura detalhada para questões específicas",
    path: "/baralho-cigano/5-cartas"
  },
  {
    src: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
    alt: "Baralho Cigano - Jogo de 10 Cartas",
    title: "Jogo de 10 Cartas",
    description: "Análise completa da sua situação",
    path: "/baralho-cigano/10-cartas"
  }
];

export function BaralhoCiganoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {baralhoCiganoImages.map((image, index) => (
        <Link key={index} href={image.path}>
          <a className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
              <p className="text-white/90">{image.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}