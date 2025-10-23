import Link from 'next/link';
import { CheckCircle2, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const basicFeatures = [
  { text: "+1500 Recetas Saludables", icon: CheckCircle2, className: "text-green-500" },
  { text: "Guías de nutrición", icon: CheckCircle2, className: "text-green-500" },
  { text: "Planes de comidas semanales", icon: CheckCircle2, className: "text-green-500" },
  { text: "Acceso a comunidad exclusiva", icon: CheckCircle2, className: "text-green-500" }
];

const premiumFeatures = [
  ...basicFeatures,
  { text: "50 Recetas de Postres sin Azúcar", icon: CheckCircle2, className: "text-green-500" },
  { text: "Recetas de Tortillas Saludables", icon: CheckCircle2, className: "text-green-500" },
  { text: "Recetas de Sopas y Cremas", icon: CheckCircle2, className: "text-green-500" },
  { text: "Recetas de Salsas y Patés", icon: CheckCircle2, className: "text-green-500" },
  { text: "Recetas de Panes sin Gluten", icon: CheckCircle2, className: "text-green-500" },
  { text: "Recetas de Harinas sin Gluten", icon: CheckCircle2, className: "text-green-500" },
  { text: "Pizzas Saludables", icon: CheckCircle2, className: "text-green-500" },
  { text: "Detox Hepático, Limpia tu Hígado en 7 Días", icon: CheckCircle2, className: "text-green-500" },
  { text: "Bono: Tabla Personalizada", icon: Gift, className: "text-orange-500" },
  { text: "Bono: Lista de Compras Inteligente", icon: Gift, className: "text-orange-500" },
  { text: "Bono: 15 Bebidas Saludables", icon: Gift, className: "text-orange-500" },
  { text: "Bono: 15 Recetas de Helados", icon: Gift, className: "text-orange-500" },
];

export default function Pricing() {
    return (
        <section id="comprar" className="bg-primary text-primary-foreground">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Elige la mejor oferta para ti
                    </h2>
                    <p className="mt-4 text-primary-foreground/80 md:text-xl">
                        Invierte en tu salud hoy con un pago único y acceso para siempre.
                    </p>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
                    <Card className="flex flex-col bg-card">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Plan Básico</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3">
                                {basicFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <feature.icon className={`w-5 h-5 flex-shrink-0 mt-1 ${feature.className}`} />
                                        <span>{feature.text}</span>
                                    </li>

                                ))}
                            </ul>
                            <p className="text-sm text-muted-foreground mt-4">Acceso por 6 meses</p>
                        </CardContent>
                        <CardFooter className="flex-col items-stretch gap-4">
                            <div className="text-4xl font-bold text-center text-card-foreground">$3,90 <span className="text-lg font-medium text-muted-foreground">USD</span></div>
                            <Button asChild variant="outline" className="w-full">
                                <Link href="#">Elegir Básico</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="flex flex-col border-2 border-accent shadow-2xl relative transition-transform hover:scale-105 bg-card">
                        <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">Más Popular</Badge>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Plan Premium</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-3">
                                {premiumFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <feature.icon className={`w-5 h-5 flex-shrink-0 mt-1 ${feature.className}`} />
                                        <span>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                             <p className="text-sm font-bold text-primary mt-4">Acceso de por vida</p>
                        </CardContent>
                        <CardFooter className="flex-col items-stretch gap-4">
                            <div className="text-4xl font-bold text-center text-card-foreground">$5,90 <span className="text-lg font-medium text-muted-foreground">USD</span></div>
                            <Button asChild className="w-full">
                                <Link href="#">Elegir Premium</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <p className="text-center text-sm text-primary-foreground/80 mt-8">
                    Compra con total seguridad. 30 días de garantía sin complicaciones.
                </p>
            </div>
        </section>
    );
}
