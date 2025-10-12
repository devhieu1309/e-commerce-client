import { Pie } from "@ant-design/plots";

function PieChart() {
  const dataChart = [
    { type: "Khách mới", value: 350 },
    { type: "Khách quay lại", value: 450 },
    { type: "Khác", value: 100 },
  ];
  const config = {
    data: dataChart,
    angleField: "value",
    colorField: "type",
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
  };
  return <Pie {...config} />;
}
export default PieChart;
