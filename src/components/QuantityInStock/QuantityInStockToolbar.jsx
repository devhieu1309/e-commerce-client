import React from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

import QuantityInStockModal from "./QuantityInStockModal";

const { Option } = Select;

function QuantityInStockToolbar({
  onSearch,
  onParentChange,
  onAdd,
  parentOptions = [
    {
      id: 1,

      quantity: 100,
      product_image: "image1.jpg",
      price: 5.0,
      product_id: "01",
      SKU: "SP001",
    },
    {
      id: 2,

      quantity: 100,
      product_image: "image1.jpg",
      price: 5.0,
      product_id: "02",
      SKU: "SP001",
    },
    {
      id: 3,

      quantity: 100,
      product_image: "image1.jpg",
      price: 5.0,
      product_id: "03",
      SKU: "SP001",
    },
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
          placeholder="Tìm kiếm sản phẩm trong kho"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 200 }}
        />

        {/* <Select
          placeholder="Danh mục cha"
          onChange={onParentChange}
          style={{ width: 160 }}
          allowClear
        >
          <Option value="">Tất cả</Option>
          {parentOptions.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.product_id}
            </Option>
          ))}
        </Select> */}
      </Space>

      {/* <Button type="primary" icon={<PlusOutlined />} onClick={onAdd}>
        Thêm danh mục
      </Button> */}
      <QuantityInStockModal mode="create" record={{}} />
    </div>
  );
}

export default QuantityInStockToolbar;
