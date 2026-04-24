import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ExternalLink, CheckCircle } from 'lucide-react';
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
  const [termoAceito, setTermoAceito] = useState(false);
  const [modalidade, setModalidade] = useState('');
  const [allData, setAllData] = useState<any>({});

  useEffect(() => {
    // Verificar se existem dados da primeira página
    const inscricaoData = sessionStorage.getItem('inscricaoData');
    
    if (!inscricaoData) {
      navigate('/inscricao');
      return;
    }

    setAllData(JSON.parse(inscricaoData));
  }, [navigate]);

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
        title: "Modalidade obrigatória",
        description: "Selecione se você irá como Servo ou Participante.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Recuperar dados das páginas anteriores
      const inscricaoData = JSON.parse(sessionStorage.getItem('inscricaoData') || '{}');
      const saudeData = JSON.parse(sessionStorage.getItem('inscricaoSaudeData') || '{}');

      // Preparar dados completos para envio
      const payload = {
        nome: inscricaoData.nome || '',
        email: inscricaoData.email || '',
        telefone: inscricaoData.telefone || '',
        idade: inscricaoData.idade || '',
        cpf: inscricaoData.cpf || '',
        rg: inscricaoData.rg || '',
        participou: saudeData.jaParticipou || '',
        vegano: saudeData.dieta || '',
        intolerancia: saudeData.intoleranciaLactose || '',
        alergia: saudeData.alergiaMedicamento || '',
        medicamento: saudeData.medicamentoContinuo || '',
        comorbidade: saudeData.comorbidade || '',
        emergencia_nome: saudeData.contatoEmergenciaNome || '',
        emergencia_tel: saudeData.contatoEmergenciaTelefone || '',
        emergencia_parentesco: saudeData.grauParentesco || '',
        batizado: saudeData.batizadoCatolico || '',
        eucaristia: saudeData.primeiraEucaristia || '',
        crismado: saudeData.crismado || '',
        saude_mental: saudeData.saudeMental || '',
        saude_mental_detalhes: saudeData.saudeMentalDetalhes || '',
        hospedagem: saudeData.hospedagem || '',
        transporte: saudeData.transporte || '',
        modalidade: modalidade
      };

      // Log para debug
      console.log('Enviando dados:', payload);

      // Enviar para Google Sheets com no-cors
      const response = await fetch('https://script.google.com/macros/s/AKfycbyWdauoQ4pIP0bZHTxDQbEgMTsfmonk_0R-U1LJXnQKGZWzdbXeb0ArdR9fqxHhfJlYyg/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      console.log('Resposta recebida');

      // Salvar modalidade no sessionStorage
      sessionStorage.setItem('modalidade', modalidade);
      
      toast({
        title: "Inscrição finalizada!",
        description: "Redirecionando para pagamento...",
      });

      // Delay pequeno antes de redirecionar
      setTimeout(() => {
        navigate('/pagamento');
      }, 1500);
      
    } catch (error) {
      console.error('Erro detalhado:', error);
      toast({
        title: "Erro ao enviar inscrição",
        description: error instanceof Error ? error.message : "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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

                {/* Modalidade */}
                <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <Label className="text-card-foreground font-bold text-lg mb-4 block">
                    Você irá para o ACAMP'S como servo ou participante? *
                  </Label>
                  <div className="flex gap-4 mb-6">
                    <Button
                      type="button"
                      onClick={() => setModalidade('Servo')}
                      className={`flex-1 py-4 text-lg font-bold rounded-xl transition-all duration-300 ${
                        modalidade === 'Servo'
                          ? 'bg-accent text-white shadow-glow scale-105'
                          : 'bg-white/20 text-card-foreground hover:bg-white/30'
                      }`}
                    >
                      Servo
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setModalidade('Participante')}
                      className={`flex-1 py-4 text-lg font-bold rounded-xl transition-all duration-300 ${
                        modalidade === 'Participante'
                          ? 'bg-gradient-brand text-foreground shadow-glow scale-105'
                          : 'bg-white/20 text-card-foreground hover:bg-white/30'
                      }`}
                    >
                      Participante
                    </Button>
                  </div>
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
                      <CheckCircle className="w-5 h-5" />
                      Finalizar Inscrição
                    </div>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-card-foreground text-center">
                  <strong>Importante:</strong> Após finalizar a inscrição, você será direcionado para escolher a forma de pagamento.
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
