const SecurePaymentIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
);
  
const InstantAccessIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19-7-7 7-7"></path>
      <path d="m19 19-7-7 7-7"></path>
    </svg>
);
  
const HotmartLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 100 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.34 24.75V0.25H30.49C35.1567 0.25 38.69 1.15 41.09 2.95C43.5233 4.71667 44.74 7.23333 44.74 10.5C44.74 12.6333 44.24 14.4833 43.24 16.05C42.2733 17.5833 40.89 18.7333 39.09 19.5L45.49 24.75H38.29L32.89 19.3H28.84V24.75H22.34ZM28.84 14.7H30.49C32.1233 14.7 33.3233 14.2 34.09 13.2C34.89 12.2 35.29 11.0167 35.29 9.65C35.29 8.28333 34.89 7.15 34.09 6.25C33.3233 5.31667 32.1233 4.85 30.49 4.85H28.84V14.7Z" fill="currentColor"/>
        <path d="M50.4903 24.75V0.25H56.9903V24.75H50.4903Z" fill="currentColor"/>
        <path d="M62.0673 24.75V0.25H68.5673V19.6H79.6673V24.75H62.0673Z" fill="currentColor"/>
        <path d="M84.7454 24.75V0.25H91.2454V10.3L99.0954 0.25H107.595L97.5454 12.15L108.245 24.75H99.4954L91.2454 14.95V24.75H84.7454Z" fill="currentColor"/>
        <path d="M0.830078 12.5C0.830078 5.86 6.13008 0.5 12.6301 0.5C19.1301 0.5 24.4301 5.86 24.4301 12.5C24.4301 19.14 19.1301 24.5 12.6301 24.5C6.13008 24.5 0.830078 19.14 0.830078 12.5ZM17.1601 7.2C16.5901 6.66 15.6901 6.42 14.4601 6.42H10.8001V18.57H14.4601C15.6901 18.57 16.5901 18.33 17.1601 17.79C17.7601 17.25 18.0601 16.32 18.0601 15.03V9.99C18.0601 8.67 17.7601 7.74 17.1601 7.2Z" fill="currentColor"/>
    </svg>
);


export default function Partners() {
    const partners = [
      { name: 'Hotmart', icon: HotmartLogo },
      { name: 'Pago 100% seguro', icon: SecurePaymentIcon },
      { name: 'Acceso instantáneo', icon: InstantAccessIcon },
    ];
  
    return (
      <section id="partners" className="py-12 bg-background">
        <div className="container">
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-center text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              Con la confianza de más de 5.000 clientes satisfechos
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <partner.icon className="h-6 w-auto" />
                  <span className="text-sm font-medium hidden sm:inline">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  