import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const features = [
  "+1500 Recetas Saludables",
  "Guías de nutrición",
  "Planes de comidas semanales",
  "Acceso a comunidad exclusiva"
];

export default function Pricing() {
    return (
        <section id="comprar" className="bg-muted/50">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Elige la mejor oferta para ti
                    </h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        Invierte en tu salud hoy con un pago único y acceso para siempre.
                    </p>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Plan Básico</CardTitle>
                            <CardDescription>Perfecto para empezar tu viaje saludable.</CardDescription>
                            <div className="text-4xl font-bold pt-4">$3,90 <span className="text-lg font-medium text-muted-foreground">USD</span></div>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3">
                                {features.slice(0, 2).map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground mt-4">Acceso por 6 meses</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="outline" className="w-full">
                                <Link href="#">Elegir Básico</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="flex flex-col border-2 border-primary shadow-2xl relative transition-transform hover:scale-105">
                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Más Popular</Badge>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Plan Premium</CardTitle>
                            <CardDescription>Acceso completo y de por vida para una transformación total.</CardDescription>
                            <div className="text-4xl font-bold pt-4">$5,90 <span className="text-lg font-medium text-muted-foreground">USD</span></div>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                             <p className="text-sm font-bold text-primary mt-4">Acceso de por vida</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href="#">Elegir Premium</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-8">
                    Compra con total seguridad. 30 días de garantía sin complicaciones.
                </p>
            </div>
        </section>
    );
}
