import React from "react";
import { Input, Button, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import PromotionModal from "./PromotionModal";
import { searchPromotion } from "../../services/promotionServices";

// const { Option } = Select;
function PromotionToolbar({
    onSearch,
    onAdd, 
    onReload,
}) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 16,
        }}>
            <Input
                placeholder="Tìm kiếm chương trình khuyến mãi"
                prefix={<SearchOutlined />}
                onChange={(e) => onSearch(e.target.value)}
                style={{ width: 200 }}
            />
            {/* <Button type="primary" icon={<PlusOutlined />} onClick={onAdd}>
            Thêm chương trình khuyến mãi
            </Button> */}
            <PromotionModal mode="create" record={{  }} onReload = {onReload}/>
        </div>
    );
}
export default PromotionToolbar;


//       {/* <Button type="primary" icon={<PlusOutlined />} onClick={onAdd}>
//         Thêm danh mục
//       </Button> */}
//       <CategoryModal mode="create" record={{  }}  />
//     </div>
//   );
// }

// export default CategoryToolbar;
