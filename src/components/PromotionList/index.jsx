import { Button, Popconfirm, Space, Table } from "antd";
import { useState } from "react";
import PromotionToolbar from "./PromotionToolbar";
import PromotionModal from "./PromotionModal";
import DeletePromotion from "./DeletePromotion";

function PromotionList() {
    const [promotions, setPromotions] = useState([
        {
            id: 1,
            promotion_name: "Flash Sale 1 Giờ – Siêu Hot",
            discount_rate: 25,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
        {
            id: 2,
            promotion_name: "Ưu Đãi Mua Online – Giảm 15%",
            discount_rate: 15,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
        {
            id: 3,
            promotion_name: "Giảm Giá Hàng Cao Cấp 10%",
            discount_rate: 10,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
        {
            id: 4,
            promotion_name: "Mua 2 Giảm Thêm 5%",
            discount_rate: 5,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
        {
            id: 5,
            promotion_name: "Ngày Khách Hàng – Giảm 20%",
            discount_rate: 40000,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
        {
            id: 6,
            promotion_name: "Black Friday – Giảm Sốc 30%",
            discount_rate: 30,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
        {
            id: 7,
            promotion_name: "Chào Năm Mới – Giảm 25%",
            discount_rate: 25,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
        {
            id: 8,
            promotion_name: "Khuyến Mãi Đêm: Giảm 12%",
            discount_rate: 12,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
        {
            id: 9,
            promotion_name: "Sale Tận Nhà – Giảm 18%",
            discount_rate: 18,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
        {
            id: 10,
            promotion_name: "Ưu Đãi Trả Góp 0%",
            discount_rate: 0,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
        {
            id: 11,
            promotion_name: "Combo Phụ Kiện – Giảm 15%",
            discount_rate: 15,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
        {
            id: 12,
            promotion_name: "Sinh Nhật Dola Phone – Giảm 25% Toàn Bộ",
            discount_rate: 25,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
        {
            id: 13,
            promotion_name: "Giảm 10% Cho Khách Hàng Mới",
            discount_rate: 10,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
        {
            id: 14,
            promotion_name: "Miễn Phí Vận Chuyển Toàn Quốc",
            discount_rate: 0,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
        {
            id: 15,
            promotion_name: "Giờ Vàng Deal Sốc – Giảm 40%",
            discount_rate: 40,
            currency: "%",
            start_date: "2025-09-01 12:00:00",
            end_date: "2025-09-10 08:00:00",
        },
    ]);
    const columns = [
        {
            title: "Mã khuyến mãi",
            dataIndex: "id",
            key: "id",
            width: 80,
        },
        {
            title: "Tên chương trình khuyến mãi",
            dataIndex: "promotion_name",
            key: "promotion_name",
        },
        {
            title: "Tỷ lệ giảm giá",
            dataIndex: "discount_rate",
            key: "discount_rate",
        },
        {
            title: "Ngày bắt đầu",
            dataIndex: "start_date",
            key: "start_date",
        },
        {
            title: "Ngày kết thúc",
            dataIndex: "end_date",
            key: "end_date",
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
                  <PromotionModal mode="edit" record={record}  />
                  {/* <a>Delete</a> */}
                  <Popconfirm
                    title="Bạn chắc chắn muốn xóa chương trình khuyến mãi này?"
                    okText="Xóa"
                    cancelText="Hủy"
                  >
                    <DeletePromotion record={record} />
                  </Popconfirm>
                </Space>
              ),
        },
    ];
    return (
    <>
      <PromotionToolbar/>
      <Table
        columns={columns}
        dataSource={promotions}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
}
export default PromotionList;
