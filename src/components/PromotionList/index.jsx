import { Button, Popconfirm, Space, Table } from "antd";
import { useState, useEffect } from "react";
import PromotionToolbar from "./PromotionToolbar";
import PromotionModal from "./PromotionModal";
import DeletePromotion from "./DeletePromotion";
import { getPromotionList } from "../../services/promotionServices";

function PromotionList() {
  const [promotions, setPromotions] = useState([]);
  const fetchApi = async () => {
    const result = await getPromotionList();

    setPromotions(result.promotions.reverse());
  };

  // Lấy danh sách chương trình khuyến mãi
  useEffect(() => {
    fetchApi();
  }, []);

  // tìm kiếm
  // const handleSearch = (data) => {
  //   setPromotions(data); // cập nhật danh sách hiển thị
  // };


  // Load lại trang
  const handleReload = () => {
    fetchApi();
  };

  const columns = [
    {
      title: "Mã khuyến mãi",
      dataIndex: "id",
      key: "promotion_id",
      width: 80,
      render: (text, record, index) => index + 1,
    },
    {
      title: "Tên chương trình khuyến mãi",
      dataIndex: "promotion_name",
      key: "promotion_name",
    },
    {
      title: "Mã giảm giá",
      dataIndex: "discount_code",
      key: "discount_code",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (text) => {
        if (!text) return "";
        return text.length > 80 ? text.substring(0, 80) + "..." : text;
      },
    },
    {
      title: "Tỷ lệ giảm giá (%)",
      dataIndex: "discount_rate",
      key: "discount_rate",
      render: (value) => `${value}%`,
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "start_date",
      key: "start_date",
      render: (text) => {
        const date = new Date(text);
        return date.toLocaleDateString("vi-VN");
      },
    },
    {
      title: "Ngày kết thúc",
      dataIndex: "end_date",
      key: "end_date",
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
          <PromotionModal mode="edit" record={record} onReload={handleReload} />
          <Popconfirm
            title="Bạn chắc chắn muốn xóa chương trình khuyến mãi này?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeletePromotion record={record} onReload={handleReload} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <PromotionToolbar onReload={handleReload} />
      <Table
        columns={columns}
        dataSource={promotions}
        pagination={{ pageSize: 10 }}
        rowKey="promotion_id"
      />
    </>
  );
}
export default PromotionList;
