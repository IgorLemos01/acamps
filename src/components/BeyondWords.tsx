import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import beyondWordsImage from '@/assets/beyond-words.jpg';
const BeyondWords = () => {
  return <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#4AC4B5' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-brand text-4xl mb-4 animate-fade-in text-white font-bold md:text-7xl">
            Beyond Words
          </h2>
          <p className="text-xl max-w-2xl mx-auto animate-slide-up text-white font-bold">
            Uma experiência que vai além das palavras desde 1989
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/90 backdrop-blur-sm border-accent shadow-brand p-8 md:p-12">
            <div className="text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
                IMPOSSÍVEL DESCREVER
              </h3>
              
              <p className="text-lg md:text-xl text-card-foreground/80 leading-relaxed">Há mais de 30 anos transformando vidas através de uma experiência única com o amor de Deus que realmente vai além das palavras. O ACAMP'S não é apenas um evento, é a mudança que a sua vida precisa.</p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card className="p-6 bg-primary text-primary-foreground">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">30+</div>
                    <p className="text-sm uppercase tracking-wide">Anos de História</p>
                  </div>
                </Card>
                
                <Card className="p-6 bg-accent text-accent-foreground">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1989</div>
                    <p className="text-sm uppercase tracking-wide">Desde</p>
                  </div>
                </Card>
                
                <Card className="p-6 bg-primary text-primary-foreground">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">∞</div>
                    <p className="text-sm uppercase tracking-wide">Vidas Transformadas</p>
                  </div>
                </Card>
              </div>
              
              <div className="pt-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-12 py-4 rounded-full shadow-glow transition-all duration-300 hover:scale-105" onClick={() => window.location.href = '/inscricao'}>
                  Viva Esta Experiência
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default BeyondWords;