import React, { useState, useEffect } from "react";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const TopProducts = () => {
  const { auth } = useAuth();

  const [chartData, setChartData] = useState();
  const [chartLabelData, setChartLabels] = useState();

  const GET_CHART_DATA_URL = "sellers/charts/gettopproducts";

  useEffect(() => {
    const data = {
      sellerID: auth.user.sellerID,
    };
    axios.post(GET_CHART_DATA_URL, data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        let arr = [0, 0, 0];
        let labels = [0, 0, 0];

        const data = response.data.request;
        for (let i = 0; i < data.length; i++) {
          arr[i] = data[i].count;
          labels[i] = data[i].title;
        }

        setChartData(arr);
        console.log("hello".labels);
        setChartLabels(labels);
        console.log(response.data.request);
      }
    });
  }, []);

  const data = {
    labels: chartLabelData && chartLabelData,
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

export default TopProducts;
