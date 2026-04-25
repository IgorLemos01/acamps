import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Phone, Cross, Brain, Tent, Bus, FileDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
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
    saudeMental: '',
    saudeMentalDetalhes: '',
    hospedagem: '',
    transporte: ''
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

  const handleRadioChange = (name: string, value: string) => {
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

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4AC4B5 0%, #388074 100%)' }}>
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl" style={{ background: '#F7DC6B' }} />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[28rem] h-[28rem] rounded-full opacity-25 blur-3xl" style={{ background: '#EF8A32' }} />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: '#D76523' }} />

      <Header />

      <main className="relative pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <a href="/" className="font-brand text-3xl sm:text-4xl md:text-6xl text-white mb-4 animate-fade-in hover:scale-105 transition-transform duration-300 inline-block drop-shadow-lg">
              ACAMP'S
            </a>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mt-2 mb-3" style={{ background: '#F7DC6B' }}>
              <span className="text-sm font-bold" style={{ color: '#388074', fontFamily: 'Montserrat, sans-serif' }}>Etapa 2 de 3</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-3 font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Informações de Saúde
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto animate-slide-up px-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Preencha as informações médicas e religiosas
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-5 sm:p-8 bg-white shadow-brand animate-slide-up border-t-8" style={{ borderTopColor: '#EF8A32' }}>
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                
                {/* Experiência anterior */}
                <div className="space-y-4">
                  <Label className="text-card-foreground font-semibold flex items-center gap-2 text-base sm:text-lg">
                    <Users className="w-5 h-5 text-primary" />
                    Já participou de algum ACAMP'S? *
                  </Label>
                  <RadioGroup
                    value={formData.jaParticipou}
                    onValueChange={(value) => handleRadioChange('jaParticipou', value)}
                    className="flex flex-wrap gap-4 sm:gap-6"
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="jaParticipou-sim" />
                      <Label htmlFor="jaParticipou-sim">Sim</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="jaParticipou-nao" />
                      <Label htmlFor="jaParticipou-nao">Não</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Dieta */}
                <div className="space-y-4">
                  <Label className="text-card-foreground font-semibold flex items-center gap-2 text-base sm:text-lg">
                    <Heart className="w-5 h-5 text-secondary" />
                    Você é vegano ou vegetariano? *
                  </Label>
                  <RadioGroup
                    value={formData.dieta}
                    onValueChange={(value) => handleRadioChange('dieta', value)}
                    className="flex flex-wrap gap-6"
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vegano" id="dieta-vegano" />
                      <Label htmlFor="dieta-vegano">Sou vegano</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vegetariano" id="dieta-vegetariano" />
                      <Label htmlFor="dieta-vegetariano">Sou vegetariano</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="dieta-nao" />
                      <Label htmlFor="dieta-nao">Não sou</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Intolerância lactose */}
                <div className="space-y-4">
                  <Label className="text-card-foreground font-semibold text-base sm:text-lg">
                    Você possui intolerância à lactose? *
                  </Label>
                  <RadioGroup
                    value={formData.intoleranciaLactose}
                    onValueChange={(value) => handleRadioChange('intoleranciaLactose', value)}
                    className="flex flex-wrap gap-4 sm:gap-6"
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="lactose-sim" />
                      <Label htmlFor="lactose-sim">Sim</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="lactose-nao" />
                      <Label htmlFor="lactose-nao">Não</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Informações médicas */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="alergiaMedicamento" className="text-card-foreground font-semibold">
                      Tem alergia a algum medicamento? Se sim, qual? *
                    </Label>
                    <Textarea
                      id="alergiaMedicamento"
                      name="alergiaMedicamento"
                      value={formData.alergiaMedicamento}
                      onChange={handleInputChange}
                      placeholder="Descreva suas alergias medicamentosas ou 'Não'"
                      className="border-primary/20 focus:border-primary bg-white text-black placeholder:text-gray-400"
                      required
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
                      placeholder="Informe nome do remédio, dosagem e horário, ou 'Não'"
                      className="border-primary/20 focus:border-primary bg-white text-black placeholder:text-gray-400"
                      required
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
                    placeholder="Descreva suas comorbidades ou 'Não'"
                    className="border-primary/20 focus:border-primary bg-white text-black placeholder:text-gray-400"
                    required
                  />
                </div>

                {/* Saúde mental / neurodivergência */}
                <div className="space-y-4">
                  <Label className="text-card-foreground font-semibold flex items-start gap-2 text-base sm:text-lg">
                    <Brain className="w-5 h-5 text-secondary" />
                    <span>Possui autismo, ansiedade, depressão ou outra condição psicológica/neurológica? *</span>
                  </Label>
                  <RadioGroup
                    value={formData.saudeMental}
                    onValueChange={(value) => handleRadioChange('saudeMental', value)}
                    className="flex flex-wrap gap-4 sm:gap-6"
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="saudeMental-sim" />
                      <Label htmlFor="saudeMental-sim">Sim</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="saudeMental-nao" />
                      <Label htmlFor="saudeMental-nao">Não</Label>
                    </div>
                  </RadioGroup>
                  {formData.saudeMental === 'sim' && (
                    <div className="space-y-2">
                      <Label htmlFor="saudeMentalDetalhes" className="text-card-foreground font-semibold">
                        Especifique a condição e cuidados necessários *
                      </Label>
                      <Textarea
                        id="saudeMentalDetalhes"
                        name="saudeMentalDetalhes"
                        value={formData.saudeMentalDetalhes}
                        onChange={handleInputChange}
                        placeholder="Ex: TEA nível 1, ansiedade generalizada, depressão. Descreva gatilhos, cuidados ou observações importantes."
                        className="border-primary/20 focus:border-primary bg-white text-black placeholder:text-gray-400"
                        required
                      />
                    </div>
                  )}
                </div>

                {/* Contato de emergência */}
                <div className="space-y-4">
                  <Label className="text-card-foreground font-semibold flex items-center gap-2 text-base sm:text-lg">
                    <Phone className="w-5 h-5 text-accent" />
                    Contato de Emergência
                  </Label>
                  <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
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
                        className="border-primary/20 focus:border-primary bg-white text-black placeholder:text-gray-400"
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
                        className="border-primary/20 focus:border-primary bg-white text-black placeholder:text-gray-400"
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
                        className="border-primary/20 focus:border-primary bg-white text-black placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Informações religiosas */}
                <div className="space-y-6">
                  <Label className="text-card-foreground font-semibold flex items-center gap-2 text-base sm:text-lg">
                    <Cross className="w-5 h-5 text-primary" />
                    Informações Religiosas
                  </Label>

                  <div className="space-y-4">
                    <Label className="text-card-foreground font-semibold">
                      É batizado na Igreja Católica? *
                    </Label>
                    <RadioGroup
                      value={formData.batizadoCatolico}
                      onValueChange={(value) => handleRadioChange('batizadoCatolico', value)}
                      className="flex flex-wrap gap-4 sm:gap-6"
                      required
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="batizado-sim" />
                        <Label htmlFor="batizado-sim">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="batizado-nao" />
                        <Label htmlFor="batizado-nao">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-card-foreground font-semibold">
                      Já recebeu a primeira Eucaristia? *
                    </Label>
                    <RadioGroup
                      value={formData.primeiraEucaristia}
                      onValueChange={(value) => handleRadioChange('primeiraEucaristia', value)}
                      className="flex flex-wrap gap-4 sm:gap-6"
                      required
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="eucaristia-sim" />
                        <Label htmlFor="eucaristia-sim">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="eucaristia-nao" />
                        <Label htmlFor="eucaristia-nao">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-card-foreground font-semibold">
                      É Crismado? *
                    </Label>
                    <RadioGroup
                      value={formData.crismado}
                      onValueChange={(value) => handleRadioChange('crismado', value)}
                      className="flex flex-wrap gap-4 sm:gap-6"
                      required
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="crismado-sim" />
                        <Label htmlFor="crismado-sim">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="crismado-nao" />
                        <Label htmlFor="crismado-nao">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>

                </div>

                {/* Hospedagem */}
                <div className="space-y-4">
                  <Label className="text-card-foreground font-semibold flex items-center gap-2 text-base sm:text-lg">
                    <Tent className="w-5 h-5 text-accent" />
                    Hospedagem no evento *
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    ⚠️ Vagas limitadas — garanta a sua o quanto antes.
                  </p>
                  <RadioGroup
                    value={formData.hospedagem}
                    onValueChange={(value) => handleRadioChange('hospedagem', value)}
                    className="flex flex-col sm:flex-row gap-4"
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="alojamento" id="hospedagem-alojamento" />
                      <Label htmlFor="hospedagem-alojamento">Alojamento (vagas limitadas)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="barraca" id="hospedagem-barraca" />
                      <Label htmlFor="hospedagem-barraca">Barraca própria (vagas limitadas)</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Transporte */}
                <div className="space-y-4">
                  <Label className="text-card-foreground font-semibold flex items-center gap-2 text-base sm:text-lg">
                    <Bus className="w-5 h-5 text-primary" />
                    Como você irá ao evento? *
                  </Label>
                  <RadioGroup
                    value={formData.transporte}
                    onValueChange={(value) => handleRadioChange('transporte', value)}
                    className="flex flex-col sm:flex-row gap-4"
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="onibus" id="transporte-onibus" />
                      <Label htmlFor="transporte-onibus">Ônibus do evento (ida e volta)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="carro" id="transporte-carro" />
                      <Label htmlFor="transporte-carro">Carro próprio</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Termo de autorização dos pais */}
                <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20 space-y-3">
                  <div className="flex items-start gap-3">
                    <FileDown className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div className="space-y-2">
                      <p className="text-card-foreground font-semibold">
                        Termo de Autorização dos Pais
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Para menores de idade e/ou em caso de uso de medicação contínua, os pais devem assinar e trazer o termo impresso no dia do evento.
                      </p>
                      <a
                        href="/docs/termo-autorizacao-pais.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors"
                      >
                        <FileDown className="w-4 h-4" />
                        Baixar termo de autorização
                      </a>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full text-white font-bold py-5 sm:py-6 text-base sm:text-lg shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-[1.02] border-b-4"
                  style={{ background: 'linear-gradient(90deg, #EF8A32 0%, #D76523 100%)', borderBottomColor: '#388074' }}
                >
                  Avançar →
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