import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EventLocation from '@/components/EventLocation';
import Products from '@/components/Products';
import Registration from '@/components/Registration';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EventLocation />
      <Products />
      <Registration />
      <Testimonials />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
