import React, { useState, useEffect } from "react";
import axios from "../../../../api/axios";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const MonthlySales = () => {
  


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
