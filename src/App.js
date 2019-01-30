import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import Form from "./components/Inputform";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Modellink from "./components/Modellink";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/Upload" component={Upload} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Modellink />
      </React.Fragment>
    );
  }
}
export default App;
