import { Button, Popconfirm, Space, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import DeleteVariation from "./DeleteVariation";
import ViriationToolbar from "./VariationToolbar";
import VariationModal from "./VariationModal";
import { getVariationList } from "../../services/variationServices";
import {
  getCategoryList,
  getVariationByCategoryId,
} from "../../services/categoryServices";

function VariationList() {
  const [variations, setVariations] = useState([]);
  const [filterVariations, setFilterVariations] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  // Get variation by variation nam
  const handleSearchVariation = (value) => {
    if (!value) {
      setIsFiltering(false);
      setFilterVariations([]); 
      return;
    }

    setIsFiltering(true);
    const resultFinal = variations.filter((item) =>
      item.variation_name.toLowerCase().includes(value.toLowerCase())
    );

    setFilterVariations(resultFinal);
    // setSearchText(value);
  };

  // Filter variation by category nam
  const handleGetVariationByCategoryId = (category_id) => {
    console.log("MINH HIEU: ", category_id);
    if (!category_id) {
      setIsFiltering(false);
      setFilterVariations([]);
      return;
    }
    setIsFiltering(true);
    const resultFinal = variations.filter(
      (item) => item.category_id === category_id
    );
    setFilterVariations(resultFinal);
  };

  const fetchApi = async () => {
    const resultVariations = await getVariationList();
    const resultCategories = await getCategoryList();

    const resultFinal = [];
    for (let i = 0; i < resultVariations.variations.length; i++) {
      resultFinal.push({
        ...resultVariations.variations[i],
        ...resultCategories.categories.find(
          (category) =>
            category.category_id === resultVariations.variations[i].category_id
        ),
      });
    }
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
          <VariationModal mode="edit" record={record} onReload={handleReload} />
          <Popconfirm
            title="Bạn chắc chắn muốn xóa danh mục này?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeleteVariation record={record} onReload={handleReload} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <ViriationToolbar
        onReload={handleReload}
        handleGetVariationByCategoryId={handleGetVariationByCategoryId}
        handleSearchVariation={handleSearchVariation}
      />
      <Table
        columns={columns}
        dataSource={isFiltering ? filterVariations : variations}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
}

export default VariationList;
