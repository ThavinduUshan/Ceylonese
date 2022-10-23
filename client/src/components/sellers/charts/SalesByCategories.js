import React, { useState, useEffect } from "react";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const SalesByCategories = () => {
  const { auth } = useAuth();

  const [chartData, setChartData] = useState();

  const GET_CHART_DATA_URL = "sellers/charts/getchartdata";

  useEffect(() => {
    const data = {
      sellerID: auth.user.sellerID,
    };
    axios.post(GET_CHART_DATA_URL, data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        let arr = [0, 0, 0, 0, 0];
        const data = response.data.request;
        for (let i = 0; i < data.length; i++) {
          if (data[i].category == 1) {
            arr[0] = data[i].count;
          } else if (data[i].category == 2) {
            arr[1] = data[i].count;
          } else if (data[i].category == 3) {
            arr[2] = data[i].count;
          } else if (data[i].category == 4) {
            arr[3] = data[i].count;
          } else if (data[i].category == 5) {
            arr[4] = data[i].count;
          }
        }

        setChartData(arr);
        console.log(response.data.request);
      }
    });
  }, []);

  const data = {
    labels: [
      "Home & Living",
      "Outdoor & Garden",
      "Arts & Crafts",
      "Gift Ideas",
      "Ornaments and Clothing",
    ],
    datasets: [
      {
        data: chartData,
        backgroundColor: [
          "#f97316",
          "#1f2937",
          "#C38B2C",
          "#FAA61A",
          "#9E9D9D",
        ],
      },
    ],
  };

  return (
    <div className="h-96 w-96">
      <Pie data={data} />
    </div>
  );
};

export default SalesByCategories;
