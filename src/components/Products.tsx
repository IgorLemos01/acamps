import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const products = [{
  id: 1,
  name: 'Produtos em Breve',
  description: 'Aguarde... produtos exclusivos chegando em breve!'
}, {
  id: 2,
  name: 'Equipamentos Especiais',
  description: 'Aguarde... equipamentos de alta qualidade para sua aventura!'
}, {
  id: 3,
  name: 'Acessórios Únicos',
  description: 'Aguarde... acessórios exclusivos do ACAMP\'S!'
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={product.id} className="overflow-hidden bg-card shadow-brand hover:shadow-glow transition-all duration-300 hover:scale-105 group animate-fade-in" style={{
              animationDelay: `${index * 0.2}s`
            }}>
              <div className="relative overflow-hidden">
                <div className="w-full h-64 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⏳</div>
                    <div className="text-lg font-semibold text-muted-foreground">Aguarde...</div>
                  </div>
                </div>
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
                  <Button disabled className="bg-muted text-muted-foreground cursor-not-allowed">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Em Breve
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" disabled className="bg-muted text-muted-foreground font-bold text-lg px-8 py-4 rounded-full cursor-not-allowed">
            Produtos Em Breve
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;