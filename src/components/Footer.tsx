import { MapPin, Instagram, Heart } from 'lucide-react';
const Footer = () => {
  return <footer id="contato" className="bg-[#EF8A32] text-primary-foreground py-10 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 md:text-center">
          {/* Logo e Descrição */}
          <div className="text-center">
            <h3 className="font-brand text-3xl sm:text-4xl mb-4 text-white">
              ACAMP'S
            </h3>
            <p className="text-base sm:text-lg leading-relaxed">Uma experiência transformadora e inesquecível para as suas férias.</p>
          </div>
          
          {/* Endereço */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent mr-2 shrink-0" />
              <h4 className="text-lg sm:text-xl font-bold">Nossa Casa</h4>
            </div>
            <address className="text-sm sm:text-lg leading-relaxed not-italic">
              Centro - Av. Hermes Fontes, 146<br />
              Suíça, Aracaju - SE<br />
              49015-260<br />
              <br />
              <strong>Telefone:</strong> (79) 3012-5777
            </address>
          </div>
          
          {/* Redes Sociais */}
          <div className="text-center">
            <h4 className="text-lg sm:text-xl font-bold mb-4">Siga-nos</h4>
            <div className="flex justify-center">
              <a href="https://www.instagram.com/juventudearacaju?igsh=NW9mMGJzaHo3Y3Zy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-glow max-w-full">
                <Instagram className="w-5 h-5 shrink-0" />
                <span className="font-semibold text-sm sm:text-base truncate">@juventudearacaju</span>
              </a>
            </div>
            
            <div className="mt-6">
              <p className="text-sm sm:text-lg break-all">📧 juventudearacaju@gmail.com</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-lg">© 2025 ACAMP'S. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;