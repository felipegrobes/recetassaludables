import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="inicio" className="w-full pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-28 bg-muted">
      <div className="container">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div className="flex flex-col items-center text-center gap-6">

            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-slide-in-down [animation-delay:200ms]">
              ¡Más de 1500 Recetas Saludables que Cambiarán tu Vida!
            </h1>

            <p className="max-w-[700px] text-muted-foreground md:text-xl animate-slide-in-down [animation-delay:400ms]">
              Recetas deliciosas, fáciles y económicas. Los libros de cocina saludable más completos que existen. ¡No te quedes atrás!
            </p>

            <div className="my-4 animate-slide-in-down [animation-delay:500ms]">
                <Image src="/images/Produto.webp" alt="eBook Mockup" className="rounded-lg" width={400} height={300} priority />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-down [animation-delay:600ms]">
              <Button asChild size="lg" className="group">
                <Link href="#beneficios">
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
