import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Banknote, FileText } from 'lucide-react';
import Header from '@/components/Header';

const PagamentoOpcoes = () => {
  const navigate = useNavigate();
  const [modalidade, setModalidade] = useState('');

  useEffect(() => {
    const savedModalidade = sessionStorage.getItem('modalidade');
    if (!savedModalidade) {
      navigate('/inscricao');
      return;
    }
    setModalidade(savedModalidade);
  }, [navigate]);

  const handleCartao = () => {
    if (modalidade === 'Servo') {
      window.open('https://mpago.la/29LXc7j', '_blank');
      navigate('/pagamento/confirmacao');
    } else {
      window.open('https://mpago.la/2EVe7gg', '_blank');
      navigate('/pagamento/confirmacao');
    }
  };

  const handlePix = () => {
    navigate('/pagamento/pix');
  };

  const handleCarne = () => {
    navigate('/pagamento/carne');
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
              Formas de Pagamento
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Escolha a forma de pagamento que preferir
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card shadow-brand animate-slide-up">
              <div className="space-y-6">
                
                <Button
                  onClick={handleCartao}
                  className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-6 text-xl shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105 rounded-xl"
                >
                  <CreditCard className="w-6 h-6 mr-3" />
                  Cartão de Crédito
                </Button>

                <Button
                  onClick={handlePix}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-xl shadow-glow transition-all duration-300 hover:scale-105 rounded-xl"
                >
                  <Banknote className="w-6 h-6 mr-3" />
                  PIX
                </Button>

                <Button
                  onClick={handleCarne}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 text-xl shadow-glow transition-all duration-300 hover:scale-105 rounded-xl"
                >
                  <FileText className="w-6 h-6 mr-3" />
                  Carnê
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PagamentoOpcoes;
