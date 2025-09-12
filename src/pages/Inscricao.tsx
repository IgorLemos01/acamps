import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, CreditCard, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';

const Inscricao = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
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
    // Salvar dados no sessionStorage para usar nas próximas páginas
    sessionStorage.setItem('inscricaoData', JSON.stringify(formData));
    navigate('/inscricao/saude');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-brand text-4xl md:text-6xl text-foreground mb-4 animate-fade-in">
              Inscrição ACAMP'S
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Preencha seus dados pessoais para começar sua inscrição
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card shadow-brand animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-card-foreground font-semibold flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Nome Completo *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Digite seu nome completo"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-card-foreground font-semibold flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      Idade *
                    </Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      min="1"
                      max="120"
                      placeholder="Sua idade"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground font-semibold flex items-center gap-2">
                    <Mail className="w-4 h-4 text-secondary" />
                    Email *
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

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-card-foreground font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent" />
                    Telefone/WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="(11) 99999-9999"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="cpf" className="text-card-foreground font-semibold flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-primary" />
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
                    <Label htmlFor="rg" className="text-card-foreground font-semibold flex items-center gap-2">
                      <FileText className="w-4 h-4 text-accent" />
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