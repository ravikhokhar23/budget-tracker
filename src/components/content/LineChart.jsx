import { useMemo } from "react";
import { Chart } from "react-charts";

const LineChart = () => {
  const data = useMemo(
    () => [
      {
        label: "Daily Cashflow",
        data: [
          { day: 1, cashflow: 650 },
          { day: 5, cashflow: -80 },
          { day: 7, cashflow: -220 },
          { day: 8, cashflow: -80 },
          { day: 9, cashflow: 850 },
          { day: 13, cashflow: -200 },
          { day: 17, cashflow: 1700 },
          { day: 22, cashflow: -120 },
          { day: 24, cashflow: -300 },
          { day: 28, cashflow: 500 },
          { day: 30, cashflow: 1200 },
        ],
      },
    ],
    []
  );

  // Configure axes for time (X) and cashflow amount (Y)
  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => datum.day,
      scaleType: "linear",
      ticks: [1, 5, 10, 15, 20, 25, 30],
      tickCount: 7,
      format: (value) => value,
      grid: {
        enabled: true,
        stroke: "gray",
        strokeWidth: 2,
        lineDash: [4, 4], // dashed grid lines
      },
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => datum.cashflow,
        scaleType: "linear",
        ticks: [-700, 0, 700, 1400, 2100],
        tickCount: 5,
        format: (value) => value,
        grid: {
          enabled: true,
          stroke: "gray",
          strokeWidth: 2,
          lineDash: [4, 4],
        },
      },
    ],
    []
  );

  return (
    <div className="h-300 m-3">
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};

export default LineChart;
