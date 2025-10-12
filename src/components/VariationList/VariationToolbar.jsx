import React from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import VariationModal from "./VariationModal";
// import CategoryModal from "./CategoryModal";

const { Option } = Select;

function ViriationToolbar({
  onSearch,
  onParentChange,
  onAdd,
  parentOptions = [
    { id: 1, category_name: "Điện thoại" },
    { id: 2, category_name: "Laptop" },
    { id: 3, category_name: "Máy tính bảng" },
  ],
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
          placeholder="Tìm kiếm biến thể"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 200 }}
        />

        <Select
          placeholder="Lọc theo danh mục"
          onChange={onParentChange}
          style={{ width: 180 }}
          allowClear
        >
          <Option value="">Tất cả</Option>
          {parentOptions.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.category_name}
            </Option>
          ))}
        </Select>
      </Space>
      <VariationModal mode="create" record={{  }}  />
    </div>
  );
}

export default ViriationToolbar;
