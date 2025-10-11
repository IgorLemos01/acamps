import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ExternalLink, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';

const InscricaoTermo = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [termoAceito, setTermoAceito] = useState(false);
  const [modalidade, setModalidade] = useState('');
  const [allData, setAllData] = useState<any>({});

  useEffect(() => {
    // Verificar se existem dados da página anterior
    const inscricaoData = sessionStorage.getItem('inscricaoData');
    
    if (!inscricaoData) {
      navigate('/inscricao');
      return;
    }

    // Usar apenas os dados da primeira página
    const combinedData = JSON.parse(inscricaoData);
    setAllData(combinedData);
  }, [navigate]);

  const handleWhatsAppClick = () => {
    const message = 'Olá! Acabei de finalizar minha inscrição no ACAMP\'S. Gostaria de confirmar minha participação.';
    const whatsappUrl = `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!termoAceito) {
      toast({
        title: "Termo obrigatório",
        description: "Você deve aceitar os termos para finalizar a inscrição.",
        variant: "destructive",
      });
      return;
    }

    if (!modalidade) {
      toast({
        title: "Campo obrigatório",
        description: "Você deve selecionar sua modalidade (Participante ou Servo).",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Enviar para Google Apps Script
      const formData = new FormData();
      Object.entries(allData).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
      formData.append('termoAceito', 'true');
      formData.append('modalidade', modalidade);

      await fetch('https://script.google.com/macros/s/AKfycbwockEsTLCwhpBCs3aVf0l9oeMTTJEuongY-EVS8Qc_08UJP1HDeawHbbhsS63MQGQlGg/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      setIsSuccess(true);
      // Limpar dados do sessionStorage
      sessionStorage.removeItem('inscricaoData');
      
      toast({
        title: "Inscrição finalizada com sucesso!",
        description: "Redirecionando para pagamento...",
      });

      // Redirecionar baseado na modalidade
      setTimeout(() => {
        navigate('/pagamento', { state: { modalidade } });
      }, 1500);
    } catch (error) {
      toast({
        title: "Erro ao finalizar inscrição",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="p-8 bg-card shadow-brand animate-slide-up">
                <div className="mb-6">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h1 className="font-brand text-3xl md:text-4xl text-foreground mb-4">
                    Inscrição Finalizada!
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Sua inscrição foi enviada com sucesso. Agora confirme sua participação pelo WhatsApp.
                  </p>
                </div>

                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-4 text-lg shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105 mb-4"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Confirmar pelo WhatsApp
                </Button>

                <Button
                  onClick={() => navigate('/')}
                  variant="outline"
                  className="w-full"
                >
                  Voltar ao Início
                </Button>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

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
              Termos e Finalização
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Leia e aceite os termos para finalizar sua inscrição
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-card shadow-brand animate-slide-up">
              
              {/* Imagem e explicação dos termos */}
              <div className="mb-8 text-center">
                <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-card-foreground mb-4">
                  Termo de Compromisso ACAMP'S
                </h2>
                <p className="text-muted-foreground">
                  Para participar do ACAMP'S, é necessário ler e aceitar nossos termos de compromisso. 
                  Escolha o documento apropriado para sua idade e leia atentamente.
                </p>
              </div>

              {/* Links para os documentos */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-3">Termos e Condições</h3>
                  <a
                    href="/docs/termos-aceitacao-condicoes-uso.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    Abrir documento
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <FileText className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-3">Termo Imagem (Menores)</h3>
                  <a
                    href="/docs/termo-imagem-menor.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    Abrir documento
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <FileText className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold mb-3">Termo Imagem (Maiores)</h3>
                  <a
                    href="/docs/termo-imagem-maior.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    Abrir documento
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Card>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Pergunta de Modalidade */}
                <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <Label className="text-card-foreground font-semibold text-lg mb-4 block">
                    Você irá para o Acamp's como participante ou servo? *
                  </Label>
                  <RadioGroup
                    value={modalidade}
                    onValueChange={(value) => setModalidade(value)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Participante" id="modalidade-participante" />
                      <Label htmlFor="modalidade-participante" className="cursor-pointer">Participante</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Servo" id="modalidade-servo" />
                      <Label htmlFor="modalidade-servo" className="cursor-pointer">Servo</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Checkbox obrigatório */}
                <div className="flex items-start space-x-3 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                  <Checkbox
                    id="termo"
                    checked={termoAceito}
                    onCheckedChange={(checked) => setTermoAceito(checked as boolean)}
                    required
                    className="mt-1"
                  />
                  <Label htmlFor="termo" className="text-card-foreground font-semibold cursor-pointer">
                    Declaro que li e concordo com os termos de compromisso do ACAMP'S. *
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading || !termoAceito || !modalidade}
                  className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-4 text-lg shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-foreground border-t-transparent rounded-full animate-spin"></div>
                      Finalizando Inscrição...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Finalizar Inscrição
                    </div>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-card-foreground text-center">
                  <strong>Importante:</strong> Após finalizar a inscrição, você receberá instruções para confirmação e pagamento via WhatsApp.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InscricaoTermo;