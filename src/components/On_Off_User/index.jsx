import { Table, Switch, notification } from "antd";
import { useState, useEffect } from "react";
import OnOffToolbar from "./On_Off_Toolbar";
import { get, patch } from "../../utils/request";
import { useNavigate } from "react-router-dom";


function OnOffUserList() {
  const [apiNoti, contextHolder] = notification.useNotification();
  const [searchText, setSearchText] = useState("");
  const [users, setUsers] = useState([]);


  // ===========================
  //  Load danh sách user
  // ===========================
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await get("users");
        console.log("[OnOff] API /users:", res);

        if (!Array.isArray(res)) {
          setUsers([]);
          return;
        }

        // Lọc user có role = "Người Dùng"
        const onlyUsers = res.filter(
          (u) => (u.role ?? "").toLowerCase().trim() === "người dùng"
        );

        // Chuẩn hóa + ép id thành số
        const formatted = onlyUsers.map((u, index) => {
          const rawId = u.user_id ?? u.id ?? null;
          const id = rawId !== null ? Number(rawId) : null;

          return {
            id,
            name: u.name,
            email: u.email,
            status: !!u.is_active,
          };
        });

        // Sắp xếp id lớn → nhỏ
        const sorted = formatted.sort((a, b) => b.id - a.id);

        // Thêm STT
        const finalList = sorted.map((u, idx) => ({
          ...u,
          stt: idx + 1,
        }));

        setUsers(finalList);
      } catch (err) {
        console.error("Lỗi load users:", err);
      }
    };

    fetchUsers();
  }, []);

  // ===========================
  //  Toggle trạng thái
  // ===========================
  const toggleStatus = async (id) => {
    try {
      const res = await patch(`users/${id}/toggle`);
      console.log("[OnOff] Kết quả toggle:", res);

      const updatedStatus = res.data.is_active;
      const name = users.find((u) => u.id === id)?.name ?? "";

      // Cập nhật UI ngay
      setUsers((prev) =>
        prev.map((u) =>
          u.id === id ? { ...u, status: updatedStatus } : u
        )
      );

      // ===========================
      //  Thông báo theo kiểu Login.jsx
      // ===========================
      if (updatedStatus) {
        apiNoti.success({
          message: "Thành công",
          description: `Đã mở tài khoản "${name}" thành công!`,
        });
      } else {
        apiNoti.success({
          message: "Thành công",
          description: `Đã khóa tài khoản "${name}" thành công!`,
        });
      }
    } catch (err) {
      console.error("Toggle lỗi:", err);
      apiNoti.error({
        message: "Lỗi",
        description: "Không thể cập nhật trạng thái!",
      });
    }
  };

  // ===========================
  //  Lọc theo search
  // ===========================
  const filteredUsers = users.filter(
    (u) =>
      (u.name ?? "").toLowerCase().includes(searchText.toLowerCase()) ||
      (u.email ?? "").toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    { title: "STT", dataIndex: "stt", key: "stt", align: "center", width: 80 },
    { title: "Họ và Tên", dataIndex: "name", key: "name", align: "center" },
    { title: "Email", dataIndex: "email", key: "email", align: "center" },
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
    <>
      {contextHolder}
      <div className="flex flex-col gap-4">
        <OnOffToolbar searchText={searchText} setSearchText={setSearchText} />

        <Table
          columns={columns}
          dataSource={filteredUsers}
          rowKey="id"
          pagination={{
            pageSize: 10,
            position: ["bottomRight"],
            showSizeChanger: false,
          }}
        />
      </div>
    </>
  );
}

export default OnOffUserList;
