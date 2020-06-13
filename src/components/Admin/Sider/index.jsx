import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Edit from '../../../img/edit2'
import Home from '../../../img/home'
import Add from '../../../img/add'
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
const icons = [<Home />, <Add />, <Edit />, ]

function Sider({visible}) {
  const location = useLocation()
  const [path, set] = useState('')
  useEffect(() => {
      set(location.pathname)
  }, [location])

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 500px)',
  });


  return (
    <div className={`admin-sider ${visible?'visible': ''}`}>
      <div className="menu">
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{backgroundColor: path === item.url ? 'lightpink': ''}}>
              <Link to={item.url}>{isTabletOrMobileDevice?icons[index] : item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sider;
