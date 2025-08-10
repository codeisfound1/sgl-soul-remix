import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Eye } from "lucide-react";

const VideosSection = () => {
  const videos = [
    {
      id: "UlBtrIz31vg",
      title: "Duplex The River Thủ Thiêm - Resort Giữa Trung Tâm Sài Gòn",
      views: "2.6K views",
      duration: "19:43",
      thumbnail: `https://img.youtube.com/vi/UlBtrIz31vg/maxresdefault.jpg`
    },
    {
      id: "AhokN5S8VNc",
      title: "Opera Thủ Thiêm Với Căn Hộ 4 Phòng Ngủ View Sông Sài Gòn",
      views: "15K views",
      duration: "8:19",
      thumbnail: `https://img.youtube.com/vi/AhokN5S8VNc/maxresdefault.jpg`
    },
    {
      id: "DsoCBasY9yI",
      title: "Zeit River Thủ Thiêm - Khám Phá View Sài Gòn Và Tiện Ích Cùng SGLand",
      views: "1.2K views",
      duration: "14:58",
      thumbnail: `https://img.youtube.com/vi/DsoCBasY9yI/maxresdefault.jpg`
    },
    {
      id: "Pc1hmA52C0o",
      title: "TẬP 1: Phố Đông Thượng Hải Có Phải Là Tương Lai Cho Thủ Thiêm, Thủ Đức?",
      views: "4.4K views",
      duration: "8:25",
      thumbnail: `https://img.youtube.com/vi/Pc1hmA52C0o/maxresdefault.jpg`
    },
    {
      id: "YiC-B-9oA7k",
      title: "Căn Hộ 4 Phòng Ngủ Opera Residence , Thuộc Metropole Thủ Thiêm",
      views: "4.5K views",
      duration: "8:20",
      thumbnail: `https://img.youtube.com/vi/YiC-B-9oA7k/maxresdefault.jpg`
    },
    {
      id: "imCOxBGLyN8",
      title: "Loft House Với Nội Thất Indochine Tại Opera Residence - Metropole Thủ Thiêm",
      views: "1.8K views",
      duration: "13:14",
      thumbnail: `https://img.youtube.com/vi/imCOxBGLyN8/maxresdefault.jpg`
    }
  ];

  const openVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section id="video" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Video Dự Án</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá chi tiết các dự án thông qua video thực tế và đánh giá chuyên sâu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card 
              key={video.id} 
              className="group property-card bg-gradient-card shadow-card hover:shadow-luxury overflow-hidden cursor-pointer"
              onClick={() => openVideo(video.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-accent text-accent-foreground rounded-full p-4 shadow-gold">
                    <Play className="h-8 w-8 fill-current" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                    {video.duration}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 leading-tight line-clamp-2 group-hover:text-accent transition-colors">
                  {video.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Eye className="h-4 w-4" />
                  <span>SGLand • {video.views}</span>
                </div>
                
                <Button className="w-full btn-luxury">
                  Xem video
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-hero"
            onClick={() => window.open('https://www.youtube.com/channel/UCOaeBce7v5B3yzUhgaONm-Q', '_blank')}
          >
            Xem kênh YouTube SGLand
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;