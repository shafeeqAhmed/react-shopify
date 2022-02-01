import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  layout: {
    padding: {
      left: 20,
      right: 0,
      top: 40,
      bottom: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        display: true,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
};

const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

const BarChartVertical = () => {
  const cardData = useSelector((state) => state.cardData.cardData);
  const [weekData, setWeekData] = useState("");
  useEffect(() => {
    if (cardData) {
      setWeekData(cardData?.data?.weekData);
    }
  }, [cardData]);
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: weekData
          ? Object.values(weekData).map((value, index) => {
              return value.forecast;
            })
          : null,
        borderColor: "#00C2FF",
        backgroundColor: "#00C2FF",
      },
    ],
  };
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};
export default BarChartVertical;
