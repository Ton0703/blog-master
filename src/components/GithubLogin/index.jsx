import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user/action";

function GithubLogin() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const jumpback = () => {
    history.push("/");
  };
  useEffect(() => {
    location.search.includes("?code=")
      ? dispatch(login(location.search.replace("?code=", ""), jumpback))
      : history.push("/");
  }, [dispatch, history, location.search]);

  return <div>Github跳转界面</div>;
}

export default GithubLogin;
