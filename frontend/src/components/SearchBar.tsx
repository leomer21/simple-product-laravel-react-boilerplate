import React from "react";
import { Input } from "antd";

const { Search } = Input;

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <Search
      placeholder="Search for products..."
      onSearch={onSearch}
      enterButton
      className="mb-4 max-w-[600px]"
      autoFocus
    />
  );
};

export default SearchBar;
