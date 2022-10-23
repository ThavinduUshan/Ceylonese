import React, { useState, useEffect } from "react";
import axios from "../../../../api/axios";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const PendingSupportTicketTypes = () => {
  const [chartData, setChartData] = useState();

  const GET_CHART_DATA_URL = "moderators/Charts/getchartdata";

  useEffect(() => {
    axios.post(GET_CHART_DATA_URL).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        let arr = [0, 0, 0];
        const data = response.data.request;
        for (let i = 0; i < data.length; i++) {
          if (data[i].type == 1) {
            arr[0] = data[i].count;
          } else if (data[i].type == 2) {
            arr[1] = data[i].count;
          } else if (data[i].type == 3) {
            arr[2] = data[i].count;
          }
        }
        setChartData(arr);
        console.log(response.data.request);
      }
    });
  }, []);

  const data = {
    labels: ["General Issues", "Account Issues", "Complants(Reports)"],
    datasets: [
      {
        data: chartData,
        backgroundColor: ["#f97316", "#1f2937", "#C38B2C"],
      },
    ],
  };

  return (
    <div className="h-96 w-96">
      <Doughnut data={data} />
    </div>
  );
};

export default PendingSupportTicketTypes;
