import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-acamp.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-brand text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 animate-fade-in">
          ACAMP'S
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-8 animate-slide-up font-light">
          O maior evento de aventura e camping da região
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-4 rounded-full shadow-glow transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Produtos
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-primary font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('evento')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Localização
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;