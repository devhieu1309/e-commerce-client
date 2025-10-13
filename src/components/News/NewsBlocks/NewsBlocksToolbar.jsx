import React from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

import NewsBlocksModal from "./NewsBlocksModal";

const { Option } = Select;

function NewsBlockToolbar({
  onSearch,
  onParentChange,
  onAdd,
  parentOptions = [
    {
      id: 1,
      title: "1. iPhone 15 màu hồng có mấy phiên bản?",
      image: "image1.jpg",
      position: 1,
      news_id: 1,
    },
    {
      id: 2,
      title: "2. iPhone 15 màu hồng có mấy phiên bản?",
      image: "image1.jpg",
      position: 2,
      news_id: 1,
    },
    {
      id: 3,
      title: "3. iPhone 15 màu hồng có mấy phiên bản?",
      image: "image1.jpg",
      position: 3,
      news_id: 1,
    },
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
          placeholder="Tìm kiếm bài viết"
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
      <NewsBlocksModal mode="create" record={{}} />
    </div>
  );
}

export default NewsBlockToolbar;
