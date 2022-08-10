import merge from 'lodash/merge'
import ReactApexChart from 'react-apexcharts'
//@mui
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material'
//components
import { BaseOptionChart } from '../../../chart'

// --------------------------------------------------------------

const CHART_HEIGHT = 300;
const LEGEND_HEIGHT = 60;

const ChartWrapperStyle = styled('div')(({theme}) => ({
    height: CHART_HEIGHT,
    marginTop: theme.spacing(-7),
    '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
    '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
        overflow: 'visible',
    },
    '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}))

// --------------------------------------------------------------

export default function AppClimbDistribution ({title, chartColors, chartData, ...other}) {
    const theme = useTheme();

    const chartLabels = chartData.map((i) => i.label);
    const chartSeries = chartData.map((i) => i.value);

    const chartOptions = merge (BaseOptionChart(), {
        colors: chartColors,
        labels: chartLabels,
        stroke: { colors: [theme.palette.background.paper]},
        dataLabels: { enabled: false, dropShadow: {enabled: false}},
        tooltip: {
            fillSeriesColor: false,
            y: {
              formatter: (seriesName) => `${seriesName}`,
              title: {
                formatter: (seriesName) => `${seriesName}`,
              },
            },
          },
          plotOptions: {
            pie: { donut: { labels: { show: false }} },
          },
    });

    return (
        <Card {...other}>
            <CardHeader title={title} />

            <ChartWrapperStyle dir="ltr">
            <ReactApexChart type="pie" series={chartSeries} options={chartOptions} height={250} />
            </ChartWrapperStyle>
        </Card>
    )
}