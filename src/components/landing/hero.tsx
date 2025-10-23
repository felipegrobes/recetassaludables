import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const ebookMockup = PlaceHolderImages.find((img) => img.id === 'ebook-mockup');

  return (
    <section id="inicio" className="relative w-full pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />

      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-6 text-left">
            <Badge variant="outline" className="border-green-300 bg-green-100 text-green-800 py-1 px-3">
              💚 Más de 5.000 clientes felices
            </Badge>

            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-slide-in-down [animation-delay:200ms]">
              ¡Más de 1500 Recetas Saludables que Cambiarán tu Vida!
            </h1>

            <p className="max-w-[600px] text-muted-foreground md:text-xl animate-slide-in-down [animation-delay:400ms]">
              Recetas deliciosas, fáciles y económicas. Los libros de cocina saludable más completos que existen. ¡No te quedes atrás!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-down [animation-delay:600ms]">
              <Button asChild size="lg" className="group">
                <Link href="#comprar">
                  ¡Quiero mis Recetas!
                  <span className="text-xl ml-2 group-hover:scale-125 transition-transform">✨</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#comprar">Ver Planes y Precios</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center animate-fade-in [animation-delay:800ms]">
            {ebookMockup && (
              <Image
                src={ebookMockup.imageUrl}
                alt={ebookMockup.description}
                data-ai-hint={ebookMockup.imageHint}
                width={400}
                height={480}
                className="rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
