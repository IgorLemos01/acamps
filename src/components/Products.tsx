import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import produtoBarraca from '@/assets/produto-barraca.jpg';
import produtoMochila from '@/assets/produto-mochila.jpg';
import produtoKit from '@/assets/produto-kit.jpg';
const products = [{
  id: 1,
  name: 'Barraca Premium',
  price: 'R$ 299,90',
  image: produtoBarraca,
  description: 'Barraca resistente para 4 pessoas, ideal para camping'
}, {
  id: 2,
  name: 'Mochila Adventure',
  price: 'R$ 189,90',
  image: produtoMochila,
  description: 'Mochila de trilha com 50L de capacidade'
}, {
  id: 3,
  name: 'Kit Sobrevivência',
  price: 'R$ 129,90',
  image: produtoKit,
  description: 'Kit completo para aventuras ao ar livre'
}];
const Products = () => {
  const handleWhatsAppContact = (productName: string) => {
    const message = `Olá! Tenho interesse no produto: ${productName} do evento ACAMP'S`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-brand text-4xl md:text-6xl text-foreground mb-4 animate-fade-in">
            Produtos Exclusivos
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto animate-slide-up">Equipamentos de alta qualidade para sua experiência</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => <Card key={product.id} className="overflow-hidden bg-card shadow-brand hover:shadow-glow transition-all duration-300 hover:scale-105 group animate-fade-in" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="relative overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-accent">
                    {product.price}
                  </span>
                  <Button onClick={() => handleWhatsAppContact(product.name)} className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow hover:shadow-brand transition-all duration-300">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Comprar
                  </Button>
                </div>
              </div>
            </Card>)}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-4 rounded-full shadow-glow hover:shadow-brand transition-all duration-300 hover:scale-105" onClick={() => handleWhatsAppContact('todos os produtos')}>
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>;
};
export default Products;