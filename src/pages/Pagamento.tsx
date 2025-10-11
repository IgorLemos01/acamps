import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Pagamento = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se existe modalidade selecionada
    const modalidade = sessionStorage.getItem('modalidade');
    if (!modalidade) {
      navigate('/inscricao');
      return;
    }

    // Redirecionar para a página de opções de pagamento
    navigate('/pagamento/opcoes');
  }, [navigate]);

  return null;
};

export default Pagamento;