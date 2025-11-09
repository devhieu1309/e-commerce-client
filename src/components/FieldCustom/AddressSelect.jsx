// import { Select } from "antd";
// import { useEffect, useState } from "react";
// import { getProvinces, getDistricts, getWards } from "../../services/locationServices";

// const { Option } = Select;

// function AddressSelect({ onChange }) {
//     const [provinces, setProvinces] = useState([]);
//     const [districts, setDistricts] = useState([]);
//     const [wards, setWards] = useState([]);

//     const [province, setProvince] = useState("");
//     const [district, setDistrict] = useState("");
//     const [ward, setWard] = useState("");

//     const [loadingProvince, setLoadingProvince] = useState(false);
//     const [loadingDistrict, setLoadingDistrict] = useState(false);
//     const [loadingWard, setLoadingWard] = useState(false);

//     // 🧭 Load tỉnh/thành từ backend
//     useEffect(() => {
//         async function fetchProvinces() {
//             setLoadingProvince(true);
//             try {
//                 const res = await getProvinces();
//                 setProvinces(res);
//             } catch (error) {
//                 console.error("Lỗi tải tỉnh/thành:", error);
//             } finally {
//                 setLoadingProvince(false);
//             }
//         }
//         fetchProvinces();
//     }, []);

//     // 🧭 Khi chọn tỉnh → load huyện
//     const handleProvinceChange = async (value) => {
//         setProvince(value);
//         setDistrict("");
//         setWard("");
//         setDistricts([]);
//         setWards([]);
//         onChange({ provinces_id: value, districts_id: "", wards_id: "" });

//         if (!value) return;
//         setLoadingDistrict(true);
//         try {
//             const res = await getDistricts(value); // value = province.code
//             setDistricts(res);
//         } catch (error) {
//             console.error("Lỗi tải quận/huyện:", error);
//         } finally {
//             setLoadingDistrict(false);
//         }
//     };

//     // 🧭 Khi chọn huyện → load xã
//     const handleDistrictChange = async (value) => {
//         setDistrict(value);
//         setWard("");
//         setWards([]);
//         onChange({ provinces_id: province, districts_id: value, wards_id: "" });



//         if (!value) return;
//         setLoadingWard(true);
//         try {
//             const res = await getWards(value); // value = district.code
//             setWards(res);
//         } catch (error) {
//             console.error("Lỗi tải phường/xã:", error);
//         } finally {
//             setLoadingWard(false);
//         }
//     };

//     // 🧭 Khi chọn xã
//     const handleWardChange = (value) => {
//         setWard(value);
//         onChange({ provinces_id: province, districts_id: district, wards_id: value });


//     };

//     return (
//         <div className="grid grid-cols-3 gap-2">
//             {/* Tỉnh / Thành */}
//             <Select
//                 placeholder="Tỉnh/Thành"
//                 value={province || undefined}
//                 onChange={handleProvinceChange}
//                 loading={loadingProvince}
//                 style={{ width: "100%", height: "42px" }}
//                 showSearch
//                 optionFilterProp="children"
//             >
//                 {provinces.map((p) =>
//                     p?.code ? (
//                         <Option key={p.provinces_id} value={p.provinces_id}>
//                             {p.name}
//                         </Option>

//                     ) : null
//                 )}
//             </Select>

//             {/* Quận / Huyện */}
//             <Select
//                 placeholder="Quận/Huyện"
//                 value={district || undefined}
//                 onChange={handleDistrictChange}
//                 disabled={!province}
//                 loading={loadingDistrict}
//                 style={{ width: "100%", height: "42px" }}
//                 showSearch
//                 optionFilterProp="children"
//             >
//                 {districts.map((d) =>
//                     d?.code ? (
//                         <Option key={d.districts_id} value={d.districts_id}>
//                             {d.name}
//                         </Option>


//                     ) : null
//                 )}
//             </Select>

//             {/* Phường / Xã */}
//             <Select
//                 placeholder="Phường/Xã"
//                 value={ward || undefined}
//                 onChange={handleWardChange}
//                 disabled={!district}
//                 loading={loadingWard}
//                 style={{ width: "100%", height: "42px" }}
//                 showSearch
//                 optionFilterProp="children"
//             >
//                 {wards.map((w) =>
//                     w?.code ? (
//                         <Option key={w.wards_id} value={w.wards_id}>
//                             {w.name}
//                         </Option>


//                     ) : null
//                 )}
//             </Select>
//         </div>
//     );
// }

// export default AddressSelect;


import { Select } from "antd";
import { useEffect, useState } from "react";
import { getProvinces, getDistricts, getWards } from "../../services/locationServices";

const { Option } = Select;

function AddressSelect({ onChange, value = {} }) {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [province, setProvince] = useState(value.provinces_id || "");
  const [district, setDistrict] = useState(value.districts_id || "");
  const [ward, setWard] = useState(value.wards_id || "");

  // load tỉnh
  useEffect(() => {
    (async () => {
      const res = await getProvinces();
      setProvinces(res);
    })();
  }, []);

  // load huyện khi có tỉnh
  const handleProvinceChange = async (value) => {
    setProvince(value);
    setDistrict("");
    setWard("");
    const res = await getDistricts(value);
    setDistricts(res);
    onChange({ provinces_id: value, districts_id: "", wards_id: "" });
  };

  // load xã khi có huyện
  const handleDistrictChange = async (value) => {
    setDistrict(value);
    setWard("");
    const res = await getWards(value);
    setWards(res);
    onChange({ provinces_id: province, districts_id: value, wards_id: "" });
  };

  // chọn xã
  const handleWardChange = (value) => {
    setWard(value);
    onChange({ provinces_id: province, districts_id: district, wards_id: value });
  };

  // load khi chỉnh sửa địa chỉ
  useEffect(() => {
    (async () => {
      if (value.provinces_id) {
        const resDistricts = await getDistricts(value.provinces_id);
        setDistricts(resDistricts);
      }
      if (value.districts_id) {
        const resWards = await getWards(value.districts_id);
        setWards(resWards);
      }
      setProvince(value.provinces_id || "");
      setDistrict(value.districts_id || "");
      setWard(value.wards_id || "");
    })();
  }, [value]);

  return (
    <div className="grid grid-cols-3 gap-2">
      <Select
        placeholder="Tỉnh/Thành"
        value={province || undefined}
        onChange={handleProvinceChange}
        showSearch
        optionFilterProp="children"
      >
        {provinces.map((p) => (
          <Option key={p.provinces_id} value={p.provinces_id}>
            {p.name}
          </Option>
        ))}
      </Select>

      <Select
        placeholder="Quận/Huyện"
        value={district || undefined}
        onChange={handleDistrictChange}
        disabled={!province}
        showSearch
        optionFilterProp="children"
      >
        {districts.map((d) => (
          <Option key={d.districts_id} value={d.districts_id}>
            {d.name}
          </Option>
        ))}
      </Select>

      <Select
        placeholder="Phường/Xã"
        value={ward || undefined}
        onChange={handleWardChange}
        disabled={!district}
        showSearch
        optionFilterProp="children"
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

