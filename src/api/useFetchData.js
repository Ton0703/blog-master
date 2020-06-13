import { useState, useEffect } from "react";
import axios from "../utils/axios";

function useFetchData({ tag, key, page }) {
  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState('')
  useEffect(() => {
    setLoading(true);
    axios
      .get("/article", {
        params: {
          key: key,
          tag: tag,
          page: page
        },
      })
      .then((res) => {
        setArticleList(res.data.article);
        setCount(res.data.count)
        setLoading(false);
      });
  }, [tag, key, page]);
  return { articleList, loading, count };
}

export default useFetchData;
