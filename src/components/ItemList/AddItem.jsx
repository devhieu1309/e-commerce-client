import React, { useState } from "react";
import { Tabs, Form, message } from "antd";
import axios from "axios";
import GeneralInfoForm from "./GeneralInfoForm";
import VariantForm from "./VariantForm";
import { storeProduct } from "../../services/productServices";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

function AddItem() {
  const navigate = useNavigate();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();
  const [variantList, setVariantList] = useState([]);

  // Hàm xử lý submit
  const handleFinish = async (values) => {
    try {
      const formData = new FormData();

      formData.append("product_name", values.product_name || "");
      formData.append("description", values.description || "");
      formData.append("category_id", values.category_id || "");

      if (
        values.image &&
        values.image.fileList &&
        values.image.fileList.length > 0
      ) {
        const fileObj = values.image.fileList[0].originFileObj;
        formData.append("image", fileObj);
      }

      // Gửi items đúng dạng Laravel đọc được (items[0][image], items[0][SKU], ...)
      variantList.forEach((item, i) => {
        Object.keys(item).forEach((key) => {
          const val = item[key];

          // Nếu là file (từ Upload antd)
          if (val && val.originFileObj instanceof File) {
            formData.append(
              `items[${i}][${key}]`,
              val.originFileObj,
              val.originFileObj.name
            );
          }
          // Nếu là mảng (ví dụ variation_options)
          else if (Array.isArray(val)) {
            val.forEach((v) => {
              formData.append(`items[${i}][${key}][]`, String(v));
            });
          }
          // Các giá trị thường (SKU, price, qty_in_stock, v.v.)
          else {
            formData.append(`items[${i}][${key}]`, val ?? "");
          }
        });
      });

      // Log kiểm tra
      for (let pair of formData.entries()) {
        console.log(pair[0] + ":", pair[1]);
      }

      const response = await storeProduct(formData);
      console.log("Thành công:", response);
      apiNoti.success({
        message: `Thông báo`,
        description: "Thêm sản phẩm mới thành công!",
      });

      setTimeout(() => {
        navigate("/admin/products");
      }, 1000)
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
      message.error("Không thể thêm sản phẩm!");
    } finally {
    }
  };

  const items = [
    {
      key: "1",
      label: "Thông tin chung",
      children: <GeneralInfoForm form={form} />,
    },
    {
      key: "2",
      label: "Biến thể sản phẩm",
      children: (
        <VariantForm
          form={form}
          variantList={variantList}
          setVariantList={setVariantList}
        />
      ),
    },
  ];

  return (
    <>
      {contextHolder}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Thêm sản phẩm mới</h2>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          requiredMark={false}
          encType="multipart/form-data"
        >
          <Tabs defaultActiveKey="1" items={items} />
        </Form>
      </div>
    </>
  );
}

export default AddItem;
