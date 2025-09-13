import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
const RegistrationForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    idade: '',
    cpf: '',
    rg: '',
    participou: '',
    vegano: '',
    intolerancia: '',
    alergia: '',
    medicamento: '',
    comorbidade: '',
    emergencia_nome: '',
    emergencia_tel: '',
    emergencia_parentesco: '',
    batizado: '',
    eucaristia: '',
    crismado: '',
    barraca: ''
  });
  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      toast({
        title: "Erro",
        description: "Você deve aceitar os termos para continuar.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch('https://sheetdb.io/api/v1/jtkfnmn5nfz8b', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast({
          title: "✅ Inscrição enviada com sucesso!",
          description: "Agora confirme pelo WhatsApp."
        });

        // Redirect to WhatsApp after success
        setTimeout(() => {
          window.open('https://contate.me/5579988801082', '_blank');
        }, 2000);
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      toast({
        title: "❌ Erro ao enviar inscrição",
        description: "Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, 5));
  };
  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };
  return <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-card shadow-brand border-2 border-primary/20">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="font-brand text-4xl text-primary">ACAMP'S</h1>
                  <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                    Página {currentPage} de 5
                  </span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-3 shadow-inner">
                  <div className="bg-gradient-brand h-3 rounded-full transition-all duration-500 shadow-glow" style={{
                width: `${currentPage / 5 * 100}%`
              }} />
                </div>
              </div>

            <form onSubmit={handleSubmit}>
              {currentPage === 1 && <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Dados Pessoais</h2>
                  
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="nome" className="text-foreground font-semibold bg-[#193f08]">Nome completo</Label>
                        <Input id="nome" value={formData.nome} onChange={e => handleInputChange('nome', e.target.value)} required placeholder="Nome completo" className="mt-2 border-2 border-primary/20 focus:border-primary bg-card text-card-foreground" />
                      </div>
                    
                      <div>
                        <Label htmlFor="email" className="text-foreground font-semibold">E-mail</Label>
                        <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} required placeholder="E-mail" className="mt-2 border-2 border-primary/20 focus:border-primary bg-card text-card-foreground" />
                      </div>
                      
                      <div>
                        <Label htmlFor="telefone" className="text-foreground font-semibold">Telefone/WhatsApp</Label>
                        <Input id="telefone" value={formData.telefone} onChange={e => handleInputChange('telefone', e.target.value)} required placeholder="Telefone/WhatsApp" className="mt-2 border-2 border-primary/20 focus:border-primary bg-card text-card-foreground" />
                      </div>
                      
                      <div>
                        <Label htmlFor="idade" className="text-foreground font-semibold">Idade</Label>
                        <Input id="idade" type="number" value={formData.idade} onChange={e => handleInputChange('idade', e.target.value)} required placeholder="Idade" className="mt-2 border-2 border-primary/20 focus:border-primary bg-card text-card-foreground" />
                      </div>
                      
                      <div>
                        <Label htmlFor="cpf" className="text-foreground font-semibold">CPF</Label>
                        <Input id="cpf" value={formData.cpf} onChange={e => handleInputChange('cpf', e.target.value)} required placeholder="CPF" className="mt-2 border-2 border-primary/20 focus:border-primary bg-card text-card-foreground" />
                      </div>
                      
                      <div>
                        <Label htmlFor="rg" className="text-foreground font-semibold">RG</Label>
                        <Input id="rg" value={formData.rg} onChange={e => handleInputChange('rg', e.target.value)} required placeholder="RG" className="mt-2 border-2 border-primary/20 focus:border-primary bg-card text-card-foreground" />
                      </div>
                  </div>
                  
                  <Button onClick={nextPage} className="w-full">Avançar</Button>
                </div>}

              {currentPage === 2 && <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Perguntas Gerais</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label>Já participou de algum ACAMP'S?</Label>
                      <Select value={formData.participou} onValueChange={value => handleInputChange('participou', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sim">Sim</SelectItem>
                          <SelectItem value="Não">Não</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label>Você é vegano ou vegetariano?</Label>
                      <Select value={formData.vegano} onValueChange={value => handleInputChange('vegano', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sou vegano">Sou vegano</SelectItem>
                          <SelectItem value="Sou vegetariano">Sou vegetariano</SelectItem>
                          <SelectItem value="Não sou">Não sou</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label>Você possui intolerância à lactose?</Label>
                      <Select value={formData.intolerancia} onValueChange={value => handleInputChange('intolerancia', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sim">Sim</SelectItem>
                          <SelectItem value="Não">Não</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="alergia">Tem alergia a algum medicamento? Se sim, qual?</Label>
                      <Input id="alergia" value={formData.alergia} onChange={e => handleInputChange('alergia', e.target.value)} placeholder="Ex: Dipirona" />
                    </div>
                    
                    <div>
                      <Label htmlFor="medicamento">Faz uso de algum medicamento contínuo? Se sim, qual?</Label>
                      <Input id="medicamento" value={formData.medicamento} onChange={e => handleInputChange('medicamento', e.target.value)} placeholder="Ex: Losartana" />
                    </div>
                    
                    <div>
                      <Label htmlFor="comorbidade">Tem alguma comorbidade? (asma, diabetes, etc)</Label>
                      <Input id="comorbidade" value={formData.comorbidade} onChange={e => handleInputChange('comorbidade', e.target.value)} placeholder="Descreva se houver" />
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button onClick={prevPage} variant="outline" className="flex-1">Voltar</Button>
                    <Button onClick={nextPage} className="flex-1">Avançar</Button>
                  </div>
                </div>}

              {currentPage === 3 && <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Contato de Emergência</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="emergencia_nome">Nome do contato de emergência</Label>
                      <Input id="emergencia_nome" value={formData.emergencia_nome} onChange={e => handleInputChange('emergencia_nome', e.target.value)} required placeholder="Nome do contato de emergência" />
                    </div>
                    
                    <div>
                      <Label htmlFor="emergencia_tel">Telefone do contato de emergência</Label>
                      <Input id="emergencia_tel" value={formData.emergencia_tel} onChange={e => handleInputChange('emergencia_tel', e.target.value)} required placeholder="Telefone do contato de emergência" />
                    </div>
                    
                    <div>
                      <Label htmlFor="emergencia_parentesco">Grau de parentesco</Label>
                      <Input id="emergencia_parentesco" value={formData.emergencia_parentesco} onChange={e => handleInputChange('emergencia_parentesco', e.target.value)} required placeholder="Grau de parentesco" />
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button onClick={prevPage} variant="outline" className="flex-1">Voltar</Button>
                    <Button onClick={nextPage} className="flex-1">Avançar</Button>
                  </div>
                </div>}

              {currentPage === 4 && <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Sacramentos</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label>É batizado na Igreja Católica?</Label>
                      <Select value={formData.batizado} onValueChange={value => handleInputChange('batizado', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sim">Sim</SelectItem>
                          <SelectItem value="Não">Não</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label>Já recebeu a primeira Eucaristia?</Label>
                      <Select value={formData.eucaristia} onValueChange={value => handleInputChange('eucaristia', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sim">Sim</SelectItem>
                          <SelectItem value="Não">Não</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label>É Crismado?</Label>
                      <Select value={formData.crismado} onValueChange={value => handleInputChange('crismado', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sim">Sim</SelectItem>
                          <SelectItem value="Não">Não</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label>Vai levar barraca?</Label>
                      <Select value={formData.barraca} onValueChange={value => handleInputChange('barraca', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sim">Sim</SelectItem>
                          <SelectItem value="Não">Não</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button onClick={prevPage} variant="outline" className="flex-1">Voltar</Button>
                    <Button onClick={nextPage} className="flex-1">Avançar</Button>
                  </div>
                </div>}

              {currentPage === 5 && <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Termo de Compromisso</h2>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Devem estar devidamente assinados os dois termos, o termo de compromisso e o termo de imagem.
                    </p>
                    
                    <div className="space-y-2">
                      <a href="https://drive.google.com/file/d/10aMk__k4RtAd8buV5s9O6eIQmq1qQsth/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
                        👉 Baixar Termo de Compromisso
                      </a>
                      <a href="https://drive.google.com/file/d/1b4HH9Suf-UmoFYP4UrFWV40pKvYv5bAe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
                        👉 Termo de Imagem - Menores
                      </a>
                      <a href="https://drive.google.com/file/d/1sEItoaYqA1-RwdGfQEEp5Vq8ulU0i6ps/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">
                        👉 Termo de Imagem - Maiores
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="aceite_termo" checked={termsAccepted} onCheckedChange={checked => setTermsAccepted(checked as boolean)} />
                      <Label htmlFor="aceite_termo" className="text-sm">
                        Declaro que li e concordo com os termos de compromisso e imagem.
                      </Label>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button onClick={prevPage} variant="outline" className="flex-1">Voltar</Button>
                    <Button type="submit" disabled={isLoading || !termsAccepted} className="flex-1 bg-gradient-brand">
                      {isLoading ? 'Enviando...' : 'Finalizar Inscrição'}
                    </Button>
                  </div>
                </div>}
            </form>
          </Card>
        </div>
      </div>
    </div>;
};
export default RegistrationForm;