import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const bonuses = [
    {
        image: '/images/Tabla.webp',
        title: 'Tabla Personalizada',
        description: 'Una guía para adaptar las recetas a tus objetivos específicos.',
    },
    {
        image: '/images/Lista.webp',
        title: 'Lista de Compras Inteligente',
        description: 'Listas de compras semanales para ahorrar tiempo y dinero.',
    },
    {
        image: '/images/15 Bebidas.webp',
        title: '15 Bebidas Saludables',
        description: 'Descubre bebidas deliciosas para energizar tu día.',
    },
    {
        image: '/images/15 Recetas.webp',
        title: '15 Recetas de Helados',
        description: 'Postres saludables para disfrutar sin culpa.',
    },
];

export default function Bonuses() {
    return (
        <section id="bonos" className="bg-background">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Y si compras hoy, recibes <span className="text-primary">4 Bonos Especiales</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        Estos regalos exclusivos están diseñados para acelerar tus resultados y hacer tu vida más fácil.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {bonuses.map((bonus, index) => (
                        <Card key={index} className="group transition-all hover:shadow-xl hover:bg-muted/50">
                            <CardContent className="p-6 flex items-start gap-6">
                                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary transition-colors flex-shrink-0">
                                    <Image src={bonus.image} alt={bonus.title} width={40} height={40} className="w-8 h-8 object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-headline">{bonus.title}</h3>
                                    <p className="mt-1 text-muted-foreground">{bonus.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}