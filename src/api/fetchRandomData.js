import { useEffect, useState } from "react";
import axios from "../utils/axios";

function useFetchRandomData() {
  const [data, set] = useState([]);
  useEffect(() => {
    axios.get("/article/random").then((res) => {
      set(res.data);
    });
  }, []);

  return data;
}

export default useFetchRandomData;
