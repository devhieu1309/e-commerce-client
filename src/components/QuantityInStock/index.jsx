import { Button, Popconfirm, Space, Table } from "antd";
import { useState, useEffect } from "react";

import PaymentTypeToolbar from "./PaymentTypeToolbar";
import DeletePaymentType from "./DeletePaymentType";
import PaymentTypeModal from "./PaymentTypeModal";
import { getPayment } from "../../services/paymentTypeService";

function AdminPaymentType() {
  const [paymentType, setPaymentType] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filterPayment, setFilterPayment] = useState([]);

  const fetchApi = async () => {
    const result = await getPayment();
    setPaymentType(result.paymentType.reverse());
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleReload = () => {
    fetchApi();
  };

  const handleSearch = (value) => {
    if (!value) {
      setIsFiltering(false);
      setFilterPayment([]);
      return;
    }

    setIsFiltering(true);
    const resultFinal = paymentType.filter((item) =>
      item.value.toLowerCase().includes(value.toLowerCase())
    );
    setFilterPayment(resultFinal);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
      render: (text, record, index) => index + 1,
    },

    {
      title: "Tên phương thanh toán",
      dataIndex: "value",
      key: "value",
    },

    {
      title: "Hình ảnh ",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <img
          src={`http://127.0.0.1:8000/storage/${text}`}
          alt={text}
          style={{ width: 70, height: 50, objectFit: "cover" }}
        />
      ),
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
          <PaymentTypeModal
            mode="edit"
            record={record}
            onReload={handleReload}
          />
          <Popconfirm
            title="Bạn chắc chắn muốn xóa phương thanh toán này không?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeletePaymentType record={record} onReload={handleReload} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <PaymentTypeToolbar
        paymentType={paymentType}
        onReload={handleReload}
        handleSearch={handleSearch}
      />
      <Table
        columns={columns}
        dataSource={isFiltering ? filterPayment : paymentType}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
}

export default AdminPaymentType;
