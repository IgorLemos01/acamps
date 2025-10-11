import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    idade: '',
    cpf: '',
    rg: ''
  });

  // Atualiza os valores dos campos
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Verifica se todos os campos estão preenchidos
  const isFormValid = Object.values(formData).every(value => value.trim() !== '');

  // Envio dos dados
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Salva localmente no sessionStorage
      sessionStorage.setItem('inscricaoData', JSON.stringify(formData));

      // Envia os dados diretamente para a planilha
      const response = await fetch('https://script.google.com/macros/s/AKfycbwockEsTLCwhpBCs3aVf0l9oeMTTJEuongY-EVS8Qc_08UJP1HDeawHbbhsS63MQGQlGg/exec', {
        method: 'POST',
        body: new URLSearchParams(formData),
      });

      const result = await response.json();
      console.log('✅ Enviado para planilha:', result);

      // Redireciona para próxima etapa
      navigate('/inscricao/termo');
    } catch (error) {
      console.error('❌ Erro ao enviar os dados:', error);
      alert('Ocorreu um erro ao enviar sua inscrição. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <a
              href="/"
              className="font-brand text-4xl md:text-6xl text-foreground mb-4 animate-fade-in hover:text-primary transition-colors duration-300 inline-block"
            >
              ACAMP'S
            </a>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
              Ficha de Inscrição
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Preencha todos os campos obrigatórios para iniciar sua inscrição
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-card shadow-brand animate-slide-up border-primary/20">
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Dados Pessoais Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-primary/20">
                    <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-foreground font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">Dados Pessoais</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Nome */}
                    <div className="space-y-2 md:col-span-2 group">
                      <Label htmlFor="nome" className="text-card-foreground font-semibold flex items-center gap-2">
                        Nome completo *
                      </Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        placeholder="Digite seu nome completo"
                        className="border-primary/20 focus:border-primary transition-all duration-300 focus:shadow-glow"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2 group">
                      <Label htmlFor="email" className="text-card-foreground font-semibold">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                        className="border-primary/20 focus:border-primary transition-all duration-300 focus:shadow-glow"
                      />
                    </div>

                    {/* Telefone */}
                    <div className="space-y-2 group">
                      <Label htmlFor="telefone" className="text-card-foreground font-semibold">
                        Telefone/WhatsApp *
                      </Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        placeholder="(11) 99999-9999"
                        className="border-primary/20 focus:border-primary transition-all duration-300 focus:shadow-glow"
                      />
                    </div>

                    {/* Idade */}
                    <div className="space-y-2 group">
                      <Label htmlFor="idade" className="text-card-foreground font-semibold">
                        Idade *
                      </Label>
                      <Input
                        id="idade"
                        name="idade"
                        type="number"
                        value={formData.idade}
                        onChange={handleInputChange}
                        required
                        placeholder="18"
                        className="border-primary/20 focus:border-primary transition-all duration-300 focus:shadow-glow"
                      />
                    </div>
                  </div>
                </div>

                {/* Documentos Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-primary/20">
                    <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-foreground font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">Documentos</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* CPF */}
                    <div className="space-y-2 group">
                      <Label htmlFor="cpf" className="text-card-foreground font-semibold">
                        CPF *
                      </Label>
                      <Input
                        id="cpf"
                        name="cpf"
                        type="text"
                        value={formData.cpf}
                        onChange={handleInputChange}
                        required
                        placeholder="000.000.000-00"
                        className="border-primary/20 focus:border-primary transition-all duration-300 focus:shadow-glow"
                      />
                    </div>

                    {/* RG */}
                    <div className="space-y-2 group">
                      <Label htmlFor="rg" className="text-card-foreground font-semibold">
                        RG *
                      </Label>
                      <Input
                        id="rg"
                        name="rg"
                        type="text"
                        value={formData.rg}
                        onChange={handleInputChange}
                        required
                        placeholder="00.000.000-0"
                        className="border-primary/20 focus:border-primary transition-all duration-300 focus:shadow-glow"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={!isFormValid}
                    className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-6 text-lg shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Continuar para Próxima Etapa
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    Próxima etapa: Informações de saúde e dados complementares
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegistrationForm;