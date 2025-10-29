import React, { useState } from "react";
import { Input, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { searchBanner } from "../../services/bannerServices";

function BannerListTooblar({ onSearchResult, onReload }) {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate(); // ✅ Dùng để điều hướng

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

  //  Sửa đường dẫn ở đây
  const handleAddBanner = () => {
    navigate("/admin/bannerlist/createbanner");
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
          placeholder="Nhập tiêu đề Banner"
          prefix={<SearchOutlined />}
          style={{ width: 250 }}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          allowClear
        />
      </Space>

      <Button type="primary" icon={<PlusOutlined />} onClick={handleAddBanner}>
        Thêm Banner
      </Button>
    </div>
  );
}

export default BannerListTooblar;
