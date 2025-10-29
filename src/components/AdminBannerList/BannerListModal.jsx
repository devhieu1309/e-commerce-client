import {
  Button,
  Form,
  Input,
  notification,
  Spin,
  Select,
  Upload,
  Row,
  Col,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getDetailBanner,
  storeBanner,
  editBanner,
} from "../../services/bannerServices";

function BannerFormPage({ mode = "create" }) {
  const [form] = Form.useForm();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const rules = [{ required: true, message: "Bắt buộc" }];

  // Lấy dữ liệu banner khi edit
  useEffect(() => {
    if (mode === "edit" && id) {
      fetchBanner();
    }
  }, [id]);

  const fetchBanner = async () => {
    setSpinning(true);
    const result = await getDetailBanner(id);
    if (result) {
      form.setFieldsValue({
        title: result.title,
        link_url: result.link_url,
        position: result.position,
        is_active: String(result.is_active),
      });

      setFileList(
        result.image
          ? [
              {
                uid: "-1",
                name: result.image,
                status: "done",
                url: `http://127.0.0.1:8000/storage/${result.image}`,
              },
            ]
          : []
      );
    }
    setSpinning(false);
  };

  const handleSubmit = async (values) => {
    setSpinning(true);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("link_url", values.link_url);
    formData.append("position", values.position);
    formData.append("is_active", Number(values.is_active));

    if (fileList.length > 0) {
      const file = fileList[0];
      if (file.originFileObj) {
        formData.append("image", file.originFileObj);
      }
    }

    let response;
    if (mode === "edit" && id) {
      response = await editBanner(id, formData);
    } else {
      response = await storeBanner(formData);
    }

    if (response) {
      apiNoti.success({
        message: "Thành công",
        description: `${
          mode === "edit" ? "Cập nhật" : "Thêm mới"
        } banner thành công!`,
      });
      setTimeout(() => {
        navigate("/admin/bannerlist");
      }, 1000);
    } else {
      apiNoti.error({
        message: "Thất bại",
        description: `${
          mode === "edit" ? "Cập nhật" : "Thêm mới"
        } banner thất bại!`,
      });
    }

    setSpinning(false);
  };

  return (
    <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-md">
      {contextHolder}
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        {mode === "edit" ? "Cập nhật Banner" : "Thêm Banner mới"}
      </h2>

      <Spin spinning={spinning}>
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          className="space-y-4"
        >
          {/* Tiêu đề Banner */}
          <Form.Item label="Tên tiêu đề Banner" name="title" rules={rules}>
            <Input placeholder="Nhập tên banner" />
          </Form.Item>

          {/* Upload ảnh */}
          <Form.Item label="Ảnh Banner" name="image">
            <Upload
              listType="picture-card"
              beforeUpload={() => false}
              maxCount={1}
              fileList={fileList}
              onChange={({ fileList: newFileList }) => setFileList(newFileList)}
            >
              <div className="flex flex-col items-center justify-center">
                <UploadOutlined className="text-2xl text-gray-600" />
                <span className="mt-1 text-sm text-gray-700">Tải ảnh lên</span>
              </div>
            </Upload>
          </Form.Item>

          {/* Link URL */}
          <Form.Item label="Link URL" name="link_url" rules={rules}>
            <Input placeholder="https://..." />
          </Form.Item>

          {/* Vị trí & Trạng thái */}
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Vị trí" name="position" rules={rules}>
                <Select placeholder="Chọn vị trí">
                  <Select.Option value="home">Trang chủ</Select.Option>
                  <Select.Option value="product">Sản phẩm</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Trạng thái" name="is_active" rules={rules}>
                <Select placeholder="Chọn trạng thái">
                  <Select.Option value="1">Hiển thị</Select.Option>
                  <Select.Option value="0">Ẩn đi</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          {/* Nút Thêm / Cập nhật & Hủy */}
          <Form.Item>
            <div className="flex flex-wrap gap-3 mt-2">
              <Button type="primary" htmlType="submit" className="px-4 py-1">
                {mode === "edit" ? "Cập nhật" : "Thêm mới"}
              </Button>
              <Button
                onClick={() => navigate("/admin/bannerlist")}
                className="px-4 py-1"
              >
                Hủy
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
}

export default BannerFormPage;
