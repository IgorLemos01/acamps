import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';

const Inscricao = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    idade: '',
    cpf: '',
    rg: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Salvar dados no sessionStorage
    sessionStorage.setItem('inscricaoData', JSON.stringify(formData));
    navigate('/inscricao/saude');
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
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Inscrição
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Preencha seus dados para se inscrever
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-card shadow-brand animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Dados Pessoais */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2 border-b border-primary/20 pb-2">
                    <User className="w-5 h-5 text-primary" />
                    Dados Pessoais
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-card-foreground font-semibold">
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        placeholder="Digite seu nome completo"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
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
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="text-card-foreground font-semibold">
                        Telefone *
                      </Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        placeholder="(11) 99999-9999"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
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
                        placeholder="Ex: 25"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Documentos */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-card-foreground flex items-center gap-2 border-b border-primary/20 pb-2">
                    <FileText className="w-5 h-5 text-secondary" />
                    Documentos
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
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
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
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
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-4 text-lg shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105"
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

export default Inscricao;
