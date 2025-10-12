import { Col, Radio, Row, Space } from "antd";
import CardItem from "../CardItem";
import "./LearnGrid.css";
import { useState } from "react";
import BasicLine from "../BasicLined";
import Pie from "../Pie";
import PieChart from "../Pie";

function LearnGrid() {
  const [position, setPosition] = useState("Năm");

  const tabs = [
    {
      key: 1,
      label: "Tab 1",
      children: "Nội dung tab 1...",
    },
    {
      key: 2,
      label: "Tab 2",
      children: "Nội dung tab 2...",
    },
    {
      key: 3,
      label: "Tab 3",
      children: "Nội dung tab 3...",
    },
  ];
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          {/* <CardItem title="Box 1" style={{ height: "150px" }}/> */}
          <div className="h-[150px] bg-white flex items-center justify-center space-x-5 rounded-md pr-12">
            <span className="anticon anticon-dollar ng-star-inserted flex items-center justify-center rounded-full bg-blue-50 p-3">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                fill="#1890ff"
                className="h-[40px] w-[40px]"
                data-icon="dollar"
                aria-hidden="true"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"></path>
              </svg>
            </span>
            <div className="">
              <h2 className="font-bold text-2xl">2,536$</h2>
              <h4 className="text-gray-600 font-medium">Doanh thu</h4>
            </div>
          </div>
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <div className="h-[150px] bg-white flex items-center justify-center space-x-5 rounded-md pr-12">
            <span className="anticon anticon-dollar ng-star-inserted flex items-center justify-center rounded-full bg-[#E5F9F6] p-3">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                fill="#39D5BB"
                className="h-[40px] w-[40px]"
                data-icon="line-chart"
                aria-hidden="true"
              >
                <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 00-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 00-11.3 0L266.3 586.7a8.03 8.03 0 000 11.3l39.5 39.7z"></path>
              </svg>
            </span>
            <div className="">
              <h2 className="font-bold text-2xl">+ 17.23%</h2>
              <h4 className="text-gray-600 font-medium">Lợi nhuận</h4>
            </div>
          </div>
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <div className="h-[150px] bg-white flex items-center justify-center space-x-5 rounded-md pr-12">
            <span className="anticon anticon-dollar ng-star-inserted flex items-center justify-center rounded-full bg-[#FFF9E6] p-3">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                fill="#FFC107"
                className="h-[40px] w-[40px]"
                data-icon="profile"
                aria-hidden="true"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0z"></path>
              </svg>
            </span>
            <div className="">
              <h2 className="font-bold text-2xl">3,586</h2>
              <h4 className="text-gray-600 font-medium">Đơn hàng</h4>
            </div>
          </div>
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <div className="h-[150px] bg-white flex items-center justify-center space-x-5 rounded-md pr-12">
            <span className="anticon anticon-dollar ng-star-inserted flex items-center justify-center rounded-full bg-[#F3F0FF] p-3">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                fill="#886CFF"
                className="h-[40px] w-[40px]"
                data-icon="user"
                aria-hidden="true"
              >
                <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
              </svg>
            </span>
            <div className="">
              <h2 className="font-bold text-2xl">536</h2>
              <h4 className="text-gray-600 font-medium">Khách hàng</h4>
            </div>
          </div>
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-5">
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <div className="bg-white h-[400px] p-4 rounded-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">Tổng doanh thu</h2>
              <div>
                <Space>
                  <Radio.Group
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  >
                    <Radio.Button value="Năm">Năm</Radio.Button>
                    <Radio.Button value="Tháng">Tháng</Radio.Button>
                  </Radio.Group>
                </Space>
              </div>
            </div>
            <div className="h-[350px]">
              <BasicLine />
            </div>
          </div>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <div className="bg-white h-[400px] p-4 rounded-sm">
            <h2 className="font-bold text-2xl">Khách hàng</h2>
            <div className="h-[350px]">
              <PieChart />
            </div>
          </div>
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-5">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 7" style={{ height: "400px" }} />
        </Col>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CardItem title="Box 8" style={{ height: "400px" }} />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-5">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 9" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 10" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box 11" style={{ height: "400px" }} />
        </Col>
      </Row>
    </>
  );
}

export default LearnGrid;
