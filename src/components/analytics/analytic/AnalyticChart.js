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
import { useSelector } from "react-redux";

import { Bar } from "react-chartjs-2";

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
        drawBorder: true,
        display: false,
      },
    },
  },
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 0,
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

const labels = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
const CURRENT_WEEK_COLOR = "#29ABDE"
const HIGHER_WEEK_COLOR = "#9FCE1D"
const LOSER_WEEK_COLOR = "#C4C4C4"


const AnalyticChart = () => {
  const cardData = useSelector(state => state.cardData.cardData)
  const [last20weeksRanking, setLast20weeksRanking] = useState("")
  const [last20weeksValues, setLast20weeksValues] = useState("")

  useEffect(() => {
    if (cardData) {
      setLast20weeksRanking(cardData?.data?.last20weeksRanking)
      setLast20weeksValues(cardData?.data?.last20weeksValues);
    }
  }, [cardData])
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: last20weeksValues ? Object.values(last20weeksValues).reverse() : null,
        backgroundColor: last20weeksValues ? last20weeksValues.map((value, index) => {
          return (index + 1) === last20weeksRanking ? CURRENT_WEEK_COLOR :
            (index + 1) > last20weeksRanking ? LOSER_WEEK_COLOR : HIGHER_WEEK_COLOR
        }) : HIGHER_WEEK_COLOR,

      },
    ],
  };
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};
export default AnalyticChart;
