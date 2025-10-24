import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const fontInter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: '1500 Recetas Saludables - NutriRevive eBooks',
  description:
    '¡Más de 1500 Recetas Saludables que Cambiarán tu Vida para Siempre!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontPoppins.variable,
          fontInter.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
