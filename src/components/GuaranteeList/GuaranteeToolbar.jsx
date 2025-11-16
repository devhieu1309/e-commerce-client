import React from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Option } = Select;

function GuaranteeToolbar(props) {
  const { onAdd, products, handleGetGuaranteeByProduct, handleSearchGuarantee } =
    props;

  const onSearch = (value) => {
    handleSearchGuarantee(value);
  };

  const onParentChange = (value) => {
    handleGetGuaranteeByProduct(value);
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
          placeholder="Tìm kiếm...."
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 200 }}
        />

        <Select
          placeholder="Chọn sản phẩm"
          onChange={onParentChange}
          style={{ width: 160 }}
          allowClear
        >
          <Option value="">Tất cả</Option>
          {/* <Option value="">Samsung A30</Option>
          <Option value="">ViVo Y16</Option> */}
          
          {products.map((item) => (
            
            <Option key={item.product_id} value={item.product_id}>
              {item.product_name}
            </Option>
          ))}
          
        </Select>
      </Space>

      <Link to="create">
        <Button type="primary" icon={<PlusOutlined />}>
          Thêm bảo hành
        </Button>
      </Link>
    </div>
  );
}

export default GuaranteeToolbar;

