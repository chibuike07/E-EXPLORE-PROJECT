import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactPage from "../Contact page/Parent";
import ServicePage from "../Service_Component/Services";
import NotFoundPage from "./NotFoundPage";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ContactPage} exact />
        <Route path="/service" component={ServicePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
