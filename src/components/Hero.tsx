import { Button } from '@/components/ui/button';
import heroImage from '@/assets/acamp-banner.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[60svh] md:min-h-[100svh] flex items-end justify-center overflow-hidden pb-12 sm:pb-20 md:pb-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroImage})` }} 
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center animate-slide-up">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-4 rounded-full shadow-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto" 
            onClick={() => window.location.href = '/inscricao'}
          >
            Inscreva-se Agora
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-primary font-bold text-base sm:text-lg px-6 sm:px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto bg-background/50 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none" 
            onClick={() => document.getElementById('evento')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Localização
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-primary font-bold text-base sm:text-lg px-6 sm:px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto bg-background/50 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none" 
            onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
