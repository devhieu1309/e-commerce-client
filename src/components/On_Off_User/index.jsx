import { Table, Switch } from "antd";
import { useState } from "react";
import OnOffToolbar from "./On_Off_Toolbar";

function OnOffUserList() {
  const [searchText, setSearchText] = useState("");

  const [users, setUsers] = useState([
    { id: 1, name: "Nguyen Van An", email: "an.nguyen@gmail.com", status: true },
    { id: 2, name: "Tran Thi Bao", email: "bao.tran@yahoo.com", status: false },
    { id: 3, name: "Le Minh Tuan", email: "tuan.le@hotmail.com", status: true },
    { id: 4, name: "Pham Hoang Nam", email: "nam.pham@gmail.com", status: false },
    { id: 5, name: "Do Thi Lan", email: "lan.do@outlook.com", status: true },
    { id: 6, name: "Bui Duc Huy", email: "huy.bui@gmail.com", status: false },
    { id: 7, name: "Hoang Gia Bao", email: "giabao.hoang@yahoo.com", status: true },
    { id: 8, name: "Nguyen Kim Anh", email: "kimanh.nguyen@gmail.com", status: true },
    { id: 9, name: "Tran Quoc Viet", email: "viet.tran@outlook.com", status: false },
    { id: 10, name: "Phan Thi Huong", email: "huong.phan@gmail.com", status: true },
    { id: 11, name: "Le Hoai Nam", email: "hoainam.le@yahoo.com", status: false },
    { id: 12, name: "Nguyen Thanh Dat", email: "dat.nguyen@gmail.com", status: true },
  ]);

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, status: !u.status } : u))
    );
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchText.toLowerCase()) ||
      u.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
      align: "center",
    },
    {
      title: "Họ và Tên",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Trạng thái",
      key: "status",
      align: "center",
      render: (_, record) => (
        <Switch
          checked={record.status}
          checkedChildren="ON"
          unCheckedChildren="OFF"
          onChange={() => toggleStatus(record.id)}
          style={{
            backgroundColor: record.status ? "#52c41a" : "#d9d9d9",
            fontWeight: 600,
          }}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Thanh tìm kiếm */}
      <OnOffToolbar searchText={searchText} setSearchText={setSearchText} />

      {/* Bảng người dùng */}
      <Table
        columns={columns}
        dataSource={filteredUsers}
        rowKey="id"
        bordered={false}
        pagination={{
          pageSize: 10,
          position: ["bottomRight"],
          showSizeChanger: false,
        }}
      />
    </div>
  );
}

export default OnOffUserList;
