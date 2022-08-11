import merge from "lodash/merge";
import ReactApexChart from "react-apexcharts";
//@mui
import { Card, CardHeader, Box } from "@mui/material";
//components
import { BaseOptionChart } from "../../../../Components/chart";

// ----------------------------------------------------------------

export default function AppSessionCountChart({ chartData, title, ...other }) {
  const chartLabels = chartData.map((i) => i.label);
  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = merge(BaseOptionChart(), {
    plotOptions: {
      bar: { horizontal: true, barHeight: "8%", borderRadius: 1.5 },
    },
    fill: { type: chartData.map((i) => i.fill) },
    //labels: chartLabels,
    xaxis: {
      categories: chartLabels,
      type: "string",
      labels: {
        style: {
          fontSize: "0.5rem",
        },
      },
    },
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => seriesName,
        title: {
          formatter: () => "",
        },
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} />
      <Box sx={{ p: 2, pb: 1, pt: 0 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={[{ data: chartSeries }]}
          options={chartOptions}
          height={250}
        />
      </Box>
    </Card>
  );
}
