import { Button, Popconfirm, Space, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import OrderStatusTooblar from "./OrderStatusTooblar";
import DeleteOrderStatus from "./DeleteOrderStatus";
import OrderStatusModal from "./OrderStatusModal";
import { getOrderStatusList } from "../../services/orderStatus";

function OrderStatusList() {
  const [orderStatus, setOrderStatus] = useState([]);

  const fetchApi = async () => {
    const result = await getOrderStatusList();
    setOrderStatus(result);
  };

  // Lấy danh sách phương thanh toán
  useEffect(() => {
    fetchApi();
  }, []);

  // Load lại trang
  const handleReload = () => {
    fetchApi();
  };

  const columns = [
    {
      title: "STT",
      key: "id",
      width: 80,
      render: (text, record, index) => index + 1,
    },
    {
      title: "Tên phương thanh toán",
      dataIndex: "status",
      key: "status",
    },

    {
      title: "Ngày tạo",
      dataIndex: "created_at",
      key: "created_at",
      render: (text) => {
        const date = new Date(text);
        return date.toLocaleDateString("vi-VN");
      },
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "updated_at",
      key: "updated_at",
      render: (text) => {
        const date = new Date(text);
        return date.toLocaleDateString("vi-VN");
      },
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space>
          {/* <EditCategory record={record} onReload={onReload} /> */}
          <OrderStatusModal
            mode="edit"
            record={record}
            onReload={handleReload}
          />
          <Popconfirm
            title="Bạn chắc chắn muốn xóa phương thanh toán này?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeleteOrderStatus record={record} onReload={handleReload} />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <OrderStatusTooblar />
      <Table
        columns={columns}
        dataSource={orderStatus}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
}

export default OrderStatusList;
