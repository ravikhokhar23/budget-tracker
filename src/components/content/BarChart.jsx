/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { Chart } from "react-charts";

const BarChart = (props) => {
  const data = useMemo(() => {
    // Each series corresponds to one spending category
    return props.spendingData.map((series) => ({
      label: series.label,
      data: props.categories.map((category) => ({
        primary: category, // category on Y axis
        secondary: series.amounts[category], // amount on X axis
      })),
      color: series.color,
    }));
  }, [props.categories, props.spendingData]);

  const primaryAxis = useMemo(
    () => ({
      position: "left",
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = useMemo(
    () => [
      {
        position: "bottom",
        getValue: (datum) => datum.secondary,
        stacked: true,
        hardMin: 0,
        hardMax: 1200,
        ticks: [0, 300, 600, 900, 1200],
        tickCount: 5,
        format: (value) => `$${value}`,
      },
    ],
    []
  );

  return (
    <div className="mt-5 mb-5 h-70 flex-1 pointer-events-none font-bold self-center">
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
          layout: "horizontal", // horizontal bars
          getSeriesStyle: (series) => ({
            stroke: series.color,
            fill: series.color,
            opacity: 1,
          }),
        }}
      />
    </div>
  );
};

export default BarChart;
