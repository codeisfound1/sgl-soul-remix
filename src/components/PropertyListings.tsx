import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, TrendingUp } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const PropertyListings = () => {
  const saleProperties = [
    {
      id: 1,
      title: "Bán nhanh căn 4 phòng ngủ The Opera Residence giá tốt",
      price: "55 tỷ VNĐ",
      bedrooms: 4,
      bathrooms: 3,
      area: "160 m²",
      image: project1,
      priceChange: "Đã tăng 24% trên giá gốc",
      trend: "up"
    },
    {
      id: 2,
      title: "Bán căn hộ 2 phòng ngủ The Opera Residence view sông",
      price: "14 tỷ VNĐ",
      bedrooms: 2,
      bathrooms: 2,
      area: "70 m²",
      image: project2,
      priceChange: "Đã tăng 15% trên giá gốc",
      trend: "up"
    },
    {
      id: 3,
      title: "Bán căn hộ 3PN The Opera Residence, tầng cao, góc VIP",
      price: "52 tỷ VNĐ",
      bedrooms: 3,
      bathrooms: 2,
      area: "138 m²",
      image: project3,
      priceChange: "Tăng 20% với giá gốc",
      trend: "up"
    },
    {
      id: 4,
      title: "Bán căn hộ 1PN tòa Massimo The Opera Residence, nội thất sang trọng",
      price: "Liên hệ",
      bedrooms: 1,
      bathrooms: 1,
      area: "55.2 m²",
      image: project1,
      priceChange: "Đã tăng 40% trên giá gốc",
      trend: "up"
    }
  ];

  const rentalProperties = [
    {
      id: 1,
      title: "Cho thuê căn hộ 4PN The Opera Residence tầng cao",
      price: "36tr/tháng",
      bedrooms: 4,
      bathrooms: 3,
      area: "160 m²",
      image: project2,
      furnishing: "Nội thất cơ bản"
    },
    {
      id: 2,
      title: "Cho thuê căn hộ 1PN The Opera Residence full nội thất",
      price: "24tr/tháng",
      bedrooms: 1,
      bathrooms: 1,
      area: "55 m²",
      image: project3,
      furnishing: "Nội thất đầy đủ"
    }
  ];

  const PropertyCard = ({ property, type }: { property: any; type: 'sale' | 'rental' }) => (
    <Card className="group property-card bg-gradient-card shadow-card hover:shadow-luxury overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-accent text-accent-foreground font-medium">
            {property.price}
          </Badge>
        </div>
        {type === 'sale' && property.trend && (
          <div className="absolute top-4 right-4">
            <div className="bg-success text-success-foreground p-2 rounded-full">
              <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-semibold mb-4 leading-tight line-clamp-2">
          {property.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms} phòng</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms} phòng</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span>{property.area}</span>
          </div>
        </div>
        
        {type === 'sale' && property.priceChange && (
          <p className="text-sm text-success font-medium mb-4">
            {property.priceChange}
          </p>
        )}
        
        {type === 'rental' && property.furnishing && (
          <p className="text-sm text-muted-foreground mb-4">
            {property.furnishing}
          </p>
        )}
        
        <Button className="w-full btn-luxury text-sm">
          {type === 'sale' ? 'Xem chi tiết' : 'Liên hệ thuê'}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Sale Properties */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">HOT DEAL: MUA - BÁN</h2>
            <Button variant="outline" className="btn-hero">
              Xem thêm
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProperties.map((property) => (
              <PropertyCard key={property.id} property={property} type="sale" />
            ))}
          </div>
        </div>

        {/* Rental Properties */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Hot Deal: Cho thuê</h2>
            <Button variant="outline" className="btn-hero">
              Xem thêm
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {rentalProperties.map((property) => (
              <PropertyCard key={property.id} property={property} type="rental" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;