import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

const items = [
  { name: "文章列表", url: "/admin" },
  {
    name: "添加文章",
    url: "/admin/add",
  },
  {
    name: "编辑文章",
    url: "/admin/edit",
  },
];

function Sider() {
  const location = useLocation()
  const [path, set] = useState('')
  useEffect(() => {
      set(location.pathname)
  }, [location])


  return (
    <div className="admin-sider">
      <div className="menu">
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{backgroundColor: path === item.url ? 'lightpink': ''}}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sider;
