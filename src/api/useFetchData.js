import { useState, useEffect } from "react";
import axios from "../utils/axios";

function useFetchData({ tag, key }) {
  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/article", {
        params: {
          key: key,
          tag: tag,
        },
      })
      .then((res) => {
        setArticleList(res.data);
        setLoading(false);
      });
  }, [tag, key]);
  return { articleList, loading };
}

export default useFetchData;
