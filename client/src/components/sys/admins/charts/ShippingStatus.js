import React from 'react';
import { useState, useEffect } from "react";
import axios from "../../../../api/axios";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const ShippingStatus = () => {

    const [chartData, setChartData] = useState();
    const [chartLabelData, setChartLabels] = useState();

    const GET_CHART_DATA_URL = "admins/charts/getshippingstatus";


    useEffect(() => {
        axios.post(GET_CHART_DATA_URL).then((response) => {
          if (response.data.error) {
            console.log(response.data.error);
          } else {
            let arr = [0, 0, 0];
            let labels = ["Pending", "Opened", "Closed"];
    
            const data = response.data.request;
            for (let i = 0; i < data.length; i++) {
              if(data[i].status == "Pending"){
                arr[0] = data[i].count;
              }else if(data[i].status == "Opened"){
                arr[1] = data[i].count;
              }else if(data[i].status == "Closed"){
                arr[2] = data[i].count;
              }
            }
    
            setChartData(arr);
            console.log("hello".labels);
            setChartLabels(labels);
            console.log(response.data.request);
          }
        });
      }, []);

      const data = {
        labels: chartLabelData,
        datasets: [
          {
            data: chartData,
            backgroundColor: ["#f97316", "#1f2937", "#C38B2C"],
          },
        ],
      };


    return(
      <div className="h-96 w-96 justify-items-center">
        <Doughnut data={data} />
      </div>
        
    );

};

export default ShippingStatus;
