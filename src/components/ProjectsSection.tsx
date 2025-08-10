import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "The Galleria Residence",
      description: "Giai đoạn đầu tiên thuộc dự án Metropole Thủ Thiêm, của tập đoàn SGLand.",
      image: project1,
      status: "Đang mở bán"
    },
    {
      id: 2,
      title: "The Crest Residence", 
      description: "Giai đoạn thứ 2 thuộc dự án Metropole Thủ Thiêm, của tập đoàn SGLand.",
      image: project2,
      status: "Sắp ra mắt"
    },
    {
      id: 3,
      title: "The Opera Residence",
      description: "Giai đoạn thứ 3 thuộc dự án Metropole Thủ Thiêm, của tập đoàn SGLand.",
      image: project3,
      status: "Đã bàn giao"
    },
    {
      id: 4,
      title: "Grand Marina Saigon",
      description: "Dự án căn hộ siêu sang bên sông Sài Gòn, vận hành bởi thương hiệu Marriott.",
      image: project1,
      status: "Đang mở bán"
    },
    {
      id: 5,
      title: "Empire City",
      description: "Dự án với kiến trúc biểu tượng là tòa tháp cao 88 tầng tại Khu chức năng số 2",
      image: project2,
      status: "Sắp ra mắt"
    },
    {
      id: 6,
      title: "SGLand Eco Smart",
      description: "Khu đô thị thông minh tại Thủ Thiêm, do tập đoàn SGLand làm chủ đầu tư.",
      image: project3,
      status: "Đang xây dựng"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Dự án nổi bật</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá những dự án bất động sản cao cấp với thiết kế hiện đại và vị trí đắc địa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group property-card bg-gradient-card shadow-card hover:shadow-luxury overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <Button className="w-full btn-luxury">
                  Xem chi tiết
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="btn-hero">
            Xem tất cả dự án
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;