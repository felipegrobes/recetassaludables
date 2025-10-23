import Link from 'next/link';
import { Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Utensils className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold font-headline">1500 Recetas</span>
            </Link>
            <p className="text-muted-foreground">
              Transforma tu alimentación y vive mejor.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-headline">Menú</h4>
            <ul className="space-y-2">
              <li><Link href="#inicio" className="text-muted-foreground hover:text-primary">Inicio</Link></li>
              <li><Link href="#como-funciona" className="text-muted-foreground hover:text-primary">Cómo funciona</Link></li>
              <li><Link href="#testimonios" className="text-muted-foreground hover:text-primary">Testimonios</Link></li>
              <li><Link href="#preguntas-frecuentes" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-headline">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Política de Privacidad</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Términos de Uso</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-headline">Newsletter</h4>
            <p className="text-muted-foreground mb-4">Recibe tips saludables en tu correo.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Tu email" className="bg-background" />
              <Button type="submit">Suscribirme</Button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} 1500 Recetas Saludables | Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
