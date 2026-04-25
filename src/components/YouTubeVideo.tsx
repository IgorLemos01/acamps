import { Play } from 'lucide-react';
import { Card } from '@/components/ui/card';

const YouTubeVideo = () => {
  return (
    <section id="video" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-brand text-3xl sm:text-4xl md:text-6xl text-[#F7DC6B] mb-4 animate-fade-in">
            Veja como foi incrível
          </h2>
          <p className="text-base sm:text-xl text-white max-w-2xl mx-auto animate-slide-up px-2">
            Assista ao vídeo e veja a experiência transformadora do ACAMP'S
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-2 sm:p-4 bg-card shadow-brand animate-slide-up">
            <div className="aspect-video rounded-lg overflow-hidden bg-black">
              <iframe 
                src="https://www.youtube.com/embed/Z3TX-o09u4Y"
                title="ACAMP'S - Uma experiência transformadora"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideo;