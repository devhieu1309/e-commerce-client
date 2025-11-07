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
import { editProduct, getProductDetail } from "../../services/productServices";
import { getCategoryList } from "../../services/categoryServices";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [variants, setVariants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [apiNoti, contextHolder] = notification.useNotification();

  // Lấy danh sách danh mục
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getCategoryList();
      setCategories(result.categories);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProductDetail(id);
      // Chuyển đổi dữ liệu nhận được thành 2 biến mong muốn:
      const product = response.product;

      const productData = {
        id: product.product_id,
        name: product.product_name,
        category_name: product.category_name,
        category_id: product.category_id,
        description: product.description,
      };

      // console.log("Product data:", product.items);

      const variantsData = product.items.map((item) => ({
        product_item_id: item.product_item_id,
        SKU: item.sku,
        qty_in_stock: item.qty_in_stock,
        price: parseFloat(item.price.replace(/\./g, "").replace(" đ", "")),
        variation_options: item.variation_options,
        variant_name: Array.isArray(item.variant_name)
          ? item.variant_name.join(" - ")
          : item.variant_name,
        image: item.image ? item.image : "no-image.jpg",
      }));

      // const variantsData = [
      //   {
      //     key: 1,
      //     variant: "Đen – 128GB",
      //     sku: "IP15-BLACK-128",
      //     price: 25000000,
      //     quantity: 10,
      //     image:
      //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      //   },
      //   {
      //     key: 2,
      //     variant: "Đen – 256GB",
      //     sku: "IP15-BLACK-256",
      //     price: 28000000,
      //     quantity: 8,
      //     image:
      //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      //   },
      // ];

      form.setFieldsValue(productData);
      setVariants(variantsData);
    };
    fetchData();
  }, [id]);

  // Hàm xử lý cập nhật sản phẩm
  const handleUpdate = async (values) => {
    try {
      const formData = new FormData();

      // Các trường cơ bản
      formData.append("product_name", values.name || "");
      formData.append("description", values.description || "");
      formData.append("category_id", values.category_id || "");

      // Ảnh chính (nếu có file mới chọn)
      if (
        values.image &&
        values.image.fileList &&
        values.image.fileList.length > 0
      ) {
        const fileObj = values.image.fileList[0].originFileObj;
        if (fileObj instanceof File) {
          formData.append("image", fileObj);
        }
      }

      // Gửi danh sách items giống hệt khi thêm mới
      // variants.forEach((item, i) => {
      //   Object.keys(item).forEach((key) => {
      //     const val = item[key];

      //     // Nếu là file (Upload antd)
      //     if (val && val.originFileObj instanceof File) {
      //       formData.append(
      //         `items[${i}][${key}]`,
      //         val.originFileObj,
      //         val.originFileObj.name
      //       );
      //     }
      //     // Nếu là mảng (VD: variation_options)
      //     else if (Array.isArray(val)) {
      //       val.forEach((v) => {
      //         formData.append(`items[${i}][${key}][]`, String(v));
      //       });
      //     }
      //     // Giá trị thông thường
      //     else {
      //       formData.append(`items[${i}][${key}]`, val ?? "");
      //     }
      //   });
      // });

      variants.forEach((item, i) => {
        // Nếu có file ảnh mới
        if (item.file instanceof File) {
          formData.append(`items[${i}][image]`, item.file, item.file.name);
        } else {
          // Không có ảnh mới thì giữ lại link cũ (nếu có)
          formData.append(`items[${i}][image_url]`, item.image || "");
        }

        // Gửi các trường khác
        Object.keys(item).forEach((key) => {
          if (key === "image" || key === "file") return; // bỏ qua 2 trường này

          const val = item[key];

          if (Array.isArray(val)) {
            val.forEach((v) => {
              formData.append(`items[${i}][${key}][]`, String(v));
            });
          } else {
            formData.append(`items[${i}][${key}]`, val ?? "");
          }
        });
      });

      // Log kiểm tra
      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ":", pair[1]);
      // }

      const response = await editProduct(id, formData);
      console.log("API response:", response);

      if (response.success) {
        apiNoti.success({
          message: `Thông báo`,
          description: "Cập nhật sản phẩm thành công!",
        });

        setTimeout(() => {
          navigate("/admin/products");
        }, 1500);
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error);
      message.error("Không thể cập nhật sản phẩm!");
    }
  };

  const columns = [
    {
      title: "Biến thể",
      dataIndex: "variant_name",
      render: (text, record, index) => (
        <Input
          value={record.variant_name}
          onChange={(e) => updateVariant(index, "variant_name", e.target.value)}
        />
      ),
    },
    {
      title: "SKU",
      dataIndex: "SKU",
      render: (text, record, index) => (
        <Input
          value={record.SKU}
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
      dataIndex: "qty_in_stock",
      render: (text, record, index) => (
        <InputNumber
          value={record.qty_in_stock}
          onChange={(value) => updateVariant(index, "qty_in_stock", value)}
          min={0}
          style={{ width: "100%" }}
        />
      ),
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (image, record, index) => {
        // const handleImageChange = (info) => {
        //   console.log("Upload info:", info);

        //   const fileObj = info.file.originFileObj || info.file; // đề phòng originFileObj không tồn tại

        //   if (fileObj instanceof Blob) {
        //     const previewUrl = URL.createObjectURL(fileObj);
        //     console.log("Preview URL:", previewUrl);
        //     setVariants((prevVariants) =>
        //       prevVariants.map((item, i) =>
        //         i === index ? { ...item, image: previewUrl } : item
        //       )
        //     );
        //   } else {
        //     console.warn(
        //       "Không thể tạo URL preview vì file không hợp lệ:",
        //       fileObj
        //     );
        //   }
        // };

        const handleImageChange = (info) => {
          const fileObj = info.file.originFileObj || info.file;

          if (fileObj instanceof Blob) {
            const previewUrl = URL.createObjectURL(fileObj);

            setVariants((prev) =>
              prev.map((item, i) =>
                i === index
                  ? {
                      ...item,
                      image: previewUrl, // dùng để hiển thị preview
                      file: fileObj, // thêm dòng này để giữ file thật
                    }
                  : item
              )
            );
          }
        };

        return (
          <div style={{ textAlign: "center" }}>
            <img
              src={image}
              alt="variant"
              style={{
                width: 80,
                height: 80,
                objectFit: "cover",
                borderRadius: 8,
                marginBottom: 8,
                border: "1px solid #f0f0f0",
              }}
            />

            <Upload
              showUploadList={false}
              beforeUpload={() => false}
              onChange={handleImageChange}
              accept="image/*"
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
    <>
      {contextHolder}
      <Card>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Link to="/admin/products">
            <Button icon={<ArrowLeftOutlined />}>Quay lại danh sách</Button>
          </Link>

          <Title level={3}>Chỉnh sửa sản phẩm</Title>

          <Form layout="vertical" form={form} onFinish={handleUpdate}>
            <Form.Item
              label="Tên sản phẩm"
              name="name"
              rules={[
                { required: true, message: "Vui lòng nhập tên sản phẩm" },
              ]}
            >
              <Input placeholder="Nhập tên sản phẩm" />
            </Form.Item>

            <Form.Item label="Danh mục" name="category_id">
              <Select
                style={{
                  width: "100%",
                }}
                placeholder="Chọn danh mục"
                allowClear
              >
                {categories &&
                  categories.map((item) => (
                    <Option value={item.category_id}>
                      {item.category_name}
                    </Option>
                  ))}
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
    </>
  );
};

export default EditItem;
