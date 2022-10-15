import React from 'react';
import { useState, useEffect } from "react";
import axios from "../../../../api/axios";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const ShippingStatus = () => {

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
