import { Select, Space } from "antd";
import { useEffect, useState } from "react";
import {
  getProvinces,
  getWardsByProvince,
} from "../../services/addressServices";

const { Option } = Select;

function AddressCustomer({ onChange, value }) {
  const [provinces, setProvinces] = useState([]);
  const [wards, setWards] = useState([]);

  const [province, setProvince] = useState(value?.provinces_id || "");
  const [ward, setWard] = useState(value?.wards_id || "");

  // 🔹 Load danh sách tỉnh khi component mount
  useEffect(() => {
    const fetchProvinces = async () => {
      const res = await getProvinces();
      setProvinces(res.provinces || []);
    };
    fetchProvinces();
  }, []);

  // 🔹 Load phường khi province thay đổi
  useEffect(() => {
    if (province) {
      const fetchWards = async () => {
        const res = await getWardsByProvince(province);
        setWards(res.wards || []);
      };
      fetchWards();
    } else {
      setWards([]);
      setWard("");
    }
  }, [province]);

  // 🔹 Khi user chọn tỉnh
  const handleProvinceChange = (value) => {
    setProvince(value);
    setWard("");
    onChange({ provinces_id: value, wards_id: "" });
  };

  // 🔹 Khi user chọn phường
  const handleWardChange = (value) => {
    setWard(value);
    onChange({ provinces_id: province, wards_id: value });
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {/* Select Tỉnh */}
      <Select
        placeholder="Chọn Tỉnh/Thành phố"
        value={province || undefined}
        onChange={handleProvinceChange}
        size="large"
        style={{ width: "100%" }}
      >
        {provinces.map((p) => (
          <Option key={p.provinces_id} value={p.provinces_id}>
            {p.full_name || p.name}
          </Option>
        ))}
      </Select>

      {/* Select Phường */}
      <Select
        placeholder="Chọn Phường/Xã"
        value={ward || undefined}
        onChange={handleWardChange}
        size="large"
        disabled={!province}
        style={{ width: "100%" }}
      >
        {wards.map((w) => (
          <Option key={w.wards_id} value={w.wards_id}>
            {w.full_name || w.name}
          </Option>
        ))}
      </Select>
    </Space>
  );
}

export default AddressCustomer;
