import { Button, Popconfirm, Space, Table } from "antd";
import { useState } from "react";
import ShippingMethodToolbar from "./ShippingMethodToolbar";
import ShippingMethodModal from "./ShippingMethodModal";
import DeleteShippingMethod from "./DeleteShippingMethod";

function ShippingMethodList() {
    const [shippingMethods, setShippingMethods] = useState([
        {
            id: 1,
            shipping_method_name: "Giao hàng tiêu chuẩn",
            shipping_method_price: 30000,
            currency: "VNĐ",
            created_at: "2025-09-01 12:00:00",
            updated_at: "2025-09-10 08:00:00",
        },
        {
            id: 2,
            shipping_method_name: "Giao nhanh",
            shipping_method_price: 60000,
            currency: "VNĐ",
            created_at: "2025-09-01 12:00:00",
            updated_at: "2025-09-10 08:00:00",
        },
        {
            id: 3,
            shipping_method_name: "Nhận tại cửa hàng",
            shipping_method_price: 0,
            currency: "VNĐ",
            created_at: "2025-09-01 12:00:00",
            updated_at: "2025-09-10 08:00:00",
        },
        {
            id: 4,
            shipping_method_name: "Pick-up point / Locker",
            shipping_method_price: 20000,
            currency: "VNĐ",
            created_at: "2025-09-01 12:00:00",
            updated_at: "2025-09-10 08:00:00",
        },
        {
            id: 5,
            shipping_method_name: "COD (thanh toán khi nhận hàng)",
            shipping_method_price: 40000,
            currency: "VNĐ",
            created_at: "2025-09-01 12:00:00",
            updated_at: "2025-09-10 08:00:00",
        }
    ]);
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            width: 80,
        },
        {
            title: "Tên phương thức",
            dataIndex: "shipping_method_name",
            key: "shipping_method_name",
        },
        {
            title: "Giá phương thức",
            dataIndex: "shipping_method_price",
            key: "shipping_method_price",
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
            // render: (_, record) => (
            //     <Space size="middle">
            //         <a>Edit</a>
            //         <a>Delete</a>
            //     </Space>
            // ),
              render: (_, record) => (
                <Space>
                  <ShippingMethodModal mode="edit" record={record}  />
                  {/* <a>Delete</a> */}
                  <Popconfirm
                    title="Bạn chắc chắn muốn xóa phương thức vận chuyển này?"
                    okText="Xóa"
                    cancelText="Hủy"
                  >
                    <DeleteShippingMethod record={record} />
                  </Popconfirm>
                </Space>
              ),
        },
    ];
    return (
    <>
      <ShippingMethodToolbar/>
      <Table
        columns={columns}
        dataSource={shippingMethods}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
}
export default ShippingMethodList;
