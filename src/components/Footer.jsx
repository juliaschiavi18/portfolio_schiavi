import { Github, Linkedin, Mail, ExternalLink, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/juliaschiavi18',
      label: 'GitHub',
      ariaLabel: 'Visite meu GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/julia-schiavi-10a84b1a5/',
      label: 'LinkedIn',
      ariaLabel: 'Visite meu LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:contato@example.com',
      label: 'Email',
      ariaLabel: 'Envie um email',
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">SecDev</h3>
            </div>
            <p className="text-muted-foreground">
              Desenvolvedora full-stack apaixonada por CyberSecurity e segurança de aplicações.
            </p>
          </div>
          {/*Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  Home <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  Projetos <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  Sobre <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label, ariaLabel }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="p-2 bg-secondary hover:bg-accent rounded-lg transition-colors"
                  title={label}
                >
                  <Icon className="w-5 h-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {currentYear} SecDev. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
