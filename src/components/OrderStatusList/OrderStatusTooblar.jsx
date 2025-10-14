import React from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import OrderStatusModal from "./OrderStatusModal";

const { Option } = Select;

function OrderStatusTooblar({
  onSearch,
  onAdd,
  // parentOptions = [
  //   { id: 1, status: "Đang xử lý" },
  //   { id: 2, status: "Giao thành công" },
  //   { id: 3, status: "Xác nhận đơn hàng" },
  // ],
  onReload,
}) {
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
          placeholder="Tìm kiếm phương thanh toán"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 200 }}
        />
      </Space>
      <OrderStatusModal mode="create" record={{}} onReload={onReload} />
    </div>
  );
}

export default OrderStatusTooblar;
