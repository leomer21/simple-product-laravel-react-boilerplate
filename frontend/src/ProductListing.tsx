import React, { useEffect, useState } from "react";
import { Card, Input, Row, Col, Modal, Spin } from "antd";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  description?: string;
}

const { Search } = Input;

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchProducts = async () => {
    try {
      setLoading(true); // Set loading to true before fetching
      const response = await axios.get("http://localhost:8000/api/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showModal = (product: Product) => {
    setSelectedProduct(product); // Set the selected product
    setIsModalVisible(true); // Show the modal
  };

  const handleOk = () => {
    setIsModalVisible(false); // Close the modal
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Close the modal
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col p-4">
      <Search
        addonBefore="Product Title : "
        placeholder="Search for products..."
        onSearch={(value) => setSearchTerm(value)}
        enterButton
        className="mb-4"
      />
      {loading ? ( // Show loading spinner while fetching
        <div className="flex justify-center items-center h-64">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {filteredProducts.map((product) => (
            <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
              <Card
                hoverable
                cover={<img alt={product.title} src={product.thumbnail} />}
                onClick={() => showModal(product)}
              >
                <Card.Meta
                  title={product.title}
                  description={`Price: $${product.price}`}
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <Modal
        title={selectedProduct?.title}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedProduct && (
          <>
            <img
              alt={selectedProduct.title}
              src={selectedProduct.thumbnail}
              className="w-full h-60 object-cover mb-4"
            />
            <p>{selectedProduct.description}</p>
            <p className="font-bold">Price: ${selectedProduct.price}</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ProductListing;
