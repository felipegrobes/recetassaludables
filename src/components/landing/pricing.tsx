import Link from 'next/link';
import { CheckCircle2, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const basicFeatures = [
  { text: "+1500 Recetas Saludables", icon: CheckCircle2, className: "text-green-500" }
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
  { text: "Recetas de té", icon: CheckCircle2, className: "text-green-500" },
  { text: "Regalo 01: Tabla Personalizada", icon: Gift, className: "text-orange-500" },
  { text: "Regalo 02: Lista de Compras Inteligente", icon: Gift, className: "text-orange-500" },
  { text: "Regalo 03: 15 Bebidas Saludables", icon: Gift, className: "text-orange-500" },
  { text: "Regalo 04: 15 Recetas de Helados", icon: Gift, className: "text-orange-500" },
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
                    <Card className="flex flex-col bg-card text-card-foreground">
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
                        <CardFooter className="flex-col items-stretch gap-2">
                            <div className='text-center'>
                                <p className="text-xl line-through text-destructive">De $19,90 USD</p>
                                <p className="text-sm text-muted-foreground">por solo</p>
                            </div>
                            <div className="text-5xl font-bold text-center">$3,90 <span className="text-2xl font-medium text-muted-foreground">USD</span></div>

                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="outline" className="w-full">Elegir Básico</Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle className="text-center text-2xl font-bold text-primary">¡Espera! Oferta Única</AlertDialogTitle>
                                  <AlertDialogDescription className="text-center text-lg">
                                    ¡Aprovecha y llévate el <span className="font-bold text-accent">Plan Premium</span> con Acceso de por Vida y todos los regalos por solo <span className="font-bold text-primary">$4,90 USD</span>!
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter className="sm:justify-center gap-4">
                                  <AlertDialogAction asChild className="w-full sm:w-auto animate-breathing">
                                    <Link href="https://pay.hotmart.com/D102577074B?checkoutMode=10&off=u2l4mhb0">APROVECHAR EL DESCUENTO</Link>
                                  </AlertDialogAction>
                                  <AlertDialogCancel asChild>
                                      <Button variant="outline" className="w-full sm:w-auto mt-0" asChild>
                                        <Link href="https://pay.hotmart.com/X102576694W?checkoutMode=10">
                                            COMPRAR SOLO EL BÁSICO
                                        </Link>
                                      </Button>
                                  </AlertDialogCancel>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>


                            <div className="text-center mt-2 max-w-md mx-auto">
                                <p className="inline-block bg-destructive text-destructive-foreground font-bold text-sm px-2 py-1">¡NO TE PREOCUPES!</p>
                                <p className="text-xs text-muted-foreground mt-2">
                                    El valor de $3,90 USD se convertirá automáticamente a tu moneda y podrás pagar con métodos locales de tu país.
                                </p>
                                <p className="text-sm font-bold text-primary mt-4">¡Tenemos una oferta MÁS ventajosa para ti! Mira abajo👇</p>
                            </div>
                        </CardFooter>
                    </Card>

                    <Card className="flex flex-col border-2 border-accent shadow-2xl relative transition-transform hover:scale-105 bg-card text-card-foreground">
                        <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">Más Popular</Badge>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Plan Premium</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                             <div className="mb-4 flex justify-center">
                                <Image src="/images/Logo.webp" alt="eBook Premium" width={610} height={407} className="rounded-md" />
                            </div>
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
                        <CardFooter className="flex-col items-stretch gap-2">
                            <div className='text-center'>
                                <p className="text-xl line-through text-destructive">De $49,90 USD</p>
                                <p className="text-sm text-muted-foreground">por solo</p>
                            </div>
                            <div className="text-5xl font-bold text-center">$5,90 <span className="text-2xl font-medium text-muted-foreground">USD</span></div>
                            <Button asChild className="w-full animate-breathing">
                                <Link href="https://pay.hotmart.com/D102577074B?checkoutMode=10">Elegir Premium</Link>
                            </Button>
                            <div className="text-center mt-2 max-w-md mx-auto">
                                <p className="inline-block bg-destructive text-destructive-foreground font-bold text-sm px-2 py-1">¡NO TE PREOCUPES!</p>
                                <p className="text-xs text-muted-foreground mt-2">
                                    El valor de $5,90 USD se convertirá automáticamente a tu moneda y podrás pagar con métodos locales de tu país.
                               
                                </p>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
