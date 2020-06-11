import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "../../utils/axios";
import Svg from "../../img/visible";
import "./index.scss";

function Catalog({ topic }) {
  const history = useHistory();
  const location = useLocation();
  const articleId = location.pathname.split("/")[2];
  const [list, setList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [Topic, setTopic] = useState('')
  useEffect(() => {
    axios.get(`/article/topic/${topic}`).then((res) => {
      setList(res.data);
    });
  }, [topic]);
//  useEffect(() => {
//     axios.get(`/${articleId}/topic`).then(res => {
//       setTopic(res)
//       console.log(res)
//     })
//  }, [articleId])
  
  const handleClick = () => {
    setVisible(!visible);
  };
  const historyJump = (id) => {
    history.push(`/article/${id}`);
  };
  return (
    <div className="catalog">
      <div className={`title`} onClick={handleClick}>
        {topic}
        <div
          style={{ transform: visible ? "rotate(-90deg)" : "rotate(90deg)" }}
        >
          <Svg />
        </div>
      </div>
      <div className="list" style={{ height: visible ? "auto" : "0px" }}>
        <div>
          <ul>
            {list.map((item, index) => (
              <li
                key={index}
                style={{
                  backgroundColor:
                    articleId === item._id && "rgba(134,180,255, 0.1)",
                  color: articleId === item._id && "#4971ea",
                }}
              >
                <div onClick={() => historyJump(item._id)}>{item.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
