import React, { useState } from "react";
import AddListing from "./AddListing";
import AddListingAuction from "./AddListingAuction";

const AddLisitingForm = () => {
  const [isAuction, setIsAuction] = useState(0);

  const handleInput = (val) => {
    setIsAuction(val);
  };

  if (isAuction) {
    return (
      <>
        <AddListingAuction type={isAuction} set={handleInput} />
      </>
    );
  } else {
    return (
      <>
        <AddListing type={isAuction} set={handleInput} />
      </>
    );
  }
};

export default AddLisitingForm;
