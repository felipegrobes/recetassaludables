import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldCheck, BadgeCheck, DownloadCloud } from 'lucide-react';

const trustIcons = [
    { icon: BadgeCheck, text: 'Garantía 30 días' },
    { icon: ShieldCheck, text: 'Pago 100% Seguro' },
    { icon: DownloadCloud, text: 'Acceso Instantáneo' },
];

export default function Cta() {
    return (
        <section id="cta-final" className="clean-background text-primary-foreground">
            <div className="container text-center">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto">
                    ¡Empieza hoy a transformar tu salud con más de 1500 recetas!
                </h2>
                <p className="mt-6 text-primary-foreground/80 md:text-xl max-w-2xl mx-auto">
                    No esperes más para sentirte mejor, tener más energía y disfrutar de comida deliciosa sin culpa.
                </p>
                <div className="mt-10">
                    <Button asChild size="lg" variant="secondary" className="text-lg h-14 px-10 group bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all">
                        <Link href="#comprar">
                            ¡Quiero mis Recetas Ahora!
                            <span className="ml-2 text-2xl group-hover:rotate-12 transition-transform">🔥</span>
                        </Link>
                    </Button>
                </div>
                <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                    {trustIcons.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                            <item.icon className="w-5 h-5 text-white" />
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
