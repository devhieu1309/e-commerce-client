import { Line } from "@ant-design/plots";

function BasicLine() {
  const dataChart = [
    { date: "01-2025", revenue: 7455 },
    { date: "02-2025", revenue: 6415 },
    { date: "03-2025", revenue: 8276 },
    { date: "04-2025", revenue: 7617 },
    { date: "05-2025", revenue: 6890 },
    { date: "06-2025", revenue: 7123 },
    { date: "07-2025", revenue: 8450 },
    { date: "08-2025", revenue: 7901 },
    { date: "09-2025", revenue: 8305 },
    { date: "10-2025", revenue: 6789 },
    { date: "11-2025", revenue: 7200 },
    { date: "12-2025", revenue: 8054 },
  ];

  const config = {
    data: dataChart,
    xField: "date",
    yField: "revenue",
    smooth: true,
    point: true,
  };

  return <Line {...config} />;
}

export default BasicLine;
