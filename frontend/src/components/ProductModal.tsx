import React from "react";
import { Modal } from "antd";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail?: string;
  description?: string;
}

interface ProductModalProps {
  product: Product | null;
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  visible,
  onOk,
  onCancel,
}) => {
  if (!product) return null;

  return (
    <Modal
      title={product.title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <img
        alt={product.title}
        src={product.thumbnail || "default-thumbnail-url"}
        className="w-full h-60 object-cover mb-4"
      />
      <p>{product.description}</p>
      <p className="font-bold">Price: ${product.price}</p>
    </Modal>
  );
};

export default ProductModal;
