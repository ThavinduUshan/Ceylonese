import React, { useState } from "react";
import SearchAuctions from "./SearchAuctions";
import SearchProducts from "./SearchProducts";

const SearchView = () => {
  const [isAuction, setIsAuction] = useState(false);

  const handleChange = (bool) => {
    setIsAuction(bool);
  };

  if (!isAuction) {
    return (
      <>
        <SearchProducts set={handleChange} />
      </>
    );
  } else {
    return (
      <>
        <SearchAuctions set={handleChange} />
      </>
    );
  }
};

export default SearchView;
