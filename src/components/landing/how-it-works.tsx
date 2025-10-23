import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const steps = [
    {
        title: 'Elige tu plan favorito',
        description: 'Selecciona la oferta que mejor se adapte a tus necesidades y presupuesto.',
        imageId: 'how-it-works-1',
    },
    {
        title: 'Realiza el pago seguro',
        description: 'Paga con total confianza a través de Hotmart, la plataforma más segura.',
        imageId: 'how-it-works-2',
    },
    {
        title: 'Recibe acceso instantáneo',
        description: 'Obtén tus libros digitales al instante y empieza a cocinar hoy mismo.',
        imageId: 'how-it-works-3',
    },
];

export default function HowItWorks() {
    return (
        <section id="como-funciona">
            <div className="container text-center">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    ¿Cómo funciona?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                    En solo tres simples pasos, tendrás acceso a un mundo de sabor y salud.
                </p>

                <div className="mt-12 grid md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2" />
                    <div className="hidden md:block absolute top-1/2 left-0 w-full" >
                        <div className="flex justify-around">
                            <div className="w-8 h-8 bg-background border-2 border-primary rounded-full z-10" />
                            <div className="w-8 h-8 bg-background border-2 border-primary rounded-full z-10" />
                            <div className="w-8 h-8 bg-background border-2 border-primary rounded-full z-10" />
                        </div>
                    </div>
                
                    {steps.map((step, index) => {
                        const image = PlaceHolderImages.find((img) => img.id === step.imageId);
                        return (
                            <div key={index} className="flex flex-col items-center gap-4 relative">
                                <div className="md:hidden w-8 h-8 mb-2 bg-background border-2 border-primary rounded-full z-10 flex items-center justify-center font-bold text-primary">{index + 1}</div>
                                {image && (
                                    <Image
                                        src={image.imageUrl}
                                        alt={image.description}
                                        data-ai-hint={image.imageHint}
                                        width={300}
                                        height={200}
                                        className="rounded-lg shadow-md aspect-[4/3] object-cover"
                                    />
                                )}
                                <h3 className="text-2xl font-bold font-headline mt-4">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16">
                    <Button asChild size="lg">
                        <Link href="#comprar">Comienza ahora</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
