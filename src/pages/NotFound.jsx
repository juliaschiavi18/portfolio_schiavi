import { AlertCircle, Home } from 'lucide-react';
import { Link } from 'wouter';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 rounded-full animate-pulse" />
              <AlertCircle className="relative w-20 h-20 text-red-500" />
            </div>
          </div>

          <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>

          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Página Não Encontrada
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Desculpe, a página que você está procurando não existe.
            <br />
            Ela pode ter sido movida ou deletada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium inline-flex items-center justify-center gap-2">
              <Home className="w-4 h-4" />
              Voltar para Home
            </Link>
            <Link href="/projects" className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium inline-block border border-border">
              Ver Projetos
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
