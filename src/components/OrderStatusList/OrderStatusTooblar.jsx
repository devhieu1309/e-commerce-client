import React, { useState } from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import OrderStatusModal from "./OrderStatusModal";
import { searchOrderStatus } from "../../services/orderStatus";

const { Option } = Select;

function OrderStatusTooblar({
  onSearch,
  onAdd,
  onSearchResult,
  // parentOptions = [
  //   { id: 1, status: "Đang xử lý" },
  //   { id: 2, status: "Giao thành công" },
  //   { id: 3, status: "Xác nhận đơn hàng" },
  // ],
  onReload,
}) {
  const [keyword, setKeyword] = useState("");

  const handleSearchOrderStatus = async () => {
    try {
      if (keyword.key === "") {
        onReload();
        return;
      }

      const data = await searchOrderStatus(keyword);
      onSearchResult(data);
    } catch (error) {
      console.log("Tìm kiếm thất bại!", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchOrderStatus();
    }
  };
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
          onChange={(e) => setKeyword(e.target.value)}
          style={{ width: 250 }}
          value={keyword}
          onKeyDown={handleKeyDown}
          allowClear
        />
      </Space>
      <OrderStatusModal mode="create" record={{}} onReload={onReload} />
    </div>
  );
}

export default OrderStatusTooblar;
