import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, FileText, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4AC4B5 0%, #388074 100%)' }}>
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl" style={{ background: '#F7DC6B' }} />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[28rem] h-[28rem] rounded-full opacity-25 blur-3xl" style={{ background: '#EF8A32' }} />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: '#D76523' }} />

      <Header />

      <main className="relative pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <a href="/" className="font-brand text-4xl md:text-6xl text-white mb-4 animate-fade-in hover:scale-105 transition-transform duration-300 inline-block drop-shadow-lg">
              ACAMP'S
            </a>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mt-2 mb-3" style={{ background: '#F7DC6B' }}>
              <Sparkles className="w-4 h-4" style={{ color: '#388074' }} />
              <span className="text-sm font-bold" style={{ color: '#388074', fontFamily: 'Montserrat, sans-serif' }}>Faça sua inscrição</span>
            </div>
            <h2 className="text-2xl md:text-3xl text-white mb-3 font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Inscrição
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto animate-slide-up" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Preencha seus dados para se inscrever
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-white shadow-brand animate-slide-up border-t-8" style={{ borderTopColor: '#EF8A32' }}>
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Dados Pessoais */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-3 pb-3 border-b-2" style={{ color: '#388074', borderColor: '#F7DC6B' }}>
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white" style={{ background: '#EF8A32' }}>
                      <User className="w-5 h-5" />
                    </span>
                    Dados Pessoais
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="font-semibold" style={{ color: '#388074' }}>
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
                        className="border-2 bg-white text-foreground border-[#4AC4B5]/40 focus:border-[#EF8A32] focus-visible:ring-[#F7DC6B]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold" style={{ color: '#388074' }}>
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
                        className="border-2 bg-white text-foreground border-[#4AC4B5]/40 focus:border-[#EF8A32] focus-visible:ring-[#F7DC6B]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="font-semibold" style={{ color: '#388074' }}>
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
                        className="border-2 bg-white text-foreground border-[#4AC4B5]/40 focus:border-[#EF8A32] focus-visible:ring-[#F7DC6B]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="idade" className="font-semibold" style={{ color: '#388074' }}>
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
                        className="border-2 bg-white text-foreground border-[#4AC4B5]/40 focus:border-[#EF8A32] focus-visible:ring-[#F7DC6B]"
                      />
                    </div>
                  </div>
                </div>

                {/* Documentos */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-3 pb-3 border-b-2" style={{ color: '#388074', borderColor: '#F7DC6B' }}>
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full text-white" style={{ background: '#4AC4B5' }}>
                      <FileText className="w-5 h-5" />
                    </span>
                    Documentos
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cpf" className="font-semibold" style={{ color: '#388074' }}>
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
                        className="border-2 bg-white text-foreground border-[#4AC4B5]/40 focus:border-[#EF8A32] focus-visible:ring-[#F7DC6B]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rg" className="font-semibold" style={{ color: '#388074' }}>
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
                        className="border-2 bg-white text-foreground border-[#4AC4B5]/40 focus:border-[#EF8A32] focus-visible:ring-[#F7DC6B]"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full text-white font-bold py-6 text-lg shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-[1.02] border-b-4"
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

export default Inscricao;
