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
          <a href="/" className="font-brand text-3xl md:text-4xl text-foreground hover:scale-105 transition-all duration-300">
            ACAMP'S
          </a>
          
          <div className="flex items-center">
            <a 
              href="/inscricao" 
              className="bg-gradient-brand hover:bg-gradient-secondary text-foreground font-bold px-8 py-3 rounded-full shadow-brand transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              Inscreva-se Agora
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;