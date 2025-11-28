import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, Card, Typography, Button, Image, Space, Row, Col, Divider, Tag, Descriptions } from "antd";
import { ArrowLeftOutlined, ClockCircleOutlined, CheckCircleOutlined, CheckSquareOutlined, CarOutlined, HomeOutlined, RollbackOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { getOrderDetail } from "../../services/shopingOrderServide";
import OrderStepper from "./OrderStepper";

const { Title } = Typography;

const ORDER_STEPS = [
  { key: "Chờ xác nhận", icon: <ClockCircleOutlined /> },
  { key: "Đã xác nhận", icon: <CheckCircleOutlined /> },
  { key: "Chờ lấy hàng", icon: <CheckSquareOutlined /> },
  { key: "Chờ giao hàng", icon: <CarOutlined /> },
  { key: "Đã giao", icon: <HomeOutlined /> },
  { key: "Trả hàng", icon: <RollbackOutlined /> },
  { key: "Hủy đơn", icon: <CloseCircleOutlined /> },
];

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState();


  useEffect(() => {
    const fetchData = async () => {
      const res = await getOrderDetail(id);
      setOrder(res);
    };
    fetchData();
  }, [id]);

  console.log("Đơn hàng:", id, order);

  const statusColorMap = {
    "Chờ lấy hàng": "cyan",
    "Trả hàng": "pink",
    "Hủy đơn": "red",
    "Chờ giao hàng": "orange",
    "Đã xác nhận": "blue",
    "Đã giao": "green",
    "Hoàn tiền": "purple",
  };

  const columns = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      render: (_, record) => (
        <Space>
          <Image
            src={record.image}
            width={60}
            style={{ borderRadius: 8, objectFit: "cover" }}
          />
          <span style={{ fontWeight: 500 }}>{record.name}</span>
        </Space>
      ),
    },
    {
      title: "Biến thể",
      dataIndex: "sku",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      align: "center",
    },
    {
      title: "Giá",
      dataIndex: "price",
      align: "right",
      render: (value) => `${value.toLocaleString()} ₫`,
    },
    {
      title: "Tổng",
      dataIndex: "subtotal",
      align: "right",
      render: (value) => `${value.toLocaleString()} ₫`,
    },
  ];

  return (
    <Card style={{ padding: 28, borderRadius: 14 }}>
      <Space direction="vertical" style={{ width: "100%" }} size={24}>

        <Space>
          <Title level={3} style={{ margin: 0 }}>
            Chi tiết đơn hàng #{id}
          </Title>
        </Space>                      

        <Card style={{ borderRadius: 12, padding: 15 }}>
          <OrderStepper
            steps={ORDER_STEPS}
            currentStatus={order?.order_status}
            timestamps={order?.timestamps}
          />
        </Card>

        {/* Thông tin đơn hàng */}
        {order && (
          <Row gutter={20}>
            {/* Thông tin đơn hàng */}
            <Col span={12}>
              <Card
                title="Thông tin đơn hàng"
                bordered
                style={{ borderRadius: 12, height: "100%" }}
                bodyStyle={{ padding: "16px 20px" }}
              >
                <Descriptions
                  column={2}
                  size="middle"
                  labelStyle={{ fontWeight: 500, width: 120 }}
                  contentStyle={{ fontSize: 15 }}
                >
                  <Descriptions.Item label="Ngày tạo">
                    {order.order_date}
                  </Descriptions.Item>

                  <Descriptions.Item label="Trạng thái">
                    <Tag
                      color={statusColorMap[order?.order_status] || "default"}
                      style={{
                        padding: "5px 12px",
                        fontWeight: 500,
                        borderRadius: 6,
                      }}
                    >
                      {order?.order_status}
                    </Tag>
                  </Descriptions.Item>

                  <Descriptions.Item label="Vận chuyển">
                    {order.shipping_method}
                  </Descriptions.Item>

                  <Descriptions.Item label="Thanh toán">
                    {order.payment_type}
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>

            {/* Thông tin khách hàng */}
            <Col span={12}>
              <Card
                title="Thông tin khách hàng"
                bordered
                style={{ borderRadius: 12, height: "100%" }}
                bodyStyle={{ padding: "16px 20px" }}
              >
                <Descriptions
                  column={1}
                  size="middle"
                  labelStyle={{ fontWeight: 500, width: 120 }}
                  contentStyle={{ fontSize: 15 }}
                >
                  <Descriptions.Item label="Họ tên">
                    {order.user.name}
                  </Descriptions.Item>

                  <Descriptions.Item label="Số điện thoại">
                    {order.user.phone}
                  </Descriptions.Item>

                  <Descriptions.Item label="Email">
                    {order.user.email}
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
          </Row>
        )}

        {/* Địa chỉ giao hàng */}
        {order && (
          <Card title="Địa chỉ giao hàng" bordered style={{ borderRadius: 12 }}>
            <Descriptions column={1} size="middle">
              <Descriptions.Item label="Người nhận">
                {order.receiver_name}
              </Descriptions.Item>
              <Descriptions.Item label="Số điện thoại">
                {order.receiver_phone}
              </Descriptions.Item>
              <Descriptions.Item label="Địa chỉ">
                {order.address}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        )}

        {/* Danh sách sản phẩm */}
        <Card title="Danh sách sản phẩm" bordered style={{ borderRadius: 12 }}>
          <Table
            columns={columns}
            dataSource={order ? order.items : []}
            pagination={false}
            bordered={false}
            rowKey={(record) => record.item_id}
          />
        </Card>

        {/* Chi tiết thanh toán */}
        {order && (
          <Card
            title="Chi tiết thanh toán"
            bordered
            style={{ borderRadius: 12 }}
          >
            <Row>
              <Col span={12}></Col>
              <Col span={12}>
                <Space
                  direction="vertical"
                  style={{ width: "100%" }}
                  size={10}
                >
                  <Row>
                    <Col span={12}>Tổng tiền hàng:</Col>
                    <Col span={12} style={{ textAlign: "right" }}>
                      {Number(order?.subtotal_amount).toLocaleString()} ₫
                    </Col>
                  </Row>

                  {/* <Row>
                    <Col span={12}>Giảm giá:</Col>
                    <Col span={12} style={{ textAlign: "right" }}>
                      {Number(order?.order_total).toLocaleString()} ₫
                    </Col>
                  </Row> */}

                  <Row>
                    <Col span={12}>Phí vận chuyển:</Col>
                    <Col span={12} style={{ textAlign: "right" }}>
                      {Number(order?.shipping_fee).toLocaleString()} ₫
                    </Col>
                  </Row>

                  <Divider style={{ margin: "12px 0" }} />

                  <Row>
                    <Col span={12}>
                      <b>Tổng cộng:</b>
                    </Col>
                    <Col
                      span={12}
                      style={{
                        textAlign: "right",
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#cf1322",
                      }}
                    >
                      {Number(order?.total_amount).toLocaleString()} ₫
                    </Col>
                  </Row>
                </Space>
              </Col>
            </Row>
          </Card>
        )}
      </Space>
    </Card>
  );
};

export default OrderDetail;
