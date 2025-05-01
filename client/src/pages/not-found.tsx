import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">Página Não Encontrada</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600 mb-6">
            A página que você está procurando não existe ou foi movida.
          </p>

          <Link href="/">
            <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Home className="h-4 w-4" />
              Voltar para a página inicial
            </a>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
