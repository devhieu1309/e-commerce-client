import React from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import OrderStatusModal from "./OrderStatusModal";

const { Option } = Select;

function OrderStatusTooblar({
  onSearch,
  onAdd,
  parentOptions = [
    { id: 1, name_status: "Đang chờ xác nhận" },
    { id: 2, name_status: "Đã xác nhận đơn hàng" },
    { id: 3, name_status: "Đang giao" },
    { id: 4, name_status: "Đang trên đường vận chuyển tới" },
    { id: 5, name_status: "Giao thành công" },
    { id: 6, name_status: "Đã hủy đơn hàng" },
    { id: 7, name_status: "Đơn hàng giao không thành công" },
  ],
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
          placeholder="Tìm kiếm  phương thanh toán"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 200 }}
        />
      </Space>

      {/* <Button type="primary" icon={<PlusOutlined />} onClick={onAdd}>
        Thêm danh mục
      </Button> */}
      <OrderStatusModal mode="create" record={{}} />
    </div>
  );
}

export default OrderStatusTooblar;
