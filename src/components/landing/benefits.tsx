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
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
      <section id="beneficios" className="bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              ¿Por qué deberías comprar esto?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Estas recetas son ideales para ti si quieres:
            </p>
          </div>
  
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="text-center group p-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <benefit.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{benefit.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }
  