import { useEffect, useState } from "react";

function useResultSearch(setSearchResults) {

  const [searchResultsData, setSearchResultsData] = useState([setSearchResults]);

  useEffect(() => {
    const currentSearchResults = setSearchResults();
    const searchResultsConstant = currentSearchResults;

    console.log("input de Array de Resultados " + setSearchResults);
  
    setSearchResultsData(searchResultsConstant);
  }, [setSearchResults]);

  return { searchResultsData };
}

export default useResultSearch;
