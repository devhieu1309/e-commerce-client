import { Button, Popconfirm, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import ShippingMethodToolbar from "./ShippingMethodToolbar";
import ShippingMethodModal from "./ShippingMethodModal";
import DeleteShippingMethod from "./DeleteShippingMethod";
import { getShippingMethodList } from "../../services/shippingMethodServices";
// import dayjs from "dayjs";

function ShippingMethodList() {
  const [shippingMethods, setShippingMethods] = useState([]);

  const fetchApi = async () => {
    const result = await getShippingMethodList();
    
    setShippingMethods(result.shipping_methods.reverse());
    // setShippingMethods(result);
  };
//   const fetchApi = async () => {
//   try {
//     const res = await getShippingMethodList();

//     // Kiểm tra dữ liệu có tồn tại và là mảng
//     const data = Array.isArray(res?.data?.data) ? res.data.data : [];

//     const list = data.reverse(); // 
//     setShippingMethods(list);
//   } catch (error) {
//     console.error("Fetch API error:", error);
//   }
// };

  // Lấy danh sách phương thức vận chuyển
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
      dataIndex: "shipping_method_id",
      key: "shipping_method_id",
      width: 80,
      render: (text, record, index) => index + 1,
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
      render: (value) =>
        value != null
          ? `${Number(value).toLocaleString("vi-VN")} VNĐ`
          : "0 VNĐ",
    },
    {
      title: "Ngày tạo",
      dataIndex: "created_at",
      key: "created_at",
      render: (text) => {
        const date = new Date(text);
        return date.toLocaleDateString("vi-VN");
      },
      // title: "Ngày tạo",
      // dataIndex: "created_at",
      // key: "created_at",
      // render: (value) =>
      //   value ? dayjs(value).format("DD/MM/YYYY") : "",
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "updated_at",
      key: "updated_at",
      render: (text) => {
        const date = new Date(text);
        return date.toLocaleDateString("vi-VN");
      },

      // title: "Ngày cập nhật",
      // dataIndex: "updated_at",
      // key: "updated_at",
      // render: (value) =>
      //   value ? dayjs(value).format("DD/MM/YYYY") : "",
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
          <ShippingMethodModal mode="edit" record={record} onReload={handleReload}/>
          {/* <a>Delete</a> */}
          <Popconfirm
            title="Bạn chắc chắn muốn xóa phương thức vận chuyển này?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeleteShippingMethod record={record} onReload={handleReload}/>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <ShippingMethodToolbar onReload={handleReload}/>
      <Table
        columns={columns}
        dataSource={shippingMethods}
        pagination={{ pageSize: 10 }}
        rowKey="shipping_method_id"
      />
    </>
  );
}
export default ShippingMethodList;
