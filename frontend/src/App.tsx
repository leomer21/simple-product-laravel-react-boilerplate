import React from "react";
import { Typography } from "antd";

import ProductListing from "./ProductListing";

const { Title } = Typography;

const App: React.FC = () => {
  return (
    <div className="p-8">
      <Title>Product Listing</Title>
      <ProductListing />
    </div>
  );
};

export default App;
