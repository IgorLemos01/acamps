import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Phone, Cross } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';

const InscricaoSaude = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jaParticipou: '',
    dieta: '',
    intoleranciaLactose: '',
    alergiaMedicamento: '',
    medicamentoContinuo: '',
    comorbidade: '',
    contatoEmergenciaNome: '',
    contatoEmergenciaTelefone: '',
    grauParentesco: '',
    batizadoCatolico: '',
    primeiraEucaristia: '',
    crismado: '',
    levaBarraca: ''
  });

  useEffect(() => {
    // Verificar se existem dados da primeira página
    const savedData = sessionStorage.getItem('inscricaoData');
    if (!savedData) {
      navigate('/inscricao');
    }
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Salvar dados no sessionStorage
    sessionStorage.setItem('inscricaoSaudeData', JSON.stringify(formData));
    navigate('/inscricao/termo');
  };

  // Validação: todos os campos devem estar preenchidos
  const isFormValid = 
    formData.jaParticipou && 
    formData.dieta && 
    formData.intoleranciaLactose && 
    formData.alergiaMedicamento && 
    formData.medicamentoContinuo && 
    formData.comorbidade && 
    formData.contatoEmergenciaNome && 
    formData.contatoEmergenciaTelefone && 
    formData.grauParentesco && 
    formData.batizadoCatolico && 
    formData.primeiraEucaristia && 
    formData.crismado && 
    formData.levaBarraca;

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
              Informações de Saúde
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Preencha as informações médicas e religiosas
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-card shadow-brand animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Experiência anterior */}
                <div className="space-y-2">
                  <Label htmlFor="jaParticipou" className="text-card-foreground font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Já participou de algum ACAMP'S? *
                  </Label>
                  <Input
                    id="jaParticipou"
                    name="jaParticipou"
                    type="text"
                    value={formData.jaParticipou}
                    onChange={handleInputChange}
                    required
                    placeholder="Sim ou Não"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                {/* Dieta */}
                <div className="space-y-2">
                  <Label htmlFor="dieta" className="text-card-foreground font-semibold flex items-center gap-2">
                    <Heart className="w-5 h-5 text-secondary" />
                    Você é vegano ou vegetariano? *
                  </Label>
                  <Input
                    id="dieta"
                    name="dieta"
                    type="text"
                    value={formData.dieta}
                    onChange={handleInputChange}
                    required
                    placeholder="Vegano, Vegetariano ou Não"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                {/* Intolerância lactose */}
                <div className="space-y-2">
                  <Label htmlFor="intoleranciaLactose" className="text-card-foreground font-semibold">
                    Você possui intolerância à lactose? *
                  </Label>
                  <Input
                    id="intoleranciaLactose"
                    name="intoleranciaLactose"
                    type="text"
                    value={formData.intoleranciaLactose}
                    onChange={handleInputChange}
                    required
                    placeholder="Sim ou Não"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                {/* Informações médicas */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="alergiaMedicamento" className="text-card-foreground font-semibold">
                      Tem alergia a algum medicamento? Se sim, qual? *
                    </Label>
                    <Textarea
                      id="alergiaMedicamento"
                      name="alergiaMedicamento"
                      value={formData.alergiaMedicamento}
                      onChange={handleInputChange}
                      required
                      placeholder="Descreva suas alergias medicamentosas ou escreva 'Não'"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="medicamentoContinuo" className="text-card-foreground font-semibold">
                      Faz uso de medicamento contínuo? Se sim, qual? *
                    </Label>
                    <Textarea
                      id="medicamentoContinuo"
                      name="medicamentoContinuo"
                      value={formData.medicamentoContinuo}
                      onChange={handleInputChange}
                      required
                      placeholder="Liste os medicamentos de uso contínuo ou escreva 'Não'"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comorbidade" className="text-card-foreground font-semibold">
                    Tem alguma comorbidade? (asma, diabetes, etc.) *
                  </Label>
                  <Textarea
                    id="comorbidade"
                    name="comorbidade"
                    value={formData.comorbidade}
                    onChange={handleInputChange}
                    required
                    placeholder="Descreva suas comorbidades ou escreva 'Não tenho'"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                {/* Contato de emergência */}
                <div className="space-y-4">
                  <Label className="text-card-foreground font-semibold flex items-center gap-2 text-lg">
                    <Phone className="w-5 h-5 text-accent" />
                    Contato de Emergência
                  </Label>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contatoEmergenciaNome" className="text-card-foreground font-semibold">
                        Nome *
                      </Label>
                      <Input
                        id="contatoEmergenciaNome"
                        name="contatoEmergenciaNome"
                        type="text"
                        value={formData.contatoEmergenciaNome}
                        onChange={handleInputChange}
                        required
                        placeholder="Nome do contato"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contatoEmergenciaTelefone" className="text-card-foreground font-semibold">
                        Telefone *
                      </Label>
                      <Input
                        id="contatoEmergenciaTelefone"
                        name="contatoEmergenciaTelefone"
                        type="tel"
                        value={formData.contatoEmergenciaTelefone}
                        onChange={handleInputChange}
                        required
                        placeholder="(11) 99999-9999"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="grauParentesco" className="text-card-foreground font-semibold">
                        Grau de Parentesco *
                      </Label>
                      <Input
                        id="grauParentesco"
                        name="grauParentesco"
                        type="text"
                        value={formData.grauParentesco}
                        onChange={handleInputChange}
                        required
                        placeholder="Ex: Mãe, Pai, Irmão"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Informações religiosas */}
                <div className="space-y-6">
                  <Label className="text-card-foreground font-semibold flex items-center gap-2 text-lg">
                    <Cross className="w-5 h-5 text-primary" />
                    Informações Religiosas
                  </Label>

                  <div className="space-y-2">
                    <Label htmlFor="batizadoCatolico" className="text-card-foreground font-semibold">
                      É batizado na Igreja Católica? *
                    </Label>
                    <Input
                      id="batizadoCatolico"
                      name="batizadoCatolico"
                      type="text"
                      value={formData.batizadoCatolico}
                      onChange={handleInputChange}
                      required
                      placeholder="Sim ou Não"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="primeiraEucaristia" className="text-card-foreground font-semibold">
                      Já recebeu a primeira Eucaristia? *
                    </Label>
                    <Input
                      id="primeiraEucaristia"
                      name="primeiraEucaristia"
                      type="text"
                      value={formData.primeiraEucaristia}
                      onChange={handleInputChange}
                      required
                      placeholder="Sim ou Não"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="crismado" className="text-card-foreground font-semibold">
                      É Crismado? *
                    </Label>
                    <Input
                      id="crismado"
                      name="crismado"
                      type="text"
                      value={formData.crismado}
                      onChange={handleInputChange}
                      required
                      placeholder="Sim ou Não"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="levaBarraca" className="text-card-foreground font-semibold">
                      Vai levar barraca? *
                    </Label>
                    <Input
                      id="levaBarraca"
                      name="levaBarraca"
                      type="text"
                      value={formData.levaBarraca}
                      onChange={handleInputChange}
                      required
                      placeholder="Sim ou Não"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid}
                  className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-4 text-lg shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Avançar
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InscricaoSaude;
