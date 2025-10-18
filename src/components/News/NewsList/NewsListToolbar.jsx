import React, { useState } from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import NewsListModal from "./NewsListModal";
import { searchNews } from "../../../services/newsServices";

const { Option } = Select;

function NewsListToolbar({
  onSearch,
  onAdd,
  onSearchResult,

  onReload,
}) {
  const [keyword, setKeyword] = useState("");

  const handleSearchBanner = async () => {
    try {
      if (keyword.trim() === "") {
        onReload();
        return;
      }
      const data = await searchNews(keyword);
      onSearchResult(data);
    } catch (error) {
      console.log("Tìm kiếm thất bại!", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchBanner();
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
          placeholder="Nhập tiêu đề tin tức "
          prefix={<SearchOutlined />}
          // onChange={(e) => onSearch(e.target.value)}
          style={{ width: 250 }}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          allowClear
        />
      </Space>
      <NewsListModal mode="create" record={{}} onReload={onReload} />
    </div>
  );
}

export default NewsListToolbar;
