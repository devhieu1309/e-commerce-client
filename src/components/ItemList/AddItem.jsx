import React from "react";
import { Col, Form, Input, Row, Select, Tabs, Typography } from "antd";
import GeneralInfoForm from "./GeneralInfoForm";
import VariantForm  from "./VariantForm";

function AddItem() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    { key: "1", label: "Thông tin chung", children: <GeneralInfoForm /> },
    { key: "2", label: "Biến thể sản phẩm", children: <VariantForm /> },
  ];

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Thêm sản phẩm mới</h2>

        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </>
  );
}
export default AddItem;
