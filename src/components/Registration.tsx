import { useState } from 'react';
import { User, Mail, Phone, Calendar, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Registration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // IMPORTANTE: Para usar este formulário, você precisa:
      // 1. Criar uma conta gratuita em https://formspree.io/
      // 2. Criar um novo formulário
      // 3. Substituir 'YOUR_FORM_ID' pelo ID do seu formulário (exemplo: f/xpzgvdqy)
      // Substitua 'YOUR_FORM_ID' pelo ID do seu formulário Formspree
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          age: formData.age,
          subject: 'Nova Inscrição ACAMP\'S',
          message: `Nova inscrição recebida:
Nome: ${formData.fullName}
Email: ${formData.email}
Telefone: ${formData.phone}
Idade: ${formData.age}`
        }),
      });

      if (response.ok) {
        toast({
          title: "Inscrição realizada com sucesso!",
          description: "Entraremos em contato em breve com mais informações.",
        });
        
        // Limpar formulário
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          age: ''
        });
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar inscrição",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="inscricao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-brand text-4xl md:text-6xl text-foreground mb-4 animate-fade-in">
            Faça sua Inscrição
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Garante sua vaga no ACAMP'S e viva uma experiência inesquecível
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-card shadow-brand animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-card-foreground font-semibold flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Nome Completo
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
                    Idade
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
                  Email
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
                  Telefone/WhatsApp
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

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-4 text-lg shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-foreground border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Confirmar Inscrição
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
              <p className="text-sm text-card-foreground text-center">
                <strong>Atenção:</strong> Após a inscrição, você receberá um email com as instruções para pagamento e confirmação da vaga.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Registration;