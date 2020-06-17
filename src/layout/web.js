import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Sider from "../components/SiderBar";
import Home from "../pages/Web/home";
import Article from "../pages/Web/article";
import BackTop from "../components/BackTop";

function Web() {
  return (
    <div>
      <Header />
      <Sider />
      <div className="home">
        <Switch>
          <Route path="/article/:id" component={Article} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      <BackTop />
    </div>
  );
}
export default Web;
