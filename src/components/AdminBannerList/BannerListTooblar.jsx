import React from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

import BannerListModal from "./BannerListModal";

const { Option } = Select;

function BannerListToolbar({
  onSearch,
  onParentChange,
  onAdd,
  parentOptions = [
    {
      id: 1,
      title: "sản phẩm mới Iphone 17",
      image_url: "image1.jpg",
      link_url: "iphon 17",
      position: "home",
      status: "1",
    },
    {
      id: 2,
      title: "sản phẩm mới Iphone 17",
      image_url: "image1.jpg",
      link_url: "iphon 17",
      position: "home",
      status: "1",
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
          placeholder="Tìm kiếm banner"
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
      <BannerListModal mode="create" record={{}} />
    </div>
  );
}

export default BannerListToolbar;
