import { useMemo } from "react";
import { Chart } from "react-charts";

const categories = [
  "Housing",
  "Food",
  "Transport",
  "Entertainment",
  "Utilities",
  "Healthcare",
  "Shopping",
];

// Category data: label and amount
const spendingData = [
  {
    label: "Housing",
    amounts: {
      Housing: 1200,
      Food: 0,
      Transport: 0,
      Entertainment: 0,
      Utilities: 0,
      Healthcare: 0,
      Shopping: 0,
    },
    color: "#5184FC",
  },
  {
    label: "Food",
    amounts: {
      Housing: 0,
      Food: 500,
      Transport: 0,
      Entertainment: 0,
      Utilities: 0,
      Healthcare: 0,
      Shopping: 0,
    },
    color: "#F6964D",
  },
  {
    label: "Transport",
    amounts: {
      Housing: 0,
      Food: 0,
      Transport: 300,
      Entertainment: 0,
      Utilities: 0,
      Healthcare: 0,
      Shopping: 0,
    },
    color: "#F6964D",
  },
  {
    label: "Entertainment",
    amounts: {
      Housing: 0,
      Food: 0,
      Transport: 0,
      Entertainment: 250,
      Utilities: 0,
      Healthcare: 0,
      Shopping: 0,
    },
    color: "#F07674",
  },
  {
    label: "Utilities",
    amounts: {
      Housing: 0,
      Food: 0,
      Transport: 0,
      Entertainment: 0,
      Utilities: 450,
      Healthcare: 0,
      Shopping: 0,
    },
    color: "#6FA3F7",
  },
  {
    label: "Healthcare",
    amounts: {
      Housing: 0,
      Food: 0,
      Transport: 0,
      Entertainment: 0,
      Utilities: 0,
      Healthcare: 275,
      Shopping: 0,
    },
    color: "#878BF6",
  },
  {
    label: "Shopping",
    amounts: {
      Housing: 0,
      Food: 0,
      Transport: 0,
      Entertainment: 0,
      Utilities: 0,
      Healthcare: 0,
      Shopping: 400,
    },
    color: "#ED76B5",
  },
];

const BarChart = () => {
  const data = useMemo(() => {
    // Each series corresponds to one spending category
    return spendingData.map((series) => ({
      label: series.label,
      data: categories.map((category) => ({
        primary: category, // category on Y axis
        secondary: series.amounts[category], // amount on X axis
      })),
      color: series.color,
    }));
  }, []);

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
    <div className="mt-5 mb-5 h-100 w-200 pointer-events-none font-bold">
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
