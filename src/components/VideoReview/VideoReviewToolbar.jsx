import React from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import VideoReviewModal from "./VideoReviewModal";

const { Option } = Select;

function CategoryToolbar({
  onSearch,
  onParentChange,
  onAdd,
  onReload
}) {
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
          placeholder="Tìm kiếm video review"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 200 }}
        />
      </Space>
      <VideoReviewModal mode="create" record={{}} onReload={onReload} />
    </div>
  );
}

export default CategoryToolbar;
