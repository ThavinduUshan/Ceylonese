import React, { useState, useEffect } from "react";
import axios from "../../../../api/axios";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const SellerRequestsPercentages = () => {
  const [chartData, setChartData] = useState();

  const GET_CHART_DATA_URL = "moderators/Charts/getsellerrequestspercentages";

  useEffect(() => {
    axios.post(GET_CHART_DATA_URL).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        let arr = [0, 0];
        const data = response.data.requests;
        for (let i = 0; i < data.length; i++) {
          if (data[i].status == "Pending") {
            arr[0] = data[i].count;
          } else if (data[i].status == "Accepted") {
            arr[1] = data[i].count;
          }
        }
        setChartData(arr);
        console.log(response.data.request);
      }
    });
  }, []);

  const data = {
    labels: ["Pending", "Accepted"],
    datasets: [
      {
        data: chartData,
        backgroundColor: ["#f97316", "#1f2937"],
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default SellerRequestsPercentages;
