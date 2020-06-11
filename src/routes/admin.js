import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "../layout/admin";

function admin() {
  return (
    <Switch>
      <Route path="/admin" component={Admin} />
    </Switch>
  );
}

export default admin;
