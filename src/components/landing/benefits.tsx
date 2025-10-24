'use client';

import {
  UtensilsCrossed,
  Scale,
  Zap,
  CircleDollarSign,
  Clock,
  BedDouble,
  Sparkles,
  Users,
} from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
}

const benefits: Benefit[] = [
  { icon: UtensilsCrossed, title: 'Comer platos deliciosos sin sentir culpa' },
  { icon: Scale, title: 'Bajar de peso sin renunciar al sabor' },
  { icon: Zap, title: 'Tener más energía y vitalidad' },
  { icon: CircleDollarSign, title: 'No gastar mucho en ingredientes' },
  { icon: Clock, title: 'Preparar comidas rápidas y fáciles' },
  { icon: BedDouble, title: 'Dormir mejor y despertar renovado' },
  { icon: Sparkles, title: 'Conseguir una piel más suave y radiante' },
  { icon: Users, title: 'Alimentar mejor a toda tu familia' },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ¿Por qué deberías comprar esto?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Estas recetas son ideales para ti si quieres:
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium text-lg">{benefit.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
