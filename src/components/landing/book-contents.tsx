'use client';

import Image from 'next/image';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BookContentItem {
  image: string;
  title: string;
}

const bookContents: BookContentItem[] = [
  { image: '/images/Dulces.webp', title: 'Dulces y Postres' },
  { image: '/images/Desayunos.webp', title: 'Desayunos y Meriendas' },
  { image: '/images/Almuerzos.webp', title: 'Almuerzos y Cenas' },
  { image: '/images/Salsas.webp', title: 'Salsas y Patés' },
  { image: '/images/Sopas.webp', title: 'Sopas y Cremas' },
  { image: '/images/Panes.webp', 'title': 'Panes Saludables' },
];

export default function BookContents() {
  return (
    <section id="contenido" className="bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Mira lo que vas a recibir en los libros:
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookContents.map((item, index) => (
            <Card
              key={index}
              className="text-center group p-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 overflow-hidden border-primary/20"
            >
              <CardHeader className="items-center p-0">
                <div className="w-full aspect-square relative mb-4 p-5">
                  <Image src={item.image} alt={item.title} width={400} height={400} objectFit="cover" className="rounded-[10%]" />
                </div>
                <CardTitle className="text-lg font-semibold px-4 pb-4">{item.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <p className="text-center text-2xl font-bold mt-8">
            Y mucho más...
        </p>
        <div className="mt-8 text-center">
          <Button asChild size="lg">
            <Link href="#regalos">¡Quiero las Recetas!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
