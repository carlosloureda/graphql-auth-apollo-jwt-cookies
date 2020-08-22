import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Form from "./Form";
import PrivateArea from "./PrivateArea";

ReactDOM.render(
  <Router>
    <Form path="/" />
    <PrivateArea path="/private-area" />
  </Router>,
  document.getElementById("root")
);
