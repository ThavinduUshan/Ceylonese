import React, { useState, useEffect } from "react";
import axios from "../../../../api/axios";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const MonthlySales = () => {
  

    const [chartData, setChartData] = useState();

  const GET_CHART_DATA_URL = "admins/charts/getmonthlysales";

  useEffect(() => {
    axios.post(GET_CHART_DATA_URL).then((response) => {
      if (response.data.error) {
        console.log("text", response.data.error);
      } else {
        let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        const data = response.data.request;
        console.log("this is data", data);

        for (let i = 0; i < data.length; i++) {
          if (data[i].month == "January") {
            arr[0] = data[i].sales;
          } else if (data[i].month == "February") {
            arr[1] = data[i].sales;
          } else if (data[i].month == "March") {
            arr[2] = data[i].sales;
          } else if (data[i].month == "April") {
            arr[3] = data[i].sales;
          } else if (data[i].month == "May") {
            arr[4] = data[i].sales;
          } else if (data[i].month == "June") {
            arr[5] = data[i].sales;
          } else if (data[i].month == "July") {
            arr[6] = data[i].sales;
          } else if (data[i].month == "August") {
            arr[7] = data[i].sales;
          } else if (data[i].month == "September") {
            arr[8] = data[i].sales;
          } else if (data[i].month == "October") {
            arr[9] = data[i].sales;
          } else if (data[i].month == "November") {
            arr[10] = data[i].sales;
          } else if (data[i].month == "December") {
            arr[11] = data[i].sales;
          }
        }

        setChartData(arr);
        console.log(response.data.request);
      }
    });
  }, []);


  const data = {
    labels: [
      "jan",
      "feb",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    datasets: [
      {
        label:'Sales',
        data: chartData,
        backgroundColor: [
          "#f97316",
          "#1f2937",
          "#C38B2C",
          "#f97316",
          "#1f2937",
          "#C38B2C",
          "#f97316",
          "#1f2937",
          "#C38B2C",
          "#f97316",
          "#1f2937",
          "#C38B2C",
        ],
      },
    ],
    fill: false,
    borderColor: "rgb(75, 192, 192)",
    tension: 0.1,
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default MonthlySales;
