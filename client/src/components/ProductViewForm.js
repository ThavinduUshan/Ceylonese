import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";

const IS_PARTNERSHIP_ACTIVE_URL = "/root/partnership/status";

const ProductViewForm = () => {
  const { id } = useParams();

  const navigateTo = useNavigate();

  useEffect(() => {
    const data = {
      productID: id,
    };
    axios.post(IS_PARTNERSHIP_ACTIVE_URL, data).then((response) => {
      if (response.data.error) {
        navigateTo(-1);
      } else {
        const isPartnership = response.data.status;

        console.log("check", isPartnership);

        if (isPartnership || isPartnership == "Ended") {
          const partnershipID = response.data.partnershipID;
          navigateTo(`/product/${id}/${partnershipID}`, { replace: true });
        } else {
          navigateTo(`/product/${id}`, { replace: true });
        }
      }
    });
  });

  return <></>;
};

export default ProductViewForm;
