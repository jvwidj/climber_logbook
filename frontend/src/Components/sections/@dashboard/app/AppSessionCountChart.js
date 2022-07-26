import merge from "lodash/merge";
import ReactApexChart from "react-apexcharts";
//@mui
import { Card, CardHeader, Box } from "@mui/material";
//components
import { BaseOptionChart } from "../../../../Components/chart";

// ----------------------------------------------------------------

export default function AppSessionCountChart({
  chartData,
  chartLabels,
  title,
  ...other
}) {
  const chartOptions = merge(BaseOptionChart(), {
    plotOptions: { bar: { columnWidth: "16%" } },
    fill: { type: chartData.map((i) => i.fill) },
    labels: chartLabels,
    xaxis: { type: "datetime" },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} sessions`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} />
      <Box sx={{ p: 2, pb: 1, pt: 0 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={chartData}
          options={chartOptions}
          height={250}
        />
      </Box>
    </Card>
  );
}
