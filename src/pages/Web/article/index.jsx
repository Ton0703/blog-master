import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import fetchArticle from "../../../api/useFetchArticle";
import { translateMarkdown } from "../../../utils";
import Loading from "../../../components/Loading";
import Time from "../../../img/time";
import Topic from "../../../img/topic";
import "./index.scss";

const timeFormat = (time) => {
  const timeArr = time.split("T");
  return timeArr[0];
};

function Article() {
  const location = useLocation();
  const history = useHistory();
  const id = location.pathname.substr(9);
  const data = fetchArticle({ id });
  console.log(data);
  const content = data.content ? translateMarkdown(data.content) : null;
  console.log(content);
  function Tag({ tag }) {
    return <span onClick={() => history.push(`/tag/${tag}`)}>#{tag}</span>;
  }
  return data.title ? (
    <div className="article">
      <div className="title-container">
        <div className="title">{data.title}</div>
        <div className="other">
          <div className="topic">
            <Topic />
            {data.topic}
          </div>
          <div className="time">
            <Time />
            {timeFormat(data.updatedAt)}
          </div>
        </div>
      </div>
      <div className="content">
        <div
          className="article-detail"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="tag">
        {data.tags.map((tag) => (
          <Tag tag={tag} />
        ))}
      </div>
    </div>
  ) : (
    <div className="loading">
      <Loading />
    </div>
  );
}

export default Article;
