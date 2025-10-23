'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María G.',
    country: 'España',
    quote: 'La mejor decisión que he tomado para mi salud. Las recetas son deliciosas y fáciles de seguir. ¡He perdido 5kg sin pasar hambre!',
    imageId: 'testimonial-1',
  },
  {
    name: 'Carlos S.',
    country: 'México',
    quote: 'Increíble variedad. Nunca me aburro de comer sano. Mi energía ha aumentado y me siento mucho mejor en general.',
    imageId: 'testimonial-2',
  },
  {
    name: 'Ana L.',
    country: 'Argentina',
    quote: 'Al principio era escéptica, pero los resultados hablan por sí solos. Toda mi familia ama las nuevas comidas.',
    imageId: 'testimonial-3',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Amado por personas en todo el mundo
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            No solo lo decimos nosotros. Ve lo que nuestros clientes opinan.
          </p>
        </div>

        <div className="mt-12">
          <Carousel
            opts={{
              loop: true,
              align: 'start',
            }}
            plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
              ]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => {
                const image = PlaceHolderImages.find((img) => img.id === testimonial.imageId);
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col items-center text-center p-6">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              data-ai-hint={image.imageHint}
                              width={80}
                              height={80}
                              className="rounded-full mb-4"
                            />
                          )}
                          <p className="text-lg font-medium italic text-foreground/80">"{testimonial.quote}"</p>
                          <div className="mt-4">
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                            <div className="flex justify-center mt-2">
                              {Array(5).fill(0).map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
