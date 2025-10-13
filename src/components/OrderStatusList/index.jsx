import { Button, Popconfirm, Space, Table } from "antd";
import { useState } from "react";

import OrderStatusTooblar from "./OrderStatusTooblar";
import DeleteOrderStatus from "./DeleteOrderStatus";
import OrderStatusModal from "./OrderStatusModal";

function OrderStatusList() {
  const [orderstatus, setorderstatus] = useState([
    {
      id: 1,
      name_status: "Đang chờ xác nhận",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 2,
      name_status: "Đang vận chuyển",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 3,
      name_status: "Đang trên đường giao hàng",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 4,
      name_status: "Đã giao hàng",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 5,
      name_status: "Đã hủy đơn hàng",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 6,
      name_status: "Đang hoàn trả hàng",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
  ]);

  const getParentName = (parentId) => {
    const parent = orderstatus.find((c) => c.id === parentId);
    return parent ? parent.name_status : "Không có";
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "Tên trạng thái",
      dataIndex: "name_status",
      key: "name_status",
    },

    {
      title: "Ngày tạo",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "updated_at",
      key: "updated_at",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space>
          {/* <EditCategory record={record} onReload={onReload} /> */}
          <OrderStatusModal mode="edit" record={record} />
          <Popconfirm
            title="Bạn chắc chắn muốn xóa danh mục này?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeleteOrderStatus record={record} />
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
        dataSource={orderstatus}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
}

export default OrderStatusList;

// function OrderStatusList() {
//   return <div>OrderStatusList</div>;
// }
// export default OrderStatusList;
