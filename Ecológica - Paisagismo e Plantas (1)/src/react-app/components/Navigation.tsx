import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Projetos', href: '#galeria' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={() => handleNavClick('#')}
              className="flex items-center gap-3 group"
            >
              <img
                src="https://mocha-cdn.com/019a9d41-ae78-7ea5-8073-023a1823704e/ecologica-logo-paisagismo.png"
                alt="Ecológica Logo"
                className="w-10 h-10 rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <h3
                  className={`text-lg font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  Ecológica
                </h3>
                <p
                  className={`text-xs transition-colors duration-300 ${
                    isScrolled ? 'text-gray-600' : 'text-emerald-100'
                  }`}
                >
                  Paisagismo Ltda.
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-emerald-600'
                      : 'text-white hover:text-emerald-200'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+554133392454"
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                  isScrolled
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-white text-emerald-900 hover:bg-emerald-50'
                }`}
              >
                Contatar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-2xl font-semibold text-white hover:text-emerald-300 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+554133392454"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg mt-4"
          >
            Contatar
          </a>
        </div>
      </div>
    </>
  );
}
