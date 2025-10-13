import React from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

import NewsListModal from "./NewsListModal";

const { Option } = Select;

function NewsListToolbar({
  onSearch,
  onParentChange,
  onAdd,
  parentOptions = [
    {
      id: 1,
      title: "Điện thoại Iphone 16 sắp ra mắt",
      cover_image: "image1.jpg",
    },
    { id: 2, title: "Laptop xịn sắp ra mắt", cover_image: "image1.jpg" },
    { id: 3, title: "Máy tính bảng quá xịn", cover_image: "image1.jpg" },
  ],
}) {
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
          placeholder="Tìm kiếm tin tức"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 200 }}
        />

        {/* <Select
          placeholder="Danh mục cha"
          onChange={onParentChange}
          style={{ width: 160 }}
          allowClear
        >
          <Option value="">Tất cả</Option>
          {parentOptions.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.category_name}
            </Option>
          ))}
        </Select> */}
      </Space>

      {/* <Button type="primary" icon={<PlusOutlined />} onClick={onAdd}>
        Thêm danh mục
      </Button> */}
      <NewsListModal mode="create" record={{}} />
    </div>
  );
}

export default NewsListToolbar;
