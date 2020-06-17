import React from "react";
import { Pagination } from "antd";
import useFetchData from "../../../api/useFetchData";
import Preview from "../../../components/Preview";
import Loading from "../../../components/Loading";
import Nodata from "../../../components/NoData";
import { useLocation, useHistory } from "react-router-dom";
import "./index.scss";
import Recommend from "../../../components/Recommend";
import { decodeQuery } from "../../../utils";

function Home() {
  const location = useLocation();
  const query = decodeQuery(location.search);
  const l = location.search.indexOf("page=");
  const current = l === -1 ? "1" : query["page"];
  const history = useHistory();

  const { articleList, loading, count } = useFetchData({ ...query });
  const handlePageChange = (p) => {
    const url =
      location.pathname.indexOf("page=") === -1
        ? `${location.search}&page=${current}`
        : `${location.search.splice(
            location.search.indexOf("page="),
            2,
            `page=${p}`
          )}`;
    history.push(url.replace("//", "/"));
  };
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
        <div>
          {articleList.map((item, index) => (
            <Preview data={item} key={index} />
          ))}
          <div>
            <Pagination
              className="pagination"
              current={parseInt(current)}
              total={count}
              pageSize={5}
              onChange={handlePageChange}
            />
          </div>
        </div>
      )}
      <div className="tr">
        <Recommend />
      </div>
    </div>
  );
}

export default Home;
