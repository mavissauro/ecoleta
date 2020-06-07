import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import CreatePoint from "./pages/CreatePoint/CreatePoint.component";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={HomePage} path="/" exact />
      <Route component={CreatePoint} path="/create-point" />
    </BrowserRouter>
  );
};

export default Routes;
