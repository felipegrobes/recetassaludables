import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: '¿Cómo recibiré los libros después de la compra?',
    answer:
      'Una vez realizada la compra, recibirás en tu correo electrónico el enlace de acceso. Si necesitas ayuda, escríbenos a: digitalpay.ofc@gmail.com',
  },
  {
    question: '¿Es seguro comprar aquí?',
    answer:
      '¡Sí! Es 100% seguro. La transacción está protegida con la tecnología de seguridad avanzada de Hotmart (empresa líder en pagos y alojamiento de productos digitales).',
  },
  {
    question: '¿Y si no me gusta el contenido?',
    answer:
      'Tienes 30 días de garantía incondicional. Si no te gusta por cualquier motivo, te devolveemos el 100% de tu dinero, sin complicaciones.',
  },
  {
    question: '¿Durante cuánto tiempo tendré acceso?',
    answer:
      'Actualmente tenemos 2 planes disponibles:\n\nPlan Básico → Acceso semestral (6 meses)\n\nPlan Premium → Acceso de por vida',
  },
  {
    question: '¿Los libros son físicos o digitales?',
    answer:
      'Los libros son 100% digitales (formato eBook PDF). Puedes leerlos en tu celular, tablet o computadora, donde y cuando quieras.',
  },
];

export default function Faq() {
  return (
    <section id="preguntas-frecuentes" className="bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg"
              >
                <AccordionTrigger className="text-lg text-left px-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground whitespace-pre-line px-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="#comprar">¡Quiero las Recetas!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
