import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
  const [data, setData] = useState({}); //i wnat to show change in ui and want to get data in a aaray
  useEffect(() => {
     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]));
    // console.log(data);
  }, [currency]);
  // console.log(data);
  return data;
}
export default UseCurrencyInfo;
