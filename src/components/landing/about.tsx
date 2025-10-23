'use client';

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { useEffect, useState } from 'react';

const chartData = [
  { month: 'Ene', sales: 1200 },
  { month: 'Feb', sales: 1800 },
  { month: 'Mar', sales: 2500 },
  { month: 'Abr', sales: 3200 },
  { month: 'May', sales: 4100 },
  { month: 'Jun', sales: 5213 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-background border rounded-lg shadow-lg">
        <p className="font-bold">{`${
          label
        } : ${new Intl.NumberFormat().format(payload[0].value)}`}</p>
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
              Somos una empresa en constante crecimiento. Solo en el último año
              realizamos más de 5.000 ventas.
            </p>
            <p className="text-muted-foreground md:text-lg">
              Nuestro objetivo es ayudarte con nuestras recetas y ofrecerte el
              apoyo necesario para que alcances tus resultados.
            </p>
            <p className="text-muted-foreground md:text-lg">
              No estás solo(a), puedes contar con nosotros siempre que lo
              necesites. 😉
            </p>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Ventas del Último Año</CardTitle>
                <CardDescription>
                  Crecimiento de ventas en los últimos 6 meses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  {isClient && (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={chartData}
                        margin={{
                          top: 5,
                          right: 20,
                          left: -10,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                          dataKey="month"
                          tick={{ fill: 'hsl(var(--muted-foreground))' }}
                          tickLine={{ stroke: 'hsl(var(--border))' }}
                        />
                        <YAxis
                          tick={{ fill: 'hsl(var(--muted-foreground))' }}
                          tickLine={{ stroke: 'hsl(var(--border))' }}
                        />
                        <Tooltip
                          cursor={{ fill: 'hsl(var(--muted))' }}
                          content={<CustomTooltip />}
                        />
                        <defs>
                          <linearGradient
                            id="colorSales"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="hsl(var(--primary))"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="hsl(var(--primary))"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <Area
                          type="monotone"
                          dataKey="sales"
                          stroke="hsl(var(--primary))"
                          strokeWidth={2}
                          fill="url(#colorSales)"
                          dot={{
                            r: 4,
                            fill: 'hsl(var(--primary))',
                            strokeWidth: 2,
                          }}
                          activeDot={{
                            r: 6,
                            fill: 'hsl(var(--primary))',
                            stroke: 'hsl(var(--background))',
                          }}
                        />
                      </AreaChart>
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
