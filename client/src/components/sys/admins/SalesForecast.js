import React, { useState, useEffect } from "react";
import NavBar from "../../NavBar";
import { useParams } from "react-router-dom";
import axios from "../../../api/axios";

const GEL_SALES_FORECAST_URL = "/admins/reports/sales";

const SalesForecast = () => {
    const { type } = useParams();
    const { from } = useParams();
    const { to } = useParams();
  
    const [records, setRecords] = useState();
    const [button, setButton] = useState(true);
  
    useEffect(() => {
      const data = {
        type: type,
        from: from,
        to: to,
      };
  
      if (data) {
        axios.post(GEL_SALES_FORECAST_URL, data).then((response) => {
          if (response.data.error) {
            console.log(response.data.error);
          } else {
            const records = response.data.records;
            console.log(response.data.records);
            setRecords(records);
          }
        });
      } else {
        console.log("error");
      }
    }, []);

  return (
    <>
      <NavBar />
      <div className="flex justify-center mx-32">
        <h1 className="text-4xl font-bold my-10 text-center">
          Sales ForeCasts
        </h1>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <thead class="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      orderCount
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Total Earnings
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {records?.map((record, index) => {
                    return (
                      <tr class="bg-white border-b" key={index}>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {record.datetime}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {record.orderCount}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {record.total}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-32 my-20">
          {button && (
            <>
              <button onClick={handleGenerate}>
                <p className="px-5 py-3 bg-orange-500 text-white text-lg rounded-md">
                  Generate PDF
                </p>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SalesForecast;
