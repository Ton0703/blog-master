import React, { useState, useEffect, useCallback } from "react";
import axios from "../../../utils/axios";
import "./index.scss";
import Item from "../../../components/Admin/Item";
import { ToastContainer, toast } from "react-toastify";
import { Pagination } from "antd";
import { useLocation, useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [list, set] = useState([]);
  const [model, setModel] = useState(false);
  const [id, setId] = useState("");
  const [count, setCount] = useState(1);

  const location = useLocation();
  const history = useHistory();

  const current = location.pathname.includes("/page")
    ? location.pathname.substr(12)
    : "1";

  const itemSwitch = () => {
    setModel(true);
  };
  const notify = () => toast.info("删除成功 !");

  const deleteItem = useCallback(
    (id) => {
      axios.delete(`/article/${id}`).then(() => {
        const newList = list.filter((item) => item._id !== id);
        set(newList);
        notify();
      });
    },
    [list]
  );
  const handleClose = () => {
    setModel(false);
  };
  const handleOK = (callback) => {
    callback();
    setModel(false);
  };
  const handlePageChange = (e) => {
    history.push(`/admin/page=${e}`);
  };

  useEffect(() => {
    axios.get(`/article/admin?page=${current}`).then((res) => {
      set(res.data.data);
      setCount(res.data.count);
    });
  }, [current]);
  return (
    <div className="admin-home">
      <ToastContainer autoClose={3000} position="bottom-right" />
      <div className="articleList">
        <div className="menu-title">
          <ul>
            <li>标题</li>
            <li>发布日期</li>
            <li>操作</li>
          </ul>
        </div>
        {list.map((item, index) => (
          <Item
            key={index}
            del={itemSwitch}
            setId={setId}
            title={item.title}
            id={item._id}
            time={item.createdAt}
          />
        ))}
        <Pagination
          onChange={handlePageChange}
          current={parseInt(current)}
          total={count}
          pageSize={10}
          style={{ textAlign: "center", marginTop: "10px" }}
        />
      </div>
      <div className={`model ${model ? "active" : ""}`}>
        <div className="model-title">确认删除？</div>
        <div className="model-btn">
          <div className="close" onClick={handleClose}>
            <span>取消</span>
          </div>
          <div className="ok" onClick={() => handleOK(() => deleteItem(id))}>
            <span>确定</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
