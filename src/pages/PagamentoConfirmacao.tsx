import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';

const PagamentoConfirmacao = () => {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Realizei o pagamento via cartão e gostaria de enviar o comprovante da minha inscrição no ACAMP\'S.';
    const whatsappUrl = `https://wa.me/5579988801082?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <a href="/" className="font-brand text-4xl md:text-6xl text-foreground mb-4 animate-fade-in hover:text-primary transition-colors duration-300 inline-block">
              ACAMP'S
            </a>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
              Pagamento Iniciado
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card shadow-brand animate-slide-up text-center">
              <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
              
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Quase lá!
              </h3>
              
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
                <p className="text-lg text-card-foreground font-semibold mb-2">
                  Após finalizar o pagamento, envie o comprovante pelo WhatsApp para confirmar sua inscrição.
                </p>
                <p className="text-muted-foreground">
                  Nossa equipe irá validar seu pagamento e confirmar sua participação no ACAMP'S.
                </p>
              </div>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 text-lg shadow-glow transition-all duration-300 hover:scale-105 rounded-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar Comprovante no WhatsApp
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PagamentoConfirmacao;
