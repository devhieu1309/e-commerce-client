import React from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

function On_Off_Toolbar({
    onSearch,
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
          placeholder="Tìm kiếm người dùng"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 200 }}
        />
      </Space>
      
    </div>
  );
}

export default On_Off_Toolbar;
