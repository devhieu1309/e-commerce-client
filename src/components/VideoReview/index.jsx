import { Button, Popconfirm, Space, Table, Tooltip } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useEffect } from "react";
import DeleteVideoReview from "./DeleteVideoReview";
import VideoReviewToolbar from "./VideoReviewToolbar";
import VideoReviewModal from "./VideoReviewModal";
import { getVideoReview } from "../../services/videoreviewServices";


function VideoReview() {
  const [videoReviews, setVideoReviews] = useState([]);
  const [iconState, setIconState] = useState({});
  const [products, setProducts] = useState([]);

  // Lấy danh sách sản phẩm
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/products");
      if (!res.ok) throw new Error("Lỗi khi lấy danh sách sản phẩm");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadVideoReviews = async () => {
    const result = await getVideoReview();
    
    setVideoReviews(result);
    // try {
    //   const response = await fetch("http://localhost:8000/api/video-reviews");
    //   if (!response.ok) {
    //     const errorData = await response.json().catch(() => ({}));
    //     const message = errorData.message || "Không thể tải danh sách video review";
    //     throw new Error(message);
    //   }
    //   const data = await response.json();
    //   setVideoReviews(data);
    // } catch (error) {
    //   console.error("Lỗi khi tải danh sách video review:", error);
    //   apiNoti.error({
    //     message: "Lỗi tải dữ liệu",
    //     description: error.message || "Đã xảy ra lỗi không xác định.",
    //   });
    // }
  };

  useEffect(() => {
    loadVideoReviews();
    fetchProducts();
  }, []);

  // const handleToggleIcon = (id) => {
  //   setIconState((prev) => ({AC
  //     ...prev,
  //     [id]: !prev[id],
  //   }));
  // };

  // const handleToggleIcon = async (record) => {
  //   try {
  //     const newVisible = !record.is_visible;
  //     await fetch(`http://localhost:8000/api/video-reviews/${record.id}`, {
  //       method: "PATCH",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         ...record,
  //         is_visible: newVisible ? 1 : 0,
  //       }),
  //     });

  //     // Cập nhật state
  //     setIconState((prev) => ({
  //       ...prev,
  //       [record.id]: newVisible,
  //     }));


  //     loadVideoReviews();
  //   } catch (error) {
  //     console.error("Lỗi khi cập nhật trạng thái hiển thị:", error);
  //   }
  // };

  const columns = [
    {
      title: "ID",
      dataIndex: "video_id",
      key: "video_id",
      width: 80,
    },
    {
      title: "Sản phẩm",
      dataIndex: ["product", "name"],
      key: "product_name",
      render: (_, record) => {
        const product = products.find((p) => p.id === record.product_id);
        return product ? product.name : `#${record.product_id}`;
      },
    },
    {
      title: "Tiêu đề video",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "URL video",
      dataIndex: "url",
      key: "url",
      render: (url) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      align: "center",
      render: (_, record) => {
        const isVisible = record.is_visible ?? iconState[record.id] ?? false;
        return (
          <Space>
            <VideoReviewModal mode="edit" products={products} record={record} onReload={loadVideoReviews} />
            <Popconfirm
              title="Bạn chắc chắn muốn xóa video review này?"
              okText="Xóa"
              cancelText="Hủy"
            >
              <DeleteVideoReview record={record} onReload={loadVideoReviews} />
            </Popconfirm>
            <Tooltip title={isVisible ? "Ẩn" : "Hiện"}>
              <span
                onClick={() => handleToggleIcon(record)}
                style={{ fontSize: 18, cursor: "pointer", color: "#1677ff" }}
              >
                {isVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </span>
            </Tooltip>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <VideoReviewToolbar onReload={loadVideoReviews} />
      <Table
        columns={columns}
        dataSource={videoReviews}
        rowKey="video_id"
        pagination={{ pageSize: 10 }}
      />
    </>
  );
}

export default VideoReview;
