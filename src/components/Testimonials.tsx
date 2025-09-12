import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'João Silva',
    role: 'Aventureiro',
    content: 'O ACAMP\'S foi incrível! Produtos de qualidade excepcional e uma experiência inesquecível na natureza.',
    rating: 5,
    location: 'São Paulo, SP'
  },
  {
    id: 2,
    name: 'Maria Santos',
    role: 'Trilheira',
    content: 'Melhor evento de camping que já participei. A organização é perfeita e os produtos são top de linha.',
    rating: 5,
    location: 'Rio de Janeiro, RJ'
  },
  {
    id: 3,
    name: 'Pedro Costa',
    role: 'Campista',
    content: 'Recomendo para todos os amantes da natureza. O ACAMP\'S supera todas as expectativas!',
    rating: 5,
    location: 'Belo Horizonte, MG'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testemunhos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-brand text-4xl md:text-6xl text-card-foreground mb-4 animate-fade-in">
            O que dizem sobre nós
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Experiências reais de quem já viveu a aventura ACAMP'S
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 bg-gradient-brand text-foreground shadow-brand relative">
                    <Quote className="absolute top-4 left-4 w-8 h-8 text-secondary opacity-50" />
                    
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-secondary fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-xl leading-relaxed mb-6 italic">
                        "{testimonial.content}"
                      </p>
                      
                      <div>
                        <h4 className="text-2xl font-bold text-secondary mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-foreground/80">
                          {testimonial.role} • {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent scale-125' 
                    : 'bg-muted hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;