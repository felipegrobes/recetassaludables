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
        'Inmediatamente después de la confirmación del pago, recibirás un correo electrónico de Hotmart con un enlace para acceder y descargar todos tus libros digitales. El acceso es instantáneo.',
    },
    {
      question: '¿Es seguro comprar aquí?',
      answer:
        'Sí, 100% seguro. El pago se procesa a través de Hotmart, una de las plataformas de productos digitales más grandes y seguras del mundo, que utiliza encriptación de extremo a extremo.',
    },
    {
      question: '¿Y si no me gusta el contenido?',
      answer:
        'No hay problema. Ofrecemos una garantía de satisfacción incondicional de 30 días. Si no estás satisfecho por cualquier motivo, solo tienes que solicitar el reembolso y te devolveremos el 100% de tu dinero.',
    },
    {
      question: '¿Durante cuánto tiempo tendré acceso?',
      answer:
        'Depende del plan que elijas. El Plan Básico te da acceso por 6 meses. Con el Plan Premium, el acceso es tuyo para toda la vida, incluyendo todas las futuras actualizaciones sin coste adicional.',
    },
    {
      question: '¿Los libros son físicos o digitales?',
      answer:
        'Todos nuestros libros son 100% digitales en formato PDF. Esto te permite acceder a ellos desde cualquier dispositivo (móvil, tablet, ordenador) en cualquier momento y lugar.',
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
            <p className="mt-4 text-muted-foreground md:text-xl">
              ¿Tienes dudas? Aquí resolvemos las más comunes.
            </p>
          </div>
  
          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
  