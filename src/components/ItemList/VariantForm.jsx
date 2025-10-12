import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Card,
  Checkbox,
  Typography,
  Button,
  Table,
  Input,
  InputNumber,
  Upload,
  Select,
} from "antd";

const { Title } = Typography;

function VariantForm() {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedStorages, setSelectedStorages] = useState([]);
  const [variantList, setVariantList] = useState([]);

  // Danh sách thuộc tính
  const colorOptions = [
    { label: "Đen", value: "black" },
    { label: "Trắng", value: "white" },
    { label: "Xanh", value: "blue" },
    { label: "Hồng", value: "pink" },
  ];

  const storageOptions = [
    { label: "128GB", value: "128" },
    { label: "256GB", value: "256" },
  ];

  // Sinh biến thể
  const generateVariants = () => {
    const combinations = [];
    selectedColors.forEach((color) => {
      selectedStorages.forEach((storage) => {
        combinations.push({
          key: `${color}-${storage}`,
          name: `${color.toUpperCase()} - ${storage}GB`,
          sku: `SP-${color.toUpperCase()}-${storage}`,
          price: 0,
          quantity: 0,
        });
      });
    });
    setVariantList(combinations);
  };

  // Cấu hình bảng hiển thị biến thể
  const columns = [
    { title: "Biến thể", dataIndex: "name", key: "name" },
    {
      title: "Ảnh",
      key: "image",
      render: () => (
        <Upload listType="picture-card">
          <div>Tải ảnh</div>
        </Upload>
      ),
    },
    {
      title: "SKU",
      dataIndex: "sku",
      render: (text) => <Input defaultValue={text} />,
    },
    {
      title: "Giá (VNĐ)",
      dataIndex: "price",
      render: () => (
        <InputNumber style={{ width: "100%" }} placeholder="Nhập giá" />
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      render: () => (
        <InputNumber style={{ width: "100%" }} placeholder="Nhập số lượng" />
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Card title="Thuộc tính biến thể sản phẩm" bordered={true}>
        <Title level={5}>Màu sắc</Title>
        <Select
          mode="multiple"
          allowClear
          placeholder="Chọn màu sắc"
          style={{ width: "100%", maxWidth: 400 }}
          options={colorOptions}
          value={selectedColors}
          onChange={setSelectedColors}
        />

        <Title level={5} style={{ marginTop: 16 }}>
          Dung lượng
        </Title>
        <Select
          mode="multiple"
          allowClear
          placeholder="Chọn dung lượng"
          style={{ width: "100%", maxWidth: 400 }}
          options={storageOptions}
          value={selectedStorages}
          onChange={setSelectedStorages}
        />

        <div style={{ marginTop: 20 }}>
          <Button
            type="primary"
            onClick={generateVariants}
            disabled={!selectedColors.length || !selectedStorages.length}
          >
            Sinh biến thể
          </Button>
        </div>
      </Card>

      {variantList.length > 0 && (
        <Card title="Danh sách biến thể" style={{ marginTop: 20 }}>
          <Table
            columns={columns}
            dataSource={variantList}
            pagination={false}
            bordered
          />
          <Button type="primary" >
            Tạo mới
          </Button>
        </Card>
      )}
    </div>
  );
}

export default VariantForm;
