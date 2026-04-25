import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';

const PagamentoPix = () => {
  const { toast } = useToast();
  const pixKey = 'juventudearacaju@comshalom.org';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    toast({
      title: "PIX copiado!",
      description: "A chave PIX foi copiada para a área de transferência.",
    });
  };

  const handleWhatsAppClick = () => {
    const message = 'Olá! Realizei o pagamento via PIX e gostaria de enviar o comprovante da minha inscrição no ACAMP\'S.';
    const whatsappUrl = `https://wa.me/5579988801082?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-10 sm:mb-16">
            <a href="/" className="font-brand text-3xl sm:text-4xl md:text-6xl text-foreground mb-4 animate-fade-in hover:text-primary transition-colors duration-300 inline-block">
              ACAMP'S
            </a>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4">
              Pagamento via PIX
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-5 sm:p-8 bg-card shadow-brand animate-slide-up">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-4">
                  Chave PIX
                </h3>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 sm:p-6 mb-4">
                  <p className="text-base sm:text-2xl font-mono font-bold text-card-foreground break-all">
                    {pixKey}
                  </p>
                </div>
                
                <Button
                  onClick={handleCopyPix}
                  className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-4 text-base sm:text-lg shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105 mb-6"
                >
                  <Copy className="w-5 h-5 mr-2" />
                  Copiar Chave PIX
                </Button>
              </div>

              <div className="bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-xl p-4 sm:p-6 mb-6">
                <p className="text-sm sm:text-base text-card-foreground text-center font-semibold">
                  Após realizar o pagamento, envie o comprovante pelo WhatsApp para confirmar sua inscrição.
                </p>
              </div>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 text-sm sm:text-lg shadow-glow transition-all duration-300 hover:scale-105 rounded-xl"
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

export default PagamentoPix;
