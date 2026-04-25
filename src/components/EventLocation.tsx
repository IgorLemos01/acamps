import { MapPin, Calendar, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
const EventLocation = () => {
  return <section id="evento" className="py-12 sm:py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-brand text-3xl sm:text-4xl md:text-6xl text-card-foreground mb-4 animate-fade-in">Localização do acamp´s</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up px-2">
            Venha participar do ACAMP'S no melhor local da região
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Informações do Evento */}
          <div className="space-y-4 sm:space-y-8 animate-slide-up">
            <Card className="p-5 sm:p-6 bg-gradient-brand text-foreground shadow-brand">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-secondary shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold">Endereço</h3>
              </div>
              <p className="text-base sm:text-lg leading-relaxed">
                Chácara da Serra<br />
                São Cristóvão - SE
              </p>
            </Card>
            
            <Card className="p-5 sm:p-6 bg-card shadow-brand">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-accent shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground">Data</h3>
              </div>
              <p className="text-base sm:text-lg text-card-foreground">8 a 12 de Julho, 2026</p>
            </Card>
            
            <Card className="p-5 sm:p-6 bg-secondary/20 shadow-brand">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-primary shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground">Horário</h3>
              </div>
              <p className="text-base sm:text-lg text-card-foreground">Quarta 14h até Domingo 18h</p>
            </Card>
          </div>
          
          {/* Mapa */}
          <div className="animate-fade-in">
            <Card className="p-3 sm:p-4 shadow-brand">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe src="https://www.google.com/maps?q=-10.7674442,-37.2963354&hl=pt&z=17&output=embed" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg"></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default EventLocation;