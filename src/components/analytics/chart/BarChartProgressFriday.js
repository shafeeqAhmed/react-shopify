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
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
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

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const BarChartProgressFriday = () => {
  const cardData = useSelector((state) => state.cardData.cardData);
  const [weekData, setWeekData] = useState("");
  useEffect(() => {
    if (cardData) {
      setWeekData(cardData?.data?.weekData);
    }
  }, [cardData]);
  const data = {
    labels: labels,
    datasets: [
      {
        data: weekData
          ? Object.values(weekData).map((value, index) => {
              return value.forecast;
            })
          : null,
        backgroundColor: [
          "#ABD439",
          "#ED6A5E",
          "#ABD439",
          "#ED6A5E",
          "#29ABDE",
          "#29ABDE",
          "#29ABDE",
        ],
        borderWidth: 0,
      },
    ],
  };
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};
export default BarChartProgressFriday;
