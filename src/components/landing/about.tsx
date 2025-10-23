'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ¿Quiénes somos?
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground md:text-lg">
            <p>
              Somos una empresa en constante crecimiento. Solo en el último año
              realizamos más de 5.000 ventas.
            </p>
            <p>
              Nuestro objetivo es ayudarte con nuestras recetas y ofrecerte el
              apoyo necesario para que alcances tus resultados.
            </p>
            <p>
              No estás solo(a), puedes contar con nosotros siempre que lo
              necesites. 😉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
