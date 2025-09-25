import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ExternalLink, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';

const InscricaoTermo = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [termoAceito, setTermoAceito] = useState(false);
  const [allData, setAllData] = useState<any>({});

  useEffect(() => {
    // Verificar se existem dados das páginas anteriores
    const inscricaoData = sessionStorage.getItem('inscricaoData');
    const saudeData = sessionStorage.getItem('inscricaoSaudeData');
    
    if (!inscricaoData || !saudeData) {
      navigate('/inscricao');
      return;
    }

    // Combinar todos os dados
    const combinedData = {
      ...JSON.parse(inscricaoData),
      ...JSON.parse(saudeData)
    };
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

    setIsLoading(true);

    try {
      // IMPORTANTE: Para usar este formulário, você precisa:
      // 1. Criar uma conta gratuita em https://formspree.io/
      // 2. Criar um novo formulário
      // 3. Substituir 'YOUR_FORM_ID' pelo ID do seu formulário
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...allData,
          termoAceito: true,
          subject: 'Nova Inscrição Completa ACAMP\'S',
          message: `Nova inscrição completa recebida para o ACAMP'S:
          
DADOS PESSOAIS:
Nome: ${allData.fullName}
Email: ${allData.email}
Telefone: ${allData.phone}
Idade: ${allData.age}
CPF: ${allData.cpf}
RG: ${allData.rg}

INFORMAÇÕES DE SAÚDE:
Já participou de ACAMP'S: ${allData.jaParticipou}
Dieta: ${allData.dieta}
Intolerância à lactose: ${allData.intoleranciaLactose}
Alergia a medicamento: ${allData.alergiaMedicamento || 'Não informado'}
Medicamento contínuo: ${allData.medicamentoContinuo || 'Não informado'}
Comorbidade: ${allData.comorbidade || 'Não informado'}

CONTATO DE EMERGÊNCIA:
Nome: ${allData.contatoEmergenciaNome}
Telefone: ${allData.contatoEmergenciaTelefone}
Parentesco: ${allData.grauParentesco}

INFORMAÇÕES RELIGIOSAS:
Batizado: ${allData.batizadoCatolico}
Primeira Eucaristia: ${allData.primeiraEucaristia}
Crismado: ${allData.crismado}

ACAMPAMENTO:
Vai levar barraca: ${allData.levaBarraca}

TERMO: Aceito`
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Limpar dados do sessionStorage
        sessionStorage.removeItem('inscricaoData');
        sessionStorage.removeItem('inscricaoSaudeData');
        
        toast({
          title: "Inscrição finalizada com sucesso!",
          description: "Agora confirme sua participação pelo WhatsApp.",
        });
      } else {
        throw new Error('Erro ao enviar formulário');
      }
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
                  <h3 className="font-semibold mb-3">Termo Geral</h3>
                  <a
                    href="https://drive.google.com/file/d/10aMk__k4RtAd8buV5s9O6eIQmq1qQsth/view?usp=sharing"
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
                  <h3 className="font-semibold mb-3">Termo para Menores</h3>
                  <a
                    href="https://drive.google.com/file/d/1b4HH9Suf-UmoFYP4UrFWV40pKvYv5bAe/view?usp=sharing"
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
                  <h3 className="font-semibold mb-3">Termo para Maiores</h3>
                  <a
                    href="https://drive.google.com/file/d/1sEItoaYqA1-RwdGfQEEp5Vq8ulU0i6ps/view?usp=sharing"
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
                  disabled={isLoading || !termoAceito}
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