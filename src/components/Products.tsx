import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import camisaBeyondWords from '@/assets/camisa-beyond-words.png';
import camisaMissaoAracaju from '@/assets/camisa-missao-aracaju.jpeg';

const products = [{
  id: 1,
  name: 'Camisa Beyond Words',
  description: 'Camisa oficial ACAMP\'S - Beyond Words. Since 1989, impossível descrever!',
  image: camisaBeyondWords,
  available: true
}, {
  id: 2,
  name: 'Camisa Missão Aracaju 35 Anos',
  description: 'Camisa comemorativa dos 35 anos da Missão Aracaju. Edição especial!',
  image: camisaMissaoAracaju,
  available: true
}];

const Products = () => {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-brand text-4xl md:text-6xl text-foreground mb-4 animate-fade-in">
            Produtos Exclusivos
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto animate-slide-up">Equipamentos de alta qualidade para sua experiência</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <Card key={product.id} className="overflow-hidden bg-card shadow-brand hover:shadow-glow transition-all duration-300 hover:scale-105 group animate-fade-in" style={{
              animationDelay: `${index * 0.2}s`
            }}>
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-center">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    onClick={() => window.open('https://wa.me/5579988801082?text=Olá! Tenho interesse na ' + product.name, '_blank')}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Comprar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;