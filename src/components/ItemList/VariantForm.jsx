import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Button,
  Table,
  InputNumber,
  Upload,
  Select,
} from "antd";

const { Title } = Typography;

function VariantForm({ setVariantList, form }) {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedStorages, setSelectedStorages] = useState([]);
  const [variantList, setLocalVariantList] = useState([]);

  const colorOptions = [
    { label: "Đen", value: 1 },
    { label: "Trắng", value: 2 },
    { label: "Xanh", value: 3 },
    { label: "Hồng", value: 4 },
  ];

  const storageOptions = [
    { label: "128GB", value: 5 },
    { label: "256GB", value: 6 },
  ];

  // Sinh biến thể
  const generateVariants = () => {
    const combinations = [];
    selectedColors.forEach((color) => {
      selectedStorages.forEach((storage) => {
        combinations.push({
          SKU: `SP-${color}-${storage}`,
          price: 0,
          qty_in_stock: 0,
          variation_options: [color, storage],
          image: null,
        });
      });
    });
    setLocalVariantList(combinations);
  };

  // Đồng bộ biến thể về cha
  useEffect(() => {
    setVariantList(variantList);
  }, [variantList]);

  const handleChangeValue = (sku, field, value) => {
    setLocalVariantList((prev) =>
      prev.map((item) =>
        item.SKU === sku ? { ...item, [field]: value } : item
      )
    );
  };

  const handleUpload = (key, info) => {
    console.log("Upload info:", info);
    const fileFromFile = info.file && (info.file.originFileObj ?? info.file);
    const fileFromList =
      Array.isArray(info.fileList) && info.fileList.length
        ? info.fileList[0].originFileObj ?? info.fileList[0]
        : null;

    const file = fileFromFile || fileFromList;
    if (!file) {
      console.warn("Không tìm thấy file trong info:", info);
      return;
    }

    setLocalVariantList((prev) =>
      prev.map((item) => (item.SKU === key ? { ...item, image: file } : item))
    );
  };

  const columns = [
    {
      title: "Ảnh",
      key: "image",
      render: (_, record) => (
        <Upload
          listType="picture-card"
          beforeUpload={() => false}
          onChange={(info) => handleUpload(record.SKU, info)}
        >
          <div>Tải ảnh</div>
        </Upload>
      ),
    },
    {
      title: "SKU",
      dataIndex: "SKU",
    },
    {
      title: "Giá (VNĐ)",
      dataIndex: "price",
      render: (value, record) => (
        <InputNumber
          style={{ width: "100%" }}
          value={record.price}
          onChange={(val) => handleChangeValue(record.SKU, "price", val)}
        />
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "qty_in_stock",
      render: (value, record) => (
        <InputNumber
          style={{ width: "100%" }}
          value={record.qty_in_stock}
          onChange={(val) => handleChangeValue(record.SKU, "qty_in_stock", val)}
        />
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Card title="Thuộc tính biến thể sản phẩm">
        <Title level={5}>Màu sắc</Title>
        <Select
          mode="multiple"
          options={colorOptions}
          value={selectedColors}
          onChange={setSelectedColors}
          style={{ width: 400 }}
        />

        <Title level={5} style={{ marginTop: 16 }}>
          Dung lượng
        </Title>
        <Select
          mode="multiple"
          options={storageOptions}
          value={selectedStorages}
          onChange={setSelectedStorages}
          style={{ width: 400 }}
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
          <Button
            type="primary"
            style={{ marginTop: 16 }}
            onClick={() => form.submit()}
          >
            Tạo mới
          </Button>
        </Card>
      )}
    </div>
  );
}

export default VariantForm;
