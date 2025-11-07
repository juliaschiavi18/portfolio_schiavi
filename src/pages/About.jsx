import { Code2, Database, Lock, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      icon: Code2,
      technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      category: 'Backend',
      icon: Database,
      technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB'],
    },
    {
      category: 'Cybersecurity',
      icon: Lock,
      technologies: ['OWASP', 'Penetration Testing', 'Network Security', 'Cryptography', 'Incident Response'],
    },
    {
      category: 'DevOps & Tools',
      icon: Zap,
      technologies: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Git', 'Linux'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card border-b border-border py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h1>
            <p className="text-lg text-muted-foreground">
              Conheça minha jornada como desenvolvedora full-stack na área de CyberSecurity
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Quem Sou Eu?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sou uma profissional de tecnologia apaixonada por desenvolvimento de software e cibersegurança. Minha jornada começou com o Técnico em Informática, onde descobri minha curiosidade por entender como os sistemas funcionam — e, principalmente, como protegê-los. Hoje, curso Engenharia de Software e atuo na área de Cybersecurity, unindo minhas duas grandes paixões: criar e proteger.
                </p>
                <p>
                  Ao longo do tempo, participei de projetos voltados à segurança de aplicações, análise de vulnerabilidades e implementação de boas práticas de desenvolvimento seguro. Gosto de enfrentar desafios que envolvem proteção de dados, detecção de ameaças e prevenção de ataques, sempre buscando novas formas de tornar o ambiente digital mais confiável.
                </p>
                <p>
                  Acredito que a segurança deve nascer junto com o código, e não ser adicionada depois. Por isso, busco constantemente aprender, evoluir e aplicar o que sei para construir soluções mais seguras, eficientes e inovadoras. 🚀
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <Lock className="w-32 h-32 text-primary/50" />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-3xl font-bold mb-12">Minhas Habilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map(({ category, icon: Icon, technologies }) => (
                <div
                  key={category}
                  className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12">Experiência Profissional</h2>
            <div className="space-y-8">
              {[
                {
                  title: 'It Analyst & Application Security ',
                  company: 'Porto ',
                  period: 'Setembro 2025 - Presente',
                  description:
                    'Profissional responsável por garantir a segurança e a integridade das aplicações e sistemas de TI, identificando vulnerabilidades e implementando soluções para proteger dados e infraestruturas corporativas.',
                },
                {
                  title: 'It Analyst - Nucleo ',
                  company: 'Porto',
                  period: 'Julho 2025 - Setembro 2025',
                  description:
                    'Profissional que analisa, mantém e otimiza sistemas e infraestruturas de TI, garantindo seu bom funcionamento, segurança e alinhamento com as necessidades do negócio.',
                },
               
              ].map((exp, index) => (
                <div
                  key={index}
                  className="pb-8 border-b border-border last:border-0"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificados */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12">Certificados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'CyberSecurity - FIAP', year: '2025' },
                { name: 'DevOps - FIAP', year: '2025' },
                { name: 'Análise de Dados - Google', year: '2025' },
                { name: 'Biohacking, Deep Web e Criptografia', year: '2025' },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-card border border-border rounded-lg"
                >
                  <p className="font-bold text-foreground">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
