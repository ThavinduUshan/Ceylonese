import React, { useState, useEffect } from "react";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const AnnualSalesData = () => {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default AnnualSalesData;
