import { Input, Select, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import VideoReviewModal from "./VideoReviewModal";

const { Option } = Select;

function VideoReviewToolbar({ onSearch, onFilterChange, onReload }) {
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
          placeholder="Tìm kiếm video review"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          style={{ width: 200 }}
        />
        <Select
          placeholder="Lọc theo trạng thái"
          // defaultValue="all"
          style={{ width: 200 }}
          onChange={onFilterChange}
        >
          <Option value="all">Tất cả</Option>
          <Option value="visible">Hiển thị</Option>
          <Option value="hidden">Ẩn</Option>
        </Select>
      </Space>



      <VideoReviewModal mode="create" record={{}} onReload={onReload} />
    </div>
  );
}

export default VideoReviewToolbar;
