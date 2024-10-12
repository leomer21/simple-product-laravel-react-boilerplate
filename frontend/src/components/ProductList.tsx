import React from "react";
import { Row, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail?: string;
  description?: string;
}

interface ProductListProps {
  products: Product[];
  hasMore: boolean;
  fetchMore: () => void;
  onProductClick: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  hasMore,
  fetchMore,
  onProductClick,
}) => {
  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchMore}
      hasMore={hasMore}
      loader={
        <div className="flex justify-center items-center h-32">
          <Spin size="large" />
        </div>
      }
      className="p-4"
    >
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={onProductClick}
          />
        ))}
      </Row>
    </InfiniteScroll>
  );
};

export default ProductList;
