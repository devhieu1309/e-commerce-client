import React from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Option } = Select;

function CategoryToolbar(props) {
  const { onAdd, categories, handleGetProductByCategory, handleSearchProduct } =
    props;

  const onSearch = (value) => {
    handleSearchProduct(value);
  };

  const onParentChange = (value) => {
    handleGetProductByCategory(value);
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
          placeholder="Tìm kiếm sản phẩm"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 200 }}
        />

        <Select
          placeholder="Chọn danh mục"
          onChange={onParentChange}
          style={{ width: 160 }}
          allowClear
        >
          <Option value="">Tất cả</Option>
          {categories.map((item) => (
            <Option key={item.category_id} value={item.category_id}>
              {item.category_name}
            </Option>
          ))}
        </Select>
      </Space>

      <Link to="create">
        <Button type="primary" icon={<PlusOutlined />}>
          Thêm sản phẩm
        </Button>
      </Link>
    </div>
  );
}

export default CategoryToolbar;
