import { MapPin, Calendar, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
const EventLocation = () => {
  return <section id="evento" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-brand text-4xl md:text-6xl text-card-foreground mb-4 animate-fade-in">Localização do acamp´s</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Venha participar do ACAMP'S no melhor local da região
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Informações do Evento */}
          <div className="space-y-8 animate-slide-up">
            <Card className="p-6 bg-gradient-brand text-foreground shadow-brand">
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold">Endereço</h3>
              </div>
              <p className="text-lg leading-relaxed">
                Estr. da Pitanga Seca, 1960<br />
                São Cristóvão - SE<br />
                49100-000
              </p>
            </Card>
            
            <Card className="p-6 bg-card shadow-brand">
              <div className="flex items-center space-x-4 mb-4">
                <Calendar className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-card-foreground">Data</h3>
              </div>
              <p className="text-lg text-card-foreground">15 a 17 de Janeiro, 2026</p>
            </Card>
            
            <Card className="p-6 bg-secondary/20 shadow-brand">
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-card-foreground">Horário</h3>
              </div>
              <p className="text-lg text-card-foreground">Quarta 14h até Domingo 18h</p>
            </Card>
          </div>
          
          {/* Mapa */}
          <div className="animate-fade-in">
            <Card className="p-4 shadow-brand">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.853950367623!2d-46.73549938556713!3d-23.565376784692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5755ea608b47%3A0xf2d061bb5c5b8e94!2sSão Paulo - SP!5e0!3m2!1spt!2sbr!4v1234567890123" width="100%" height="100%" style={{
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