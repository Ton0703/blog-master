import React from "react";
import { useHistory } from "react-router-dom";
import { Divider } from "antd";
import TopicIcon from "../../img/topic";
import TagIcon from "../../img/tag";
import { translateMarkdown } from "../../utils";
import "./index.scss";

const timeFormat = (time) => {
  const timeArr = time.split("T");
  return timeArr[0];
};

function Preview({ data }) {
  const history = useHistory();
  const { _id, title, content, updatedAt, topic, tags } = data;
  function Tag({ tag }) {
    return <span onClick={() => history.push(`?tag=${tag}`)}>{tag}</span>;
  }
  function Topic({ topic }) {
    return <span onClick={() => history.push(`?topic/${topic}`)}>{topic}</span>;
  }
  function jumpUrl() {
    history.push(`/article/${_id}`);
  }
  return (
    <div className="preview">
      <Divider orientation="left">
        <div className="info">
          <div className="title" onClick={() => jumpUrl()}>
            {title}
          </div>
          <div className="time">{timeFormat(updatedAt)}</div>
        </div>
      </Divider>
      <div
        className="content"
        onClick={() => jumpUrl()}
        dangerouslySetInnerHTML={{ __html: translateMarkdown(content) }}
      />
      <div className="classify">
        <div className="topic">
          <TopicIcon />
          <Topic topic={topic} />
        </div>
        <div className="tag">
          <TagIcon />
          {tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Preview;
