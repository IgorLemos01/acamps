import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Banknote, FileText } from 'lucide-react';
import Header from '@/components/Header';

const PagamentoOpcoes = () => {
  const navigate = useNavigate();
  const [modalidade, setModalidade] = useState('');

  useEffect(() => {
    const savedModalidade = sessionStorage.getItem('modalidade');
    if (!savedModalidade) {
      navigate('/inscricao');
      return;
    }
    setModalidade(savedModalidade);
  }, [navigate]);

  const enviarFormaPagamento = async (formaPagamento: string) => {
    try {
      const inscricaoData = JSON.parse(sessionStorage.getItem('inscricaoData') || '{}');
      const saudeData = JSON.parse(sessionStorage.getItem('inscricaoSaudeData') || '{}');

      const payload = {
        nome: inscricaoData.nome || '',
        email: inscricaoData.email || '',
        telefone: inscricaoData.telefone || '',
        idade: inscricaoData.idade || '',
        cpf: inscricaoData.cpf || '',
        rg: inscricaoData.rg || '',
        participou: saudeData.jaParticipou || '',
        vegano: saudeData.dieta || '',
        intolerancia: saudeData.intoleranciaLactose || '',
        alergia: saudeData.alergiaMedicamento || '',
        medicamento: saudeData.medicamentoContinuo || '',
        comorbidade: saudeData.comorbidade || '',
        emergencia_nome: saudeData.contatoEmergenciaNome || '',
        emergencia_tel: saudeData.contatoEmergenciaTelefone || '',
        emergencia_parentesco: saudeData.grauParentesco || '',
        batizado: saudeData.batizadoCatolico || '',
        eucaristia: saudeData.primeiraEucaristia || '',
        crismado: saudeData.crismado || '',
        barraca: saudeData.levaBarraca || '',
        modalidade: modalidade,
        forma_pagamento: formaPagamento
      };

      await fetch('https://script.google.com/macros/s/AKfycbwDPJH-UdRxGXCQiyGD8LzyCQ0vkDQkDSgENhLvBKAYctCz8zzuHe8HsipCjzkDm5HuMg/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error('Erro ao enviar forma de pagamento:', error);
    }
  };

  const handleCartao = () => {
    enviarFormaPagamento('Cartão');
    if (modalidade === 'Servo') {
      window.open('https://mpago.la/1K6mgrL', '_blank');
      navigate('/pagamento/confirmacao');
    } else {
      window.open('https://mpago.la/2rSs9Ye', '_blank');
      navigate('/pagamento/confirmacao');
    }
  };

  const handlePix = () => {
    enviarFormaPagamento('PIX');
    navigate('/pagamento/pix');
  };

  const handleCarne = () => {
    enviarFormaPagamento('Carnê');
    navigate('/pagamento/carne');
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
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
              Formas de Pagamento
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Escolha a forma de pagamento que preferir
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card shadow-brand animate-slide-up">
              <div className="space-y-6">
                
                <Button
                  onClick={handleCartao}
                  className="w-full bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold py-6 text-xl shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105 rounded-xl"
                >
                  <CreditCard className="w-6 h-6 mr-3" />
                  Cartão de Crédito
                </Button>

                <Button
                  onClick={handlePix}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-xl shadow-glow transition-all duration-300 hover:scale-105 rounded-xl"
                >
                  <Banknote className="w-6 h-6 mr-3" />
                  PIX
                </Button>

                <Button
                  onClick={handleCarne}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 text-xl shadow-glow transition-all duration-300 hover:scale-105 rounded-xl"
                >
                  <FileText className="w-6 h-6 mr-3" />
                  Carnê
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PagamentoOpcoes;
