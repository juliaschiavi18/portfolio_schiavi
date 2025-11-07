import { Link } from 'wouter';
import { ArrowRight, Code2, Lock, Zap, Shield, AlertTriangle, Eye } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  const skills = [
    {
      icon: Lock,
      title: 'Segurança de Aplicações',
      description: 'Desenvolvimento seguro com proteção contra OWASP Top 10 e boas práticas de segurança.',
    },
    {
      icon: AlertTriangle,
      title: 'Teste de Penetração',
      description: 'Identificação e exploração de vulnerabilidades em sistemas e redes.',
    },
    {
      icon: Eye,
      title: 'Análise de Ameaças',
      description: 'Monitoramento e análise de ameaças em tempo real com resposta a incidentes.',
    },
    {
      icon: Code2,
      title: 'Desenvolvimento Full-Stack',
      description: 'Criação de aplicações web e mobile com foco em segurança e performance.',
    },
    {
      icon: Shield,
      title: 'Infraestrutura Segura',
      description: 'Configuração e manutenção de infraestrutura segura com DevSecOps.',
    },
    {
      icon: Zap,
      title: 'Automação de Segurança',
      description: 'Automação de processos de segurança e testes com CI/CD seguro.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Olá, sou uma <span className="text-primary">Desenvolvedora</span> Full-Stack
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Especializada em cybersecurity, desenvolvimento seguro e proteção de aplicações. Transformo ideias em soluções robustas e seguras.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/projects" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center gap-2">
                  Ver Projetos
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium border border-border">
                  Entrar em Contato
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <Shield className="w-32 h-32 text-primary/50" />
              </div>
            </div>
          </div>
        </section>