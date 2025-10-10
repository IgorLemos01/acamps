import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, CreditCard, QrCode, FileText } from "lucide-react";
import Header from "@/components/Header";

const Pagamento = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const modalidade = location.state?.modalidade || 'Participante';
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de enviar o comprovante de pagamento da minha inscrição no ACAMP\'S.';
    const whatsappUrl = `https://contate.me/5579988801082?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Modalidade Participante - opções: Cartão, Pix
  // Modalidade Servo - opções: Cartão, Pix, Carnê
  
  if (!paymentMethod) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="font-brand text-4xl md:text-6xl text-foreground mb-4 animate-fade-in">
                ACAMP'S
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
                Formas de Pagamento
              </h2>
              <p className="text-xl text-muted-foreground">
                Modalidade: <span className="font-bold text-primary">{modalidade}</span>
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="p-8 bg-card shadow-brand animate-slide-up">
                <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
                  Escolha sua forma de pagamento
                </h3>
                
                <div className="space-y-4">
                  <Button
                    onClick={() => setPaymentMethod('cartao')}
                    className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-6 text-lg shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105"
                  >
                    <CreditCard className="w-6 h-6 mr-2" />
                    Pagar com Cartão
                  </Button>

                  <Button
                    onClick={() => setPaymentMethod('pix')}
                    className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-6 text-lg shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105"
                  >
                    <QrCode className="w-6 h-6 mr-2" />
                    Pagar com Pix
                  </Button>

                  {modalidade === 'Servo' && (
                    <Button
                      onClick={() => setPaymentMethod('carne')}
                      className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-6 text-lg shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105"
                    >
                      <FileText className="w-6 h-6 mr-2" />
                      Pagar com Carnê
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Página de Cartão
  if (paymentMethod === 'cartao') {
    const linkPagamento = modalidade === 'Participante' 
      ? 'https://mpago.la/2JiHjhK'
      : 'https://mpago.la/1EYcXie';

    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="font-brand text-4xl md:text-6xl text-foreground mb-4 animate-fade-in">
                ACAMP'S
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
                Pagamento com Cartão
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="p-8 bg-card shadow-brand animate-slide-up">
                <CreditCard className="w-16 h-16 text-primary mx-auto mb-6" />
                
                <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
                  Finalize seu pagamento
                </h3>
                
                <p className="text-center text-muted-foreground mb-8">
                  Clique no botão abaixo para ser redirecionado para a página de pagamento seguro.
                </p>

                <div className="space-y-4">
                  <Button
                    onClick={() => window.open(linkPagamento, '_blank')}
                    className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-6 text-lg shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105"
                  >
                    Ir para Pagamento
                  </Button>

                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg shadow-brand transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Enviar Comprovante pelo WhatsApp
                  </Button>

                  <Button
                    onClick={() => setPaymentMethod(null)}
                    variant="outline"
                    className="w-full"
                  >
                    Voltar
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Página de Pix
  if (paymentMethod === 'pix') {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="font-brand text-4xl md:text-6xl text-foreground mb-4 animate-fade-in">
                ACAMP'S
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
                Pagamento com Pix
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="p-8 bg-card shadow-brand animate-slide-up">
                <QrCode className="w-16 h-16 text-primary mx-auto mb-6" />
                
                <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
                  Informações para Pagamento
                </h3>
                
                <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20 mb-8">
                  <p className="text-center text-muted-foreground mb-2">
                    Chave Pix:
                  </p>
                  <p className="text-center text-xl font-bold text-card-foreground">
                    juntudearacaju@comshalom.org
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg shadow-brand transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Enviar Comprovante pelo WhatsApp
                  </Button>

                  <Button
                    onClick={() => setPaymentMethod(null)}
                    variant="outline"
                    className="w-full"
                  >
                    Voltar
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Página de Carnê (só para Servo)
  if (paymentMethod === 'carne') {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="font-brand text-4xl md:text-6xl text-foreground mb-4 animate-fade-in">
                ACAMP'S
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
                Pagamento com Carnê
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="p-8 bg-card shadow-brand animate-slide-up">
                <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
                
                <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
                  Entre em contato com a gente
                </h3>
                
                <p className="text-center text-muted-foreground mb-8 text-lg">
                  Para atualizar seu cadastro e configurar o pagamento em carnê, fale com nossa equipe pelo WhatsApp.
                </p>

                <div className="space-y-4">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg shadow-brand transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Falar com a equipe pelo WhatsApp
                  </Button>

                  <Button
                    onClick={() => setPaymentMethod(null)}
                    variant="outline"
                    className="w-full"
                  >
                    Voltar
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return null;
};

export default Pagamento;
