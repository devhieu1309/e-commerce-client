import React, { useEffect, useState } from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import VariationModal from "./VariationModal";
import { getCategoryList } from "../../services/categoryServices";
// import CategoryModal from "./CategoryModal";

const { Option } = Select;

function ViriationToolbar(props) {
  const {handleGetVariationByCategoryId, onAdd, onReload, handleSearchVariation} = props;

  const [categoryOptions, setCategoryOptions] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getCategoryList();
      setCategoryOptions(result.categories);
    };

    fetchApi();
  }, []);

  const onParentChange = (value) => {
    handleGetVariationByCategoryId(value);
  };

  const onSearch = (value) => {
    console.log("MINH HIEU: ", value);
    handleSearchVariation(value);
    // setSearchText(value); 

    // if (!value) {
    //   setFilteredVariations(variations);
    // } else {
    //   const filtered = variations.filter((item) =>
    //     item.name.toLowerCase().includes(value.toLowerCase())
    //   );
    //   setFilteredVariations(filtered);
    // }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 16,
      }}
    >
      <Space>
        <Input
          placeholder="Tìm kiếm biến thể"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 200 }}
        />

        <Select
          placeholder="Lọc theo danh mục"
          onChange={onParentChange}
          style={{ width: 180 }}
          allowClear
        >
          <Option value="">Tất cả</Option>
          {categoryOptions.map((item) => (
            <Option key={item.category_id} value={item.category_id}>
              {item.category_name}
            </Option>
          ))}
        </Select>
      </Space>
      <VariationModal mode="create" record={{}} onReload={onReload} />
    </div>
  );
}

export default ViriationToolbar;
