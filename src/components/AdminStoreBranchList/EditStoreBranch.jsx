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
import { getStoreBranchById, editStoreBranch } from "../../services/storeBranchServices";
import { getProvinces, getWardsByProvince } from "../../services/addressServices";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Option } = Select;

const EditStoreBranch = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [wards, setWards] = useState([]);
  const [apiNoti, contextHolder] = notification.useNotification();

  // Lấy danh sách tỉnh thành
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const result = await getProvinces();
  //     setProvinces(result.provinces);
  //   };
  //   fetchApi();
  // }, []);
  const handleProvinceChange = async (provinceId) => {
    form.setFieldsValue({ wards_id: null });
    setWards([]);
    if (!provinceId) return;
    try {
      const res = await getWardsByProvince(provinceId);
      setWards(res.wards);
      // setWards(res.data || res);
    } catch (err) {
      notification.error({ message: "Lỗi khi tải danh sách phường/xã", err });
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getStoreBranchById(id);
  //     // Chuyển đổi dữ liệu nhận được thành 2 biến mong muốn:
  //     const storeBranch = response.storeBranch;
  //     console.log("Response từ API getStoreBranchById:", response);
  //     const storeBranchData = {
  //       id: storeBranch.store_branch_id,
  //       name: storeBranch.name,
  //       phone_number: storeBranch.phone_number,
  //       email: storeBranch.email,
  //       opening_hours: storeBranch.opening_hours,
  //       map_link: storeBranch.map_link,
  //       detailed_address: storeBranch.address?.detailed_address,
  //       provinces_id: storeBranch.address?.provinces_id,
  //       wards_id: storeBranch.address?.wards_id,
  //     };

  //     form.setFieldsValue(storeBranchData);
  //   };
  //   fetchData();
  // }, [id]);

  // Hàm xử lý cập nhật chi nhánh
  // const handleUpdate = async (values) => {
  //   try {
  //     const formData = new FormData();

  //     // Các trường cơ bản
  //     formData.append("product_name", values.name || "");
  //     formData.append("description", values.description || "");
  //     formData.append("category_id", values.category_id || "");

  //     // Ảnh chính (nếu có file mới chọn)
  //     if (
  //       values.image &&
  //       values.image.fileList &&
  //       values.image.fileList.length > 0
  //     ) {
  //       const fileObj = values.image.fileList[0].originFileObj;
  //       if (fileObj instanceof File) {
  //         formData.append("image", fileObj);
  //       }
  //     }

  //     // Gửi danh sách items giống hệt khi thêm mới
  //     // variants.forEach((item, i) => {
  //     //   Object.keys(item).forEach((key) => {
  //     //     const val = item[key];

  //     //     // Nếu là file (Upload antd)
  //     //     if (val && val.originFileObj instanceof File) {
  //     //       formData.append(
  //     //         `items[${i}][${key}]`,
  //     //         val.originFileObj,
  //     //         val.originFileObj.name
  //     //       );
  //     //     }
  //     //     // Nếu là mảng (VD: variation_options)
  //     //     else if (Array.isArray(val)) {
  //     //       val.forEach((v) => {
  //     //         formData.append(`items[${i}][${key}][]`, String(v));
  //     //       });
  //     //     }
  //     //     // Giá trị thông thường
  //     //     else {
  //     //       formData.append(`items[${i}][${key}]`, val ?? "");
  //     //     }
  //     //   });
  //     // });

  //     variants.forEach((item, i) => {
  //       // Nếu có file ảnh mới
  //       if (item.file instanceof File) {
  //         formData.append(`items[${i}][image]`, item.file, item.file.name);
  //       } else {
  //         // Không có ảnh mới thì giữ lại link cũ (nếu có)
  //         formData.append(`items[${i}][image_url]`, item.image || "");
  //       }

  //       // Gửi các trường khác
  //       Object.keys(item).forEach((key) => {
  //         if (key === "image" || key === "file") return; // bỏ qua 2 trường này

  //         const val = item[key];

  //         if (Array.isArray(val)) {
  //           val.forEach((v) => {
  //             formData.append(`items[${i}][${key}][]`, String(v));
  //           });
  //         } else {
  //           formData.append(`items[${i}][${key}]`, val ?? "");
  //         }
  //       });
  //     });

  //     // Log kiểm tra
  //     // for (let pair of formData.entries()) {
  //     //   console.log(pair[0] + ":", pair[1]);
  //     // }

  //     const response = await editProduct(id, formData);
  //     console.log("API response:", response);

  //     if (response.success) {
  //       apiNoti.success({
  //         message: `Thông báo`,
  //         description: "Cập nhật sản phẩm thành công!",
  //       });

  //       setTimeout(() => {
  //         navigate("/admin/products");
  //       }, 1500);
  //     }
  //   } catch (error) {
  //     console.error("Lỗi khi cập nhật sản phẩm:", error);
  //     message.error("Không thể cập nhật sản phẩm!");
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Lấy danh sách tỉnh/thành trước (để có options)
        const provincesRes = await getProvinces();
        setProvinces(provincesRes.provinces || []);

        // Lấy dữ liệu chi nhánh theo id
        const response = await getStoreBranchById(id);
        const storeBranch = response.storeBranch;

        const provinceId = storeBranch.address?.provinces_id;
        const wardId = storeBranch.address?.wards_id;

        // Nếu có tỉnh thì load danh sách phường/xã tương ứng
        if (provinceId) {
          const wardsRes = await getWardsByProvince(provinceId);
          setWards(wardsRes.wards || []);
        }

        // Set giá trị cho form (sau khi đã có dữ liệu cần thiết)
        form.setFieldsValue({
          id: storeBranch.store_branch_id,
          name: storeBranch.name,
          phone_number: storeBranch.phone_number,
          email: storeBranch.email,
          opening_hours: storeBranch.opening_hours,
          map_link: storeBranch.map_link,
          detailed_address: storeBranch.address?.detailed_address,
          provinces_id: provinceId,
          wards_id: wardId,
        });
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu chi nhánh:", error);
        notification.error({
          message: "Không thể tải dữ liệu chi nhánh",
          description: error.message,
        });
      } finally {
        setLoading(false); // Kết thúc loading
      }
    };

    fetchData();
  }, [id]);

  const handleUpdate = async (values) => {
    try {
      setLoading(true);
      const storeBranchData = {
        name: values.name,
        phone_number: values.phone_number,
        email: values.email,
        opening_hours: values.opening_hours,
        map_link: values.map_link,
        detailed_address: values.detailed_address,
        provinces_id: values.provinces_id,
        wards_id: values.wards_id
      };

      const response = await editStoreBranch(id, storeBranchData);

      if (response.success) {
        apiNoti.success({
          message: `Thông báo`,
          description: "Cập nhật chi nhánh thành công!",
        });

        setTimeout(() => {
          navigate("/admin/store-branches");
        }, 1000);
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật chi nhánh:", error);
      message.error("Không thể cập nhật chi nhánh!");
    } finally {
      setLoading(false); // Kết thúc loading
    }
  };

  return (
    <>
      {contextHolder}
      <Card loading={loading}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Link to="/admin/store-branches">
            <Button icon={<ArrowLeftOutlined />}>Quay lại danh sách</Button>
          </Link>

          <Title level={3}>Chỉnh sửa chi nhánh</Title>

          <Form layout="vertical" form={form} onFinish={handleUpdate}>
            <Form.Item
              label="Tên chi nhánh"
              name="name"
              rules={[
                { required: true, message: "Vui lòng nhập tên chi nhánh" },
              ]}
            >
              <Input placeholder="Nhập tên chi nhánh" />
            </Form.Item>

            <Form.Item label="Số điện thoại" name="phone_number" rules={[
              { required: true, message: "Vui lòng nhập số điện thoại" },
            ]}>
              <Input placeholder="Nhập số điện thoại" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email" },
              ]}
            >
              <Input placeholder="Nhập email" />
            </Form.Item>

            <Form.Item
              label="Giờ mở cửa"
              name="opening_hours"
              rules={[
                { required: true, message: "Vui lòng nhập giờ mở cửa" },
              ]}
            >
              <Input placeholder="Ví dụ: 08:00 - 22:00" />
            </Form.Item>

            <Form.Item
              label="Tỉnh / Thành phố"
              name="provinces_id"
              rules={[{ required: true, message: "Vui lòng chọn tỉnh/thành" }]}
            >
              <Select
                style={{
                  width: "100%",
                }}
                placeholder="Chọn tỉnh/thành"
                allowClear
                onChange={handleProvinceChange}
              >
                {provinces &&
                  provinces.map((item) => (
                    <Option value={item.provinces_id}>
                      {item.full_name}
                    </Option>
                  ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Phường / Xã"
              name="wards_id"
              rules={[{ required: true, message: "Vui lòng chọn phường/xã" }]}
            >
              <Select
                style={{
                  width: "100%",
                }}
                placeholder="Chọn phường/xã"
                allowClear
              >
                {wards &&
                  wards.map((item) => (
                    <Option value={item.wards_id}>
                      {item.name}
                    </Option>
                  ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Địa chỉ chi tiết"
              name="detailed_address"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
            >
              <Input placeholder="Ví dụ: 123 Nguyễn Trãi, P. Bến Thành" />
            </Form.Item>

            <Form.Item label="Link bản đồ" name="map_link">
              <Input placeholder="VD: https://goo.gl/maps/xyz" />
            </Form.Item>

            <Button
              type="primary"
              icon={<SaveOutlined />}
              htmlType="submit"
              style={{ marginTop: 20 }}
              loading={loading}
            >
              Lưu thay đổi
            </Button>
          </Form>
        </Space>
      </Card>
    </>
  );
};

export default EditStoreBranch;
