'use client';

import {
  Coffee,
  Fish,
  Cookie,
  Soup,
  Sandwich,
  Grape,
} from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { type LucideIcon } from 'lucide-react';

interface BookContentItem {
  icon: LucideIcon;
  title: string;
}

const bookContents: BookContentItem[] = [
  { icon: Coffee, title: 'Desayunos y Meriendas' },
  { icon: Fish, title: 'Almuerzos y Cenas' },
  { icon: Cookie, title: 'Dulces y Postres' },
  { icon: Grape, title: 'Salsas y Patés' },
  { icon: Soup, title: 'Sopas y Cremas' },
  { icon: Sandwich, title: 'Panes Saludables' },
];

export default function BookContents() {
  return (
    <section id="contenido" className="bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Mira lo que vas a recibir en el libro:
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookContents.map((item, index) => (
            <Card
              key={index}
              className="text-center group p-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
