import { useEffect, useState } from "react";
import axios from "../utils/axios";

function useFetchArticle({ id }) {
  const [article, setArticle] = useState({});
  useEffect(() => {
    axios.get(`/article/${id}`).then((res) => {
      setArticle(res.data);
    });
  }, [id]);
  return article;
}

export default useFetchArticle;
