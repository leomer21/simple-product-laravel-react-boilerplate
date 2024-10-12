import React from "react";
import { Card, Col } from "antd";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail?: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card
        hoverable
        cover={
          <img
            alt={product.title}
            src={product.thumbnail || "default-thumbnail-url"}
          />
        }
        onClick={() => onClick(product)}
      >
        <Card.Meta
          title={product.title}
          description={
            <p className="text-red-600 font-bold">Price: ${product.price}</p>
          }
        />
      </Card>
    </Col>
  );
};

export default ProductCard;
