import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-apartment.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Video Overlay */}
      <div className="video-overlay" />
      
      {/* Video Player Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* YouTube Video Embed */}
          <div className="relative w-[90vw] max-w-4xl aspect-video rounded-lg overflow-hidden shadow-luxury">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/fog1NnhZSJ4?autoplay=1&mute=1&controls=1&rel=0"
              title="SGLand - Trinh Lee & Soul Home | Vì Sao Giá Căn Hộ Cao Cấp Thủ Thiêm Cao Hơn Quận 1?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          {/* Play Button Overlay (optional, for aesthetic) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-primary/20 backdrop-blur-sm rounded-full p-6 animate-float">
              <Play className="h-12 w-12 text-primary-foreground fill-current" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-8 left-8 right-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            SGLand - Định Nghĩa Mới Của Bất Động Sản Cao Cấp
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in">
            Khám phá những dự án bất động sản hàng đầu với thiết kế hiện đại và vị trí đắc địa
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button size="lg" className="btn-luxury">
              Khám Phá Dự Án
            </Button>
            <Button size="lg" variant="outline" className="btn-hero">
              Liên Hệ Tư Vấn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;