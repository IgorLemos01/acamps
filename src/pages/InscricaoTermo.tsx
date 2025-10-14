import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

const Terms = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    const savedData = sessionStorage.getItem('inscricaoData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    } else {
      alert('Dados não encontrados. Retorne ao início do formulário.');
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isChecked) {
      alert('Você precisa aceitar os termos antes de continuar.');
      return;
    }

    if (!formData) {
      alert('Erro: dados do formulário não encontrados.');
      return;
    }

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyi-cTS6chgMJLqX7ve2g3J2oa2GEkggVSGOPUnBmhKDAkvY4f3H4tKPiPPHFQR9yy3Rw/exec',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        alert('Inscrição enviada com sucesso!');
        sessionStorage.clear();
        navigate('/inscricao/sucesso');
      } else {
        alert('Ocorreu um erro ao enviar os dados. Tente novamente.');
      }
    } catch (error) {
      console.error(error);
      alert('Erro de conexão ao enviar os dados.');
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
              Termos e Envio da Inscrição
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Leia atentamente os termos antes de enviar sua inscrição.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-card shadow-brand animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Ao marcar a caixa abaixo, você confirma que todas as informações
                    fornecidas são verdadeiras e que está ciente das regras do Acamp's.
                  </p>

                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                      required
                    />
                    <span className="text-sm text-muted-foreground">
                      Declaro que li e aceito os termos acima.
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={!isChecked}
                  className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-4 text-lg shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Enviar Inscrição
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
