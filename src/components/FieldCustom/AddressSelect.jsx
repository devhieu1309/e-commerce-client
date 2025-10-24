import { Select, Space, Spin } from "antd";
import { useEffect, useState } from "react";

const { Option } = Select;

function AddressSelect({ onChange }) {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  const [loadingProvince, setLoadingProvince] = useState(false);
  const [loadingDistrict, setLoadingDistrict] = useState(false);
  const [loadingWard, setLoadingWard] = useState(false);

  useEffect(() => {
    setLoadingProvince(true);
    fetch("https://provinces.open-api.vn/api/p/")
      .then((res) => res.json())
      .then((data) => setProvinces(data))
      .finally(() => setLoadingProvince(false));
  }, []);


  const handleProvinceChange = (value) => {
    setProvince(value);
    setDistrict("");
    setWard("");
    setDistricts([]);
    setWards([]);

    setLoadingDistrict(true);
    fetch(`https://provinces.open-api.vn/api/p/${value}?depth=2`)
      .then((res) => res.json())
      .then((data) => setDistricts(data.districts || []))
      .finally(() => setLoadingDistrict(false));

    onChange({ province: value, district: "", ward: "" });
  };

  const handleDistrictChange = (value) => {
    setDistrict(value);
    setWard("");
    setWards([]);

    setLoadingWard(true);
    fetch(`https://provinces.open-api.vn/api/d/${value}?depth=2`)
      .then((res) => res.json())
      .then((data) => setWards(data.wards || []))
      .finally(() => setLoadingWard(false));

    onChange({ province, district: value, ward: "" });
  };

  const handleWardChange = (value) => {
    setWard(value);
    onChange({ province, district, ward: value });
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Select
        placeholder="Chọn Tỉnh/Thành phố"
        value={province || undefined}
        onChange={handleProvinceChange}
        loading={loadingProvince}
        style={{ width: "100%", height: "50px", marginBottom: "8px"}}
      >
        {provinces.map((p) => (
          <Option key={p.code} value={p.code}>
            {p.name}
          </Option>
        ))}
      </Select>

      <Select
        placeholder="Chọn Quận/Huyện"
        value={district || undefined}
        onChange={handleDistrictChange}
        disabled={!province}
        loading={loadingDistrict}
        style={{ width: "100%", height: "50px", marginBottom: "8px"}}
      >
        {districts.map((d) => (
          <Option key={d.code} value={d.code}>
            {d.name}
          </Option>
        ))}
      </Select>

      <Select
        placeholder="Chọn Phường/Xã"
        value={ward || undefined}
        onChange={handleWardChange}
        disabled={!district}
        loading={loadingWard}
        style={{ width: "100%", height: "50px", marginBottom: "8px"}}
      >
        {wards.map((w) => (
          <Option key={w.code} value={w.code}>
            {w.name}
          </Option>
        ))}
      </Select>
    </Space>
  );
}

export default AddressSelect;
