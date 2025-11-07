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
                {/* Skills Section */}
        <section className="bg-card border-y border-border py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Minhas Especialidades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-lg text-muted-foreground">
              Confira alguns dos meus trabalhos recentes em CyberSecurity e Desenvolvimento Seguro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects" className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium inline-flex items-center gap-2 border border-border">
              Ver Todos os Projetos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos Criar Algo Seguro e Incrível?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Tenho interesse em projetos desafiadores que envolvam segurança. Vamos conversar!
            </p>
            <Link href="/contact" className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium inline-block">
              Entrar em Contato
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
