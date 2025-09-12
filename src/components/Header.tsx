import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary/95 backdrop-blur-sm shadow-brand' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="font-brand text-3xl md:text-4xl text-foreground animate-bounce-gentle">
            ACAMP'S
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a 
              href="#evento" 
              className="text-foreground hover:text-secondary transition-colors duration-300 font-semibold"
            >
              Evento
            </a>
            <a 
              href="#produtos" 
              className="text-foreground hover:text-secondary transition-colors duration-300 font-semibold"
            >
              Produtos
            </a>
            <a 
              href="#testemunhos" 
              className="text-foreground hover:text-secondary transition-colors duration-300 font-semibold"
            >
              Testemunhos
            </a>
            <a 
              href="#contato" 
              className="text-foreground hover:text-secondary transition-colors duration-300 font-semibold"
            >
              Contato
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;