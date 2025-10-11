import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Inscricao from "./pages/Inscricao";
import InscricaoSaude from "./pages/InscricaoSaude";
import InscricaoTermo from "./pages/InscricaoTermo";
import Pagamento from "./pages/Pagamento";
import PagamentoOpcoes from "./pages/PagamentoOpcoes";
import PagamentoPix from "./pages/PagamentoPix";
import PagamentoCarne from "./pages/PagamentoCarne";
import PagamentoConfirmacao from "./pages/PagamentoConfirmacao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/inscricao" element={<Inscricao />} />
          <Route path="/inscricao/saude" element={<InscricaoSaude />} />
          <Route path="/inscricao/termo" element={<InscricaoTermo />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/pagamento/opcoes" element={<PagamentoOpcoes />} />
          <Route path="/pagamento/pix" element={<PagamentoPix />} />
          <Route path="/pagamento/carne" element={<PagamentoCarne />} />
          <Route path="/pagamento/confirmacao" element={<PagamentoConfirmacao />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
