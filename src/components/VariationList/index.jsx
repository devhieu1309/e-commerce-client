import { Button, Popconfirm, Space, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import DeleteVariation from "./DeleteVariation";
import ViriationToolbar from "./VariationToolbar";
import VariationModal from "./VariationModal";
import { getVariationList } from "../../services/variationServices";
import { getCategoryList } from "../../services/categoryServices";

function VariationList() {
  const [variations, setVariations] = useState([]);

  const fetchApi = async () => {
    const resultVariations = await getVariationList();
    const resultCategories = await getCategoryList();

    const resultFinal = [];
    resultVariations.variations.map((item) => {
      resultFinal.push({
        ...item,
        ...resultCategories.categories.find(
          (category) => category.category_id === item.category_id
        ),
      });
    });

    setVariations(resultFinal.reverse());
  };

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
      key: "index",
      width: 80,
      render: (text, record, index) => index + 1,
    },
    {
      title: "Danh mục",
      dataIndex: "category_name",
      key: "category_name",
    },
    {
      title: "Tên biến thể",
      dataIndex: "variation_name",
      key: "variation_name",
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
          <VariationModal mode="edit" record={record} onReload={handleReload}/>
          <Popconfirm
            title="Bạn chắc chắn muốn xóa danh mục này?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeleteVariation record={record} onReload={handleReload}/>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <ViriationToolbar onReload={handleReload}/>
      <Table
        columns={columns}
        dataSource={variations}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
}

export default VariationList;
