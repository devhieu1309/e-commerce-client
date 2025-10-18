import React, { useState } from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import BannerListModal from "./BannerListModal";
import { searchBanner } from "../../services/bannerServices";

const { Option } = Select;

function BannerListTooblar({
  onSearch,
  onAdd,
  onSearchResult,
  // parentOptions = [
  //   { id: 1, status: "Đang xử lý" },
  //   { id: 2, status: "Giao thành công" },
  //   { id: 3, status: "Xác nhận đơn hàng" },
  // ],
  onReload,
}) {
  const [keyword, setKeyword] = useState("");

  const handleSearchBanner = async () => {
    try {
      if (keyword.trim() === "") {
        onReload();
        return;
      }
      const data = await searchBanner(keyword);
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
          placeholder="Nhập tiêu đề Banner "
          prefix={<SearchOutlined />}
          // onChange={(e) => onSearch(e.target.value)}
          style={{ width: 250 }}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          allowClear
        />
      </Space>
      <BannerListModal mode="create" record={{}} onReload={onReload} />
    </div>
  );
}

export default BannerListTooblar;
