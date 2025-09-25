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
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzjcWXAtx4TtOQcEge87K2ermTOaMQ2NWdyP4o22R1u1ggZvRP7s4SapRhR6eFFkITKqw/exec"; // troque pela sua URL

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Converter formData para URLSearchParams (application/x-www-form-urlencoded)
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value);
      });

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // IMPORTANTE para não dar erro CORS
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      // Como no-cors não retorna .ok, trate o sucesso direto
      toast({
        title: "✅ Inscrição realizada!",
        description: "Seus dados foram enviados com sucesso.",
      });

      // Redirecionar para a página de pagamento
      window.location.href = '/pagamento';
    } catch (error) {
      toast({
        title: "❌ Erro ao enviar inscrição",
        description: "Tente novamente.",
        variant: "destructive",
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
  return <div className="min-h-screen bg-gradient-hero py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-white/10 backdrop-blur-sm shadow-brand border-2 border-white/20 rounded-2xl">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <a href="/" className="font-brand text-4xl text-white hover:text-secondary transition-colors duration-300">ACAMP'S</a>
                  <span className="text-sm text-white font-semibold bg-white/20 px-3 py-1 rounded-full">
                    Página {currentPage} de 5
                  </span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 shadow-inner">
                  <div className="bg-gradient-to-r from-secondary to-accent h-3 rounded-full transition-all duration-500 shadow-glow" style={{
                width: `${currentPage / 5 * 100}%`
              }} />
                </div>
              </div>

            <form onSubmit={handleSubmit}>
              {currentPage === 1 && <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">Dados Pessoais</h2>
                  
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="nome" className="text-white font-semibold">Nome completo</Label>
                        <Input id="nome" value={formData.nome} onChange={e => handleInputChange('nome', e.target.value)} required placeholder="Nome completo" className="mt-2 border-2 border-secondary/30 focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/90 text-primary rounded-xl transition-all duration-300" />
                      </div>
                    
                      <div>
                        <Label htmlFor="email" className="text-white font-semibold">E-mail</Label>
                        <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} required placeholder="E-mail" className="mt-2 border-2 border-secondary/30 focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/90 text-primary rounded-xl transition-all duration-300" />
                      </div>
                      
                      <div>
                        <Label htmlFor="telefone" className="text-white font-semibold">Telefone/WhatsApp</Label>
                        <Input id="telefone" value={formData.telefone} onChange={e => handleInputChange('telefone', e.target.value)} required placeholder="Telefone/WhatsApp" className="mt-2 border-2 border-secondary/30 focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/90 text-primary rounded-xl transition-all duration-300" />
                      </div>
                      
                      <div>
                        <Label htmlFor="idade" className="text-white font-semibold">Idade</Label>
                        <Input id="idade" type="number" value={formData.idade} onChange={e => handleInputChange('idade', e.target.value)} required placeholder="Idade" className="mt-2 border-2 border-secondary/30 focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/90 text-primary rounded-xl transition-all duration-300" />
                      </div>
                      
                      <div>
                        <Label htmlFor="cpf" className="text-white font-semibold">CPF</Label>
                        <Input id="cpf" value={formData.cpf} onChange={e => handleInputChange('cpf', e.target.value)} required placeholder="CPF" className="mt-2 border-2 border-secondary/30 focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/90 text-primary rounded-xl transition-all duration-300" />
                      </div>
                      
                      <div>
                        <Label htmlFor="rg" className="text-white font-semibold">RG</Label>
                        <Input id="rg" value={formData.rg} onChange={e => handleInputChange('rg', e.target.value)} required placeholder="RG" className="mt-2 border-2 border-secondary/30 focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/90 text-primary rounded-xl transition-all duration-300" />
                      </div>
                  </div>
                  
                  <Button onClick={nextPage} className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 text-lg rounded-xl shadow-glow transition-all duration-300 hover:scale-105">Avançar</Button>
                </div>}

              {currentPage === 2 && <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">Perguntas Gerais</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white font-semibold">Já participou de algum ACAMP'S?</Label>
                      <Select value={formData.participou} onValueChange={value => handleInputChange('participou', value)}>
                        <SelectTrigger className="mt-2 border-2 border-secondary/30 focus:border-secondary bg-white/90 text-primary rounded-xl">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sim">Sim</SelectItem>
                          <SelectItem value="Não">Não</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label className="text-white font-semibold">Você é vegano ou vegetariano?</Label>
                      <Select value={formData.vegano} onValueChange={value => handleInputChange('vegano', value)}>
                        <SelectTrigger className="mt-2 border-2 border-secondary/30 focus:border-secondary bg-white/90 text-primary rounded-xl">
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
                      <Label className="text-white font-semibold">Você possui intolerância à lactose?</Label>
                      <Select value={formData.intolerancia} onValueChange={value => handleInputChange('intolerancia', value)}>
                        <SelectTrigger className="mt-2 border-2 border-secondary/30 focus:border-secondary bg-white/90 text-primary rounded-xl">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sim">Sim</SelectItem>
                          <SelectItem value="Não">Não</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="alergia" className="text-white font-semibold">Tem alergia a algum medicamento? Se sim, qual?</Label>
                      <Input id="alergia" value={formData.alergia} onChange={e => handleInputChange('alergia', e.target.value)} placeholder="Ex: Dipirona" className="mt-2 border-2 border-secondary/30 focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/90 text-primary rounded-xl transition-all duration-300" />
                    </div>
                    
                    <div>
                      <Label htmlFor="medicamento" className="text-white font-semibold">Faz uso de algum medicamento contínuo? Se sim, qual?</Label>
                      <Input id="medicamento" value={formData.medicamento} onChange={e => handleInputChange('medicamento', e.target.value)} placeholder="Ex: Losartana" className="mt-2 border-2 border-secondary/30 focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/90 text-primary rounded-xl transition-all duration-300" />
                    </div>
                    
                    <div>
                      <Label htmlFor="comorbidade" className="text-white font-semibold">Tem alguma comorbidade? (asma, diabetes, etc)</Label>
                      <Input id="comorbidade" value={formData.comorbidade} onChange={e => handleInputChange('comorbidade', e.target.value)} placeholder="Descreva se houver" className="mt-2 border-2 border-secondary/30 focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/90 text-primary rounded-xl transition-all duration-300" />
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button onClick={prevPage} variant="outline" className="flex-1 border-2 border-white text-white hover:bg-white hover:text-primary rounded-xl font-semibold py-3">Voltar</Button>
                    <Button onClick={nextPage} className="flex-1 bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-xl shadow-glow transition-all duration-300 hover:scale-105">Avançar</Button>
                  </div>
                </div>}

              {currentPage === 3 && <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">Contato de Emergência</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="emergencia_nome" className="text-white font-semibold">Nome do contato de emergência</Label>
                      <Input id="emergencia_nome" value={formData.emergencia_nome} onChange={e => handleInputChange('emergencia_nome', e.target.value)} required placeholder="Nome do contato de emergência" className="mt-2 border-2 border-secondary/30 focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/90 text-primary rounded-xl transition-all duration-300" />
                    </div>
                    
                    <div>
                      <Label htmlFor="emergencia_tel" className="text-white font-semibold">Telefone do contato de emergência</Label>
                      <Input id="emergencia_tel" value={formData.emergencia_tel} onChange={e => handleInputChange('emergencia_tel', e.target.value)} required placeholder="Telefone do contato de emergência" className="mt-2 border-2 border-secondary/30 focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/90 text-primary rounded-xl transition-all duration-300" />
                    </div>
                    
                    <div>
                      <Label htmlFor="emergencia_parentesco" className="text-white font-semibold">Grau de parentesco</Label>
                      <Input id="emergencia_parentesco" value={formData.emergencia_parentesco} onChange={e => handleInputChange('emergencia_parentesco', e.target.value)} required placeholder="Grau de parentesco" className="mt-2 border-2 border-secondary/30 focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/90 text-primary rounded-xl transition-all duration-300" />
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button onClick={prevPage} variant="outline" className="flex-1">Voltar</Button>
                    <Button onClick={nextPage} className="flex-1">Avançar</Button>
                  </div>
                </div>}

              {currentPage === 4 && <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">Sacramentos</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white font-semibold">É batizado na Igreja Católica?</Label>
                      <Select value={formData.batizado} onValueChange={value => handleInputChange('batizado', value)}>
                        <SelectTrigger className="mt-2 border-2 border-secondary/30 focus:border-secondary bg-white/90 text-primary rounded-xl">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sim">Sim</SelectItem>
                          <SelectItem value="Não">Não</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label className="text-white font-semibold">Já recebeu a primeira Eucaristia?</Label>
                      <Select value={formData.eucaristia} onValueChange={value => handleInputChange('eucaristia', value)}>
                        <SelectTrigger className="mt-2 border-2 border-secondary/30 focus:border-secondary bg-white/90 text-primary rounded-xl">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sim">Sim</SelectItem>
                          <SelectItem value="Não">Não</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label className="text-white font-semibold">É Crismado?</Label>
                      <Select value={formData.crismado} onValueChange={value => handleInputChange('crismado', value)}>
                        <SelectTrigger className="mt-2 border-2 border-secondary/30 focus:border-secondary bg-white/90 text-primary rounded-xl">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sim">Sim</SelectItem>
                          <SelectItem value="Não">Não</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label className="text-white font-semibold">Vai levar barraca?</Label>
                      <Select value={formData.barraca} onValueChange={value => handleInputChange('barraca', value)}>
                        <SelectTrigger className="mt-2 border-2 border-secondary/30 focus:border-secondary bg-white/90 text-primary rounded-xl">
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
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">Termo de Compromisso</h2>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-white/80">
                      Devem estar devidamente assinados os dois termos, o termo de compromisso e o termo de imagem.
                    </p>
                    
                    <div className="space-y-2">
                      <a href="https://drive.google.com/file/d/10aMk__k4RtAd8buV5s9O6eIQmq1qQsth/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-secondary hover:text-accent hover:underline font-semibold transition-colors duration-300">
                        👉 Baixar Termo de Compromisso
                      </a>
                      <a href="https://drive.google.com/file/d/1b4HH9Suf-UmoFYP4UrFWV40pKvYv5bAe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-secondary hover:text-accent hover:underline font-semibold transition-colors duration-300">
                        👉 Termo de Imagem - Menores
                      </a>
                      <a href="https://drive.google.com/file/d/1sEItoaYqA1-RwdGfQEEp5Vq8ulU0i6ps/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-secondary hover:text-accent hover:underline font-semibold transition-colors duration-300">
                        👉 Termo de Imagem - Maiores
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="aceite_termo" checked={termsAccepted} onCheckedChange={checked => setTermsAccepted(checked as boolean)} />
                      <Label htmlFor="aceite_termo" className="text-white font-semibold">
                        Declaro que li e concordo com os termos de compromisso e imagem.
                      </Label>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button onClick={prevPage} variant="outline" className="flex-1 border-2 border-white text-white hover:bg-white hover:text-primary rounded-xl font-semibold py-3">Voltar</Button>
                    <Button type="submit" disabled={isLoading || !termsAccepted} className="flex-1 bg-accent hover:bg-accent/90 text-white font-bold py-4 text-lg rounded-xl shadow-glow transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100">
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