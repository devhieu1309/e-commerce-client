import React from "react";
import { Input, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import ShippingMethodModal from "./ShippingMethodModal";

// const { Option } = Select;
function ShippingMethodToolbar({
    onSearch,
    onAdd
}) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 16,
        }}>
            <Input
                placeholder="Tìm kiếm phương thức"
                prefix={<SearchOutlined />}
                onChange={(e) => onSearch(e.target.value)}
                style={{ width: 200 }}
            />
            {/* <Button type="primary" icon={<PlusOutlined />} onClick={onAdd}>
            Thêm phương thức
            </Button> */}
            <ShippingMethodModal mode="create" record={{  }}/>
        </div>
    );
}
export default ShippingMethodToolbar;


//       {/* <Button type="primary" icon={<PlusOutlined />} onClick={onAdd}>
//         Thêm danh mục
//       </Button> */}
//       <CategoryModal mode="create" record={{  }}  />
//     </div>
//   );
// }

// export default CategoryToolbar;
