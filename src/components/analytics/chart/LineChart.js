import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
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

const LineChart = () => {
  const cardData = useSelector((state) => state.cardData.cardData);
  // eslint-disable-next-line
  const [labels, setLabels] = useState([]);
  const [dataActual, setDataActual] = useState([]);
  const [dataForecast, setDataForecast] = useState([]);
  const [dataLowerBound, setDataLowerBound] = useState([]);
  const [dataHigherBound, setDataHigherBound] = useState([]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Actual",
        data: dataActual ? dataActual : null,
        fill: true,
        borderColor: "#4d9421",
        tension: 0.1,
        pointBorderWidth: 0,
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        label: "Forecast",
        data: dataForecast ? dataForecast : null,
        fill: true,
        borderColor: "#b0cc80",
        tension: 0.1,
        pointBorderWidth: 0,
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        label: "Lower Bound",
        data: dataLowerBound ? dataLowerBound : null,
        fill: false,
        borderColor: "#d6e3c1",
        tension: 0.1,
        pointBorderWidth: 0,
        pointRadius: 0,
        borderWidth: 1.5,
      },
      {
        label: "Higher Bound",
        data: dataHigherBound ? dataHigherBound : null,
        fill: false,
        borderColor: "#d6e3c1",
        tension: 0.1,
        pointBorderWidth: 0,
        pointRadius: 0,
        borderWidth: 1.5,
      },
    ],
  };
  useEffect(() => {
    if (cardData) {
      const labels = cardData?.data?.yearData?.chartData.map((value, index) => {
        return value.date;
      });
      let dataActual = [];
      let dataForecast = [];
      let dataLowerBound = [];
      let dataHigherBound = [];
      setLabels(labels);
      dataActual = cardData?.data?.yearData?.chartData.map((value, index) => {
        return value?.actual ? value?.actual : null;
      });

      cardData?.data?.yearData?.chartData.forEach((value) => {
        dataForecast.push(value?.actual ? null : value?.forecast);
      });
      dataForecast?.shift();

      dataActual &&
        dataForecast?.splice(
          dataActual?.indexOf(null) - 1,
          0,
          dataActual[dataActual?.indexOf(null) - 1]
        );

      dataLowerBound = cardData?.data?.yearData?.chartData.map(
        (value, index) => {
          return value?.actual ? null : value?.lowerBound;
        }
      );
      dataLowerBound?.shift();
      dataLowerBound?.splice(
        dataActual?.indexOf(null) - 1,
        0,
        dataActual[dataActual?.indexOf(null) - 1]
      );

      dataHigherBound = cardData?.data?.yearData?.chartData.map(
        (value, index) => {
          return value?.actual ? null : value?.higherBound;
        }
      );
      dataHigherBound?.shift();
      dataHigherBound?.splice(
        dataActual.indexOf(null) - 1,
        0,
        dataActual[dataActual.indexOf(null) - 1]
      );
      setDataActual(dataActual);
      setDataForecast(dataForecast);
      setDataLowerBound(dataLowerBound);
      setDataHigherBound(dataHigherBound);
    }
  }, [cardData]);
  return (
    <>
      <Line options={options} data={data} />
      {/* <img src="http://localhost:3000/chart" /> */}
    </>
  );
};
export default LineChart;
