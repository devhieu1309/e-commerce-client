import { Select, Space } from "antd";
import { useEffect, useState } from "react";
import { getProvinces, getDistricts, getWards } from "../../services/locationServices";

const { Option } = Select;

function AddressSelect({ onChange, value }) {
  const [provinces, setProvinces] = useState([]);
  const [wards, setWards] = useState([]);

  const [province, setProvince] = useState(value?.province || "");
  const [ward, setWard] = useState(value?.ward || "");

  const [loadingProvince, setLoadingProvince] = useState(false);
  const [loadingWard, setLoadingWard] = useState(false);

  // load tỉnh
  useEffect(() => {
    setLoadingProvince(true);
    fetch("http://127.0.0.1:8000/api/provinces")
      .then((res) => res.json())
      .then((data) => setProvinces(data.provinces))
      .finally(() => setLoadingProvince(false));
  }, []);

  // Update local state when value prop changes and load wards if needed
  useEffect(() => {
    if (value) {
      const newProvince = value.province || "";
      const newWard = value.ward || "";
      
      if (newProvince && newProvince !== province) {
        setProvince(newProvince);
        setWard(newWard);
        
        // Load wards for the new province
        setLoadingWard(true);
        fetch(`http://127.0.0.1:8000/api/wards/by-province/${newProvince}`)
          .then((res) => res.json())
          .then((data) => setWards(data.wards))
          .finally(() => setLoadingWard(false));
      } else if (newProvince === province) {
        // Only update ward if province hasn't changed
        setWard(newWard);
      } else {
        setProvince(newProvince);
        setWard(newWard);
      }
    }
  }, [value, province]);

  const handleProvinceChange = (value) => {
    console.log('Province', value);
    setProvince(value);
    setWard("");
    setWards([]);

    setLoadingWard(true);
    fetch(`http://127.0.0.1:8000/api/wards/by-province/${value}`)
      .then((res) => res.json())
      .then((data) => setWards(data.wards))
      .finally(() => setLoadingWard(false));

    onChange({ province: value, ward: "" });
  };

  // chọn xã
  const handleWardChange = (value) => {
    setWard(value);
    onChange({ province, ward: value });
  };

  // console.log('Tỉnh', provinces);

  return (
    <div className="grid grid-cols-3 gap-2">
      <Select
        placeholder="Tỉnh/Thành"
        value={province || undefined}
        onChange={handleProvinceChange}
        loading={loadingProvince}
        className="w-full"
        style={{ width: "100%", height: "45px", marginBottom: "8px"}}
        size="large"
      >
        {provinces.map((p) => (
          <Option key={p.provinces_id} value={p.provinces_id}>
            {p.name}
          </Option>
        ))}
      </Select>

      <Select
        placeholder="Chọn Phường/Xã"
        value={ward || undefined}
        onChange={handleWardChange}
        disabled={!province}
        loading={loadingWard}
        className="w-full"
        style={{ width: "100%", height: "45px", marginBottom: "8px"}}
        size="large"
      >
        {wards.map((w) => (
          <Option key={w.wards_id} value={w.wards_id}>
            {w.name}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default AddressSelect;

