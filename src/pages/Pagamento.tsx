import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, CreditCard, Users } from 'lucide-react';

const Pagamento = () => {
  const handleWhatsAppClick = () => {
    window.open('https://contate.me/5579988801082', '_blank');
  };

  const handleParticipanteClick = () => {
    window.open('https://mpago.la/2JiHjhK', '_blank');
  };

  const handleServoClick = () => {
    window.open('https://mpago.la/1EYcXie', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-white/10 backdrop-blur-sm shadow-brand border-2 border-white/20 rounded-2xl">
            <div className="text-center mb-8">
              <a href="/" className="font-brand text-4xl text-white hover:text-secondary transition-colors duration-300 inline-block mb-6">
                ACAMP'S
              </a>
              <h1 className="text-3xl font-bold text-white mb-4">
                Finalize seu Pagamento
              </h1>
              <p className="text-white/80 text-lg">
                Selecione sua categoria e complete o pagamento
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <Button
                onClick={handleParticipanteClick}
                className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-6 text-xl shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105 rounded-xl"
              >
                <Users className="w-6 h-6 mr-3" />
                Participante
              </Button>

              <Button
                onClick={handleServoClick}
                className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-xl shadow-glow transition-all duration-300 hover:scale-105 rounded-xl"
              >
                <CreditCard className="w-6 h-6 mr-3" />
                Servo
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-6">
              <p className="text-white text-center font-semibold mb-4">
                Para enviar o comprovante, verificar outras opções de pagamento ou tirar dúvidas, fale conosco pelo WhatsApp.
              </p>
            </div>

            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 text-lg shadow-glow transition-all duration-300 hover:scale-105 rounded-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pagamento;