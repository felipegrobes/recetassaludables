import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section id="inicio" className="relative w-full pt-12 pb-12 md:pt-20 md:pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
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
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div className="flex flex-col items-center text-center gap-6">

            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-slide-in-down [animation-delay:200ms]">
              ¡Más de 1500 Recetas Saludables que Cambiarán tu Vida!
            </h1>

            <p className="max-w-[700px] text-muted-foreground md:text-xl animate-slide-in-down [animation-delay:400ms]">
              Recetas deliciosas, fáciles y económicas. Los libros de cocina saludable más completos que existen. ¡No te quedes atrás!
            </p>

            <div className="my-4 animate-slide-in-down [animation-delay:500ms]">
                <Image src="/images/Logo.webp" alt="eBook Mockup" width={400} height={300} className="rounded-lg" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-down [animation-delay:600ms]">
              <Button asChild size="lg" className="group">
                <Link href="#comprar">
                  ¡Quiero mis Recetas!
                  <span className="text-xl ml-2 group-hover:scale-125 transition-transform">✨</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
