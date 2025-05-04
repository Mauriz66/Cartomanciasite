import { Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BaralhoCigano from "@/pages/baralho-cigano";
import Jogo5Cartas from "@/pages/baralho-cigano/5-cartas";
import Jogo10Cartas from "@/pages/baralho-cigano/10-cartas";
import LeituraMensal from "@/pages/leitura-mensal";
import LeituraAniversario from "@/pages/leitura-aniversario";
import Thetahealing from "@/pages/thetahealing";
import Reiki from "@/pages/reiki";
import PlanoConexao from "@/pages/plano-conexao";
import Sobre from "@/pages/Sobre";
import Contato from "@/pages/Contato";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { useEffect } from "react";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="pt-16 min-h-screen">
        <Route path="/" component={Home} />
        <Route path="/baralho-cigano" component={BaralhoCigano} />
        <Route path="/baralho-cigano/5-cartas" component={Jogo5Cartas} />
        <Route path="/baralho-cigano/10-cartas" component={Jogo10Cartas} />
        <Route path="/leitura-mensal" component={LeituraMensal} />
        <Route path="/leitura-aniversario" component={LeituraAniversario} />
        <Route path="/thetahealing" component={Thetahealing} />
        <Route path="/reiki" component={Reiki} />
        <Route path="/plano-conexao" component={PlanoConexao} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/contato" component={Contato} />
        <Route component={NotFound} />
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
