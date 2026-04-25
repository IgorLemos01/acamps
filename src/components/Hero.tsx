import { Button } from '@/components/ui/button';
import heroImage from '@/assets/acamp-banner.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[40svh] md:min-h-screen flex flex-col justify-end overflow-hidden pb-12 md:pb-32">
      {/* Background Image - Ajustada para reduzir o zoom no mobile */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroImage})` }} 
      />
      
      {/* Gradiente: Apenas visível no PC para dar contraste aos botões */}
      <div className="hidden md:block absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Content: Escondido no telemóvel (hidden) e visível a partir do PC (md:block) */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto hidden md:block">
        <div className="flex flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-4 rounded-full shadow-glow transition-all duration-300 hover:scale-105" 
            onClick={() => window.location.href = '/inscricao'}
          >
            Inscreva-se Agora
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white/80 text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-black/20 backdrop-blur-sm" 
            onClick={() => document.getElementById('evento')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Localização
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white/80 text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-black/20 backdrop-blur-sm" 
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
