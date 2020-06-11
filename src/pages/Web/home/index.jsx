import React from "react";
import useFetchData from "../../../api/useFetchData";
import Preview from "../../../components/Preview";
import Loading from "../../../components/Loading";
import Nodata from "../../../components/NoData";
import { useLocation } from "react-router-dom";
import "./index.scss";
import Recommend from "../../../components/Recommend";
function Home() {
  const location = useLocation();
  const tag = location.pathname.includes("/tag")
    ? location.pathname.substr(5)
    : null;
  const key = location.search ? location.search.replace("?key=", "") : null;
  const { articleList, loading } = useFetchData({ tag, key });
  return (
    <div className="article-list">
      {loading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : articleList.length === 0 ? (
        <div className="nodata">
          <Nodata />
        </div>
      ) : (
        articleList.map((item, index) => <Preview data={item} key={index} />)
      )}
      <div className='tr'>
        <Recommend />
      </div>
    </div>
  );
}

export default Home;
