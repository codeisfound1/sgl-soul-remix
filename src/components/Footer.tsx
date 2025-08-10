import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import sglandLogo from "@/assets/sgland-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={sglandLogo} 
                alt="SGLand" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              SGLand - Đơn vị phân phối bất động sản hàng đầu tại Việt Nam. Chuyên cung cấp các sản phẩm bất động sản cao cấp với dịch vụ tư vấn chuyên nghiệp và uy tín.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-accent hover:text-accent-foreground">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-accent hover:text-accent-foreground">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">Giới thiệu</a></li>
              <li><a href="#projects" className="text-primary-foreground/80 hover:text-accent transition-colors">Dự án</a></li>
              <li><a href="#rental" className="text-primary-foreground/80 hover:text-accent transition-colors">Cho thuê</a></li>
              <li><a href="#news" className="text-primary-foreground/80 hover:text-accent transition-colors">Tin tức</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Thông tin liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-accent" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    123 Đường Nguyễn Du, Quận 1<br />
                    TP. Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <p className="text-primary-foreground/80 text-sm">+84 901 234 567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <p className="text-primary-foreground/80 text-sm">info@sgland.vn</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Đăng ký nhận tin</h3>
            <div className="flex gap-2">
              <Input 
                placeholder="Nhập email của bạn..." 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="btn-luxury shrink-0">
                Đăng ký
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 SGLand. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;