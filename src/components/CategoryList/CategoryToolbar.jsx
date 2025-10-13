import React from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import CategoryModal from "./CategoryModal";

const { Option } = Select;

function CategoryToolbar({
  onSearch,
  onParentChange,
  onAdd,
  parentOptions = [
    { id: 1, category_name: "Điện thoại" },
    { id: 2, category_name: "Laptop" },
    { id: 3, category_name: "Máy tính bảng" },
  ],
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
          placeholder="Tìm kiếm danh mục"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 200 }}
        />

        <Select
          placeholder="Danh mục cha"
          onChange={onParentChange}
          style={{ width: 160 }}
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
      <CategoryModal mode="create" record={{  }} onReload={onReload}  />
    </div>
  );
}

export default CategoryToolbar;
