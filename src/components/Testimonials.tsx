import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
const testimonials = [{
  id: 1,
  name: 'Samara Waleska',
  content: 'Minha melhor decisão, enquanto participante do ACAMP\'S de 2022, foi estar com a mente aberta, permitindo viver todas as oportunidades oferecidas: fazer amigos, aproveitar a gincana e, principalmente, ter uma verdadeira experiência com Deus. É preciso ter coragem para abrir o coração, para se deixar preencher por essa misericórdia divina, para renunciar ao que for necessário pelo Senhor. Entre muitas angústias, pedi essa coragem. Hoje, apenas retribuo o que me foi dado – acreditando, servindo, intercedendo e zelando pelas almas que me são confiadas –, e vivo a alegria de um amor que transborda!'
}, {
  id: 2,
  name: 'Adria Andrade',
  content: 'Vou começar dizendo o que todo mundo fala, é impossível descrever. Quando eu cheguei lá imaginei que seria só mais um fim de semana, não imaginava que eu ia encontrar o que eu nem sabia que tava faltando na minha vida. Deus nos surpreende todos os dias, mas naquele final de semana específico eu fiquei encantada, encantada com o amor de Deus, encantada com o bem que ele me faz, encantada com o quanto ele fez falta na minha vida, e saí de lá com a certeza de que era assim que eu queria me sentir daqui pra frente, com a certeza de que eu nunca vou estar sozinha e de que eu tinha que retribuir como eu posso, tudo que ele fez e faz por mim, nesse fim de semana ele me deu pessoas e aprendizados que eu vou levar pra vida toda, e agora eu só penso em servi-lo e me entregar inteiramente a ele. Não vejo a hora de poder ajudar a outros jovens a vivenciar essa experiência incrível.'
}, {
  id: 3,
  name: 'Maya Cesar',
  content: 'Ao ser convidada para ir ao Acamps, não tinha muita esperança. Passava por processos difíceis em minha vida e não via sentido nela. Porém, com a insistência de uma amiga que desejava acima de tudo salvar minha alma, decidi ir. E definitivamente é impossível descrever. O Acamps mudou minha vida. Senti uma felicidade que nunca havia experimentado antes. Nele, encontrei o sentido de viver e, mesmo sem entender muito bem, já sentia a felicidade de ser toda Dele. Os vazios que eu tanto tentei preencher com o mundo transbordavam de amor esponsal. A partir daí, encontrei uma verdadeira família. E mesmo após quase três anos da minha experiência com Deus no Acamps, ainda sinto meu coração arder só de pensar nele. O Acamps não só transformou a minha vida, mas devolveu o sentido de tê-la.'
}];
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return <section id="testemunhos" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-brand text-4xl md:text-6xl text-foreground mb-4 animate-fade-in">testemunhos do acamp´s</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Experiências reais de quem já viveu a aventura ACAMP'S
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex transition-all duration-700 ease-in-out" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
              {testimonials.map(testimonial => <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="mx-auto max-w-4xl p-10 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-primary/20 shadow-2xl relative overflow-hidden group hover:shadow-brand transition-all duration-500">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                    
                    <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                    
                    <div className="relative text-center">
                      <p className="text-lg md:text-xl leading-relaxed mb-8 italic px-8 text-neutral-950">
                        "{testimonial.id === 1 ? <>Minha <span className="text-primary font-semibold">melhor decisão</span>, enquanto participante do ACAMP'S de 2022, foi estar com a mente aberta, permitindo viver todas as oportunidades oferecidas: fazer amigos, aproveitar a gincana e, principalmente, ter uma <span className="text-accent font-semibold">verdadeira experiência com Deus</span>. É preciso ter <span className="text-primary font-semibold">coragem</span> para abrir o coração, para se deixar preencher por essa <span className="text-accent font-semibold">misericórdia divina</span>, para renunciar ao que for necessário pelo Senhor. Entre muitas angústias, pedi essa coragem. Hoje, apenas retribuo o que me foi dado – acreditando, servindo, intercedendo e zelando pelas almas que me são confiadas –, e vivo a <span className="text-primary font-semibold">alegria de um amor que transborda</span>!</> : testimonial.id === 2 ? <>Vou começar dizendo o que todo mundo fala, é <span className="text-primary font-semibold">impossível descrever</span>. Quando eu cheguei lá imaginei que seria só mais um fim de semana, não imaginava que eu ia encontrar o que eu nem sabia que tava faltando na minha vida. <span className="text-accent font-semibold">Deus nos surpreende</span> todos os dias, mas naquele final de semana específico eu fiquei <span className="text-primary font-semibold">encantada</span>, encantada com o <span className="text-accent font-semibold">amor de Deus</span>, encantada com o bem que ele me faz, encantada com o quanto ele fez falta na minha vida, e saí de lá com a certeza de que era assim que eu queria me sentir daqui pra frente, com a certeza de que eu <span className="text-primary font-semibold">nunca vou estar sozinha</span> e de que eu tinha que retribuir como eu posso, tudo que ele fez e faz por mim, nesse fim de semana ele me deu pessoas e aprendizados que eu vou levar pra vida toda, e agora eu só penso em <span className="text-accent font-semibold">servi-lo e me entregar inteiramente a ele</span>. Não vejo a hora de poder ajudar a outros jovens a vivenciar essa <span className="text-primary font-semibold">experiência incrível</span>.</> : <>Ao ser convidada para ir ao Acamps, não tinha muita esperança. Passava por processos difíceis em minha vida e não via sentido nela. Porém, com a insistência de uma amiga que desejava acima de tudo salvar minha alma, decidi ir. E definitivamente é <span className="text-primary font-semibold">impossível descrever</span>. O Acamps <span className="text-accent font-semibold">mudou minha vida</span>. Senti uma <span className="text-primary font-semibold">felicidade que nunca havia experimentado antes</span>. Nele, encontrei o <span className="text-accent font-semibold">sentido de viver</span> e, mesmo sem entender muito bem, já sentia a felicidade de ser toda Dele. Os vazios que eu tanto tentei preencher com o mundo transbordavam de <span className="text-primary font-semibold">amor esponsal</span>. A partir daí, encontrei uma <span className="text-accent font-semibold">verdadeira família</span>. E mesmo após quase três anos da minha experiência com Deus no Acamps, ainda sinto meu coração arder só de pensar nele. O Acamps não só transformou a minha vida, mas <span className="text-primary font-semibold">devolveu o sentido de tê-la</span>.</>}"
                      </p>
                      
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mr-4"></div>
                        <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {testimonial.name}
                        </h4>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent ml-4"></div>
                      </div>
                    </div>
                  </Card>
                </div>)}
            </div>
          </div>
          
          {/* Modern indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`relative overflow-hidden rounded-full transition-all duration-300 ${index === currentIndex ? 'w-12 h-3 bg-primary shadow-glow' : 'w-3 h-3 bg-muted hover:bg-primary/50'}`}>
                {index === currentIndex && <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>}
              </button>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;