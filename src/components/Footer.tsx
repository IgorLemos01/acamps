import { MapPin, Instagram, Heart } from 'lucide-react';
const Footer = () => {
  return <footer id="contato" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <h3 className="font-brand text-4xl mb-4 text-secondary">
              ACAMP'S
            </h3>
            <p className="text-lg leading-relaxed">Uma experiência transformadora e inesquecível para as suas férias.</p>
          </div>
          
          {/* Endereço */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <MapPin className="w-6 h-6 text-accent mr-2" />
              <h4 className="text-xl font-bold">Nossa Casa</h4>
            </div>
            <address className="text-lg leading-relaxed not-italic">
              Centro - Av. Hermes Fontes, 146<br />
              Suíça, Aracaju - SE<br />
              49015-260<br />
              <br />
              <strong>Telefone:</strong> (79) 3012-5777
            </address>
          </div>
          
          {/* Redes Sociais */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Siga-nos</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/juventudearacaju?igsh=NW9mMGJzaHo3Y3Zy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-glow">
                <Instagram className="w-5 h-5" />
                <span className="font-semibold">@juventudearacaju</span>
              </a>
            </div>
            
            <div className="mt-6">
              <p className="text-lg">📧 juventudearacaju@gmail.com</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-lg">
            © 2024 ACAMP'S. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;