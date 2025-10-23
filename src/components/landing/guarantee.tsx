'use client';

import Image from 'next/image';

export default function Guarantee() {
  return (
    <section id="garantia" className="bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center border-2 border-primary/20 bg-card p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="mx-auto mb-6 flex justify-center">
                <Image src="/images/Garantia.webp" alt="Garantía de Satisfacción" width={80} height={80} />
            </div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                ¡Prueba primero y decide después!
            </h2>
            <div className="mt-4 max-w-xl mx-auto">
                <p className="text-muted-foreground md:text-lg">
                    Puedes comprar con total seguridad. Si el contenido descrito arriba no es el mismo que recibes, tienes 30 días de garantía y te devolveremos tu dinero sin complicaciones.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
