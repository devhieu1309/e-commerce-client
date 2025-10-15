import React from "react";
import { Input, Select, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import UserModal from "./UserModal";

const { Option } = Select;

function UserToolbar(props) {
  // console.log("MINH HEu: ", props);
  const { onSearch, onReload } = props;
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
      {/* Nút thêm người dùng */}
      <UserModal mode="create" record={{}} onReload={onReload}/>
    </div>
  );
}

export default UserToolbar;
