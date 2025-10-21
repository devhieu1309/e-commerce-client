import React, { useState } from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import NewsBlocksModal from "./NewsBlocksModal";
import { searchNewsBlocks } from "../../../services/newsBlocksServices";

const { Option } = Select;

function NewsBlocksToolbar({ onSearch, onAdd, onSearchResult, onReload }) {
  const [keyword, setKeyword] = useState("");

  const handleSearchNewsBlocks = async () => {
    try {
      if (keyword.trim() === "") {
        onReload();
        return;
      }
      const data = await searchNewsBlocks(keyword);
      onSearchResult(data);
    } catch (error) {
      console.log("Tìm kiếm thất bại!", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchNewsBlocks();
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 16,
      }}
    >
      <Space>
        <Input
          placeholder="Nhập tiêu đề bài viết vào "
          prefix={<SearchOutlined />}
          // onChange={(e) => onSearch(e.target.value)}
          style={{ width: 250 }}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          allowClear
        />
      </Space>
      <NewsBlocksModal mode="create" record={{}} onReload={onReload} />
    </div>
  );
}

export default NewsBlocksToolbar;
