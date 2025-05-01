import { Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BaralhoCigano from "@/pages/BaralhoCigano";
import PlanoConexao from "@/pages/PlanoConexao";
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
