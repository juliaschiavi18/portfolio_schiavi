import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Moon, Sun, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projetos' },
    { href: '/about', label: 'Sobre' },
    { href: '/contact', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <Shield className="w-6 h-6" />
          <span>SecDev</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
