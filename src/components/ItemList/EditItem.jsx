import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Select,
  Card,
  Space,
  Table,
  InputNumber,
  Image,
  Upload,
  Typography,
  message,
} from "antd";
import {
  ArrowLeftOutlined,
  SaveOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const EditItem = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    // Giả lập API
    const fetchData = async () => {
      const productData = {
        name: "iPhone 15",
        category_id: 1,
        description: "Sản phẩm cao cấp của Apple",
      };

      const variantsData = [
        {
          key: 1,
          variant: "Đen – 128GB",
          sku: "IP15-BLACK-128",
          price: 25000000,
          quantity: 10,
          image:
            "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
        },
        {
          key: 2,
          variant: "Đen – 256GB",
          sku: "IP15-BLACK-256",
          price: 28000000,
          quantity: 8,
          image:
            "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
        },
      ];

      form.setFieldsValue(productData);
      setVariants(variantsData);
    };
    fetchData();
  }, [id]);

  const onFinish = (values) => {
    console.log("Updated product:", values);
    console.log("Variants:", variants);
    message.success("Cập nhật sản phẩm thành công!");
  };

  const columns = [
    {
      title: "Biến thể",
      dataIndex: "variant",
      render: (text, record, index) => (
        <Input
          value={record.variant}
          onChange={(e) => updateVariant(index, "variant", e.target.value)}
        />
      ),
    },
    {
      title: "SKU",
      dataIndex: "sku",
      render: (text, record, index) => (
        <Input
          value={record.sku}
          onChange={(e) => updateVariant(index, "sku", e.target.value)}
        />
      ),
    },
    {
      title: "Giá",
      dataIndex: "price",
      render: (text, record, index) => (
        <InputNumber
          value={record.price}
          onChange={(value) => updateVariant(index, "price", value)}
          min={0}
          style={{ width: "100%" }}
        />
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      render: (text, record, index) => (
        <InputNumber
          value={record.quantity}
          onChange={(value) => updateVariant(index, "quantity", value)}
          min={0}
          style={{ width: "100%" }}
        />
      ),
    },
    // {
    //   title: "Ảnh",
    //   dataIndex: "image",
    //   render: (image) => {
    //     if (image?.startsWith("blob:")) {
    //       return (
    //         <img
    //           src={image}
    //           alt="preview"
    //           style={{ width: 80, borderRadius: 8 }}
    //         />
    //       );
    //     }

    //     return (
    //       <img
    //         src={`/public/${image}`}
    //         alt={image}
    //         style={{ width: 80, borderRadius: 8 }}
    //       />
    //     );
    //   },
    // },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (image, record) => {
        const handleImageChange = (info) => {
          const file = info.file.originFileObj;
          if (file) {
            const previewUrl = URL.createObjectURL(file);
            record.image = previewUrl;
          }
        };

        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={
                image?.startsWith("blob:") ? image : `/public/${image}` // hoặc /public tuỳ nơi bạn lưu
              }
              alt="product"
              style={{ width: 80, borderRadius: 8, marginBottom: 8 }}
            />

            <Upload
              showUploadList={false}
              beforeUpload={() => false} // không upload tự động
              onChange={handleImageChange}
            >
              <Button size="small" icon={<UploadOutlined />}>
                Đổi ảnh
              </Button>
            </Upload>
          </div>
        );
      },
    },
  ];

  const updateVariant = (index, field, value) => {
    const newVariants = [...variants];
    newVariants[index][field] = value;
    setVariants(newVariants);
  };

  return (
    <Card>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Link to="/admin/products">
          <Button icon={<ArrowLeftOutlined />}>Quay lại danh sách</Button>
        </Link>

        <Title level={3}>Chỉnh sửa sản phẩm</Title>

        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm" }]}
          >
            <Input placeholder="Nhập tên sản phẩm" />
          </Form.Item>

          <Form.Item label="Danh mục" name="category_id">
            <Select placeholder="Chọn danh mục">
              <Select.Option value={1}>Điện thoại</Select.Option>
              <Select.Option value={2}>Laptop</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Mô tả" name="description">
            <Input.TextArea rows={4} placeholder="Nhập mô tả sản phẩm" />
          </Form.Item>

          <Title level={4}>Biến thể sản phẩm</Title>
          <Table
            columns={columns}
            dataSource={variants}
            pagination={false}
            bordered
          />

          <Button
            type="primary"
            icon={<SaveOutlined />}
            htmlType="submit"
            style={{ marginTop: 20 }}
          >
            Lưu thay đổi
          </Button>
        </Form>
      </Space>
    </Card>
  );
};

export default EditItem;
