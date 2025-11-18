import React from "react";
import { Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import PaymentTypeModal from "./PaymentTypeModal";

function PaymentTypeToolbar({ onReload, handleSearch }) {
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
          placeholder="Tìm kiếm phương thanh toán."
          prefix={<SearchOutlined />}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: 250 }}
        />
      </Space>

      <PaymentTypeModal mode="create" record={{}} onReload={onReload} />
    </div>
  );
}

export default PaymentTypeToolbar;
