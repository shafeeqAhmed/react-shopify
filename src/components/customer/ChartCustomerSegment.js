import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right"
    },
    title: {
      display: true
    }
  }
};

const LineChartTuesday = () => {
  const [labels, setLabels] = useState([])
  const cardData = useSelector(state => state.cardData.cardData)
  const [averageValueSegmentData, setAverageValueSegmentData] = useState([])
  const [highValueSegmentData, setHighValueSegmentData] = useState([])
  const [lowValueSegmentData, setLowValueSegmentData] = useState([])
  useEffect(() => {
    let averageValueSegmentData
    let highValueSegmentData
    let lowValueSegmentData
    let labels
    if (cardData) {
      labels = cardData?.data?.averageValueSegmentData?.chartData.map((value, index) => {
        return value.date
      })
      averageValueSegmentData = cardData?.data?.averageValueSegmentData?.chartData.map((value, index) => {
        return value?.value
      })
      highValueSegmentData = cardData?.data?.highValueSegmentData?.chartData.map((value, index) => {
        return value?.value
      })
      lowValueSegmentData = cardData?.data?.lowValueSegmentData?.chartData.map((value, index) => {
        return value?.value
      })
    }
    setLabels(labels)
    setAverageValueSegmentData(averageValueSegmentData)
    setHighValueSegmentData(highValueSegmentData)
    setLowValueSegmentData(lowValueSegmentData)
  }, [cardData])
  const data = {

    labels,
    datasets: [
      {
        label: "Hight Value Customers",
        data: averageValueSegmentData,
        borderColor: "rgb(79,108,252)",
        backgroundColor: "rgba(79,108,252, 0.5)",
        pointRadius: 0,
        pointBorderWidth: 0,

      },
      {
        label: "Avg Value Customers",
        data: highValueSegmentData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        pointRadius: 0,
        pointBorderWidth: 0,

      },
      {
        label: "Low Value Customers",
        data: lowValueSegmentData,
        borderColor: "red",
        backgroundColor: "rgba(290, 91, 48, 0.5)",
        pointRadius: 0,
        pointBorderWidth: 0,

      }
    ]
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};
export default LineChartTuesday;