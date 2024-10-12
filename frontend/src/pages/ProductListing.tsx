import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import ProductModal from "../components/ProductModal";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail?: string;
  description?: string;
}

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const limit = 12;

  const fetchProducts = async (reset = false) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/products`,
        {
          params: {
            limit: limit,
            skip: skip,
            select: "title,price,thumbnail,description",
            search: searchTerm,
          },
        }
      );
      console.log(skip, limit);

      const newProducts = response.data.products;

      if (reset) {
        setProducts(newProducts);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      }

      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setSkip(skip + limit);
      }
    } catch (error) {
      console.error("Failed to fetch products", error);
      setHasMore(false);
    }
  };

  const onSearch = (value: string) => {
    setSearchTerm(value);
    setSkip(0);
    setHasMore(true);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    fetchProducts(!!searchTerm);
  }, [searchTerm]);

  return (
    <div className="flex flex-col p-4">
      <SearchBar onSearch={onSearch} />
      <ProductList
        products={products}
        hasMore={hasMore}
        fetchMore={fetchProducts}
        onProductClick={handleProductClick}
      />
      <ProductModal
        product={selectedProduct}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      />
    </div>
  );
};

export default ProductListing;
