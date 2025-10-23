'use client';

import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const chartData = [
  { name: 'Ventas', total: 5213 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-background border rounded-lg shadow-lg">
        <p className="font-bold">{`${label} : ${new Intl.NumberFormat().format(payload[0].value)}`}</p>
      </div>
    );
  }
  return null;
};


export default function AboutUs() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="quienes-somos" className="bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
              ¿Quiénes somos?
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Somos una empresa en constante crecimiento. Solo en el último año realizamos más de 5.000 ventas.
            </p>
            <p className="text-muted-foreground md:text-lg">
              Nuestro objetivo es ayudarte con nuestras recetas y ofrecerte el apoyo necesario para que alcances tus resultados.
            </p>
            <p className="text-muted-foreground md:text-lg">
              No estás solo(a), puedes contar con nosotros siempre que lo necesites. 😉
            </p>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Ventas del Último Año</CardTitle>
                <CardDescription>Total de ventas realizadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                {isClient && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} layout="vertical" margin={{ left: 10 }}>
                      <XAxis type="number" hide />
                      <YAxis type="category" dataKey="name" hide />
                      <Tooltip cursor={{fill: 'hsl(var(--muted))'}} content={<CustomTooltip />} />
                      <Bar dataKey="total" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={40}>
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
