import React, { Component } from "react";
import ReactDOM from "react-dom";
import CreateEle from "./demos/vitrualDom/createElement";

class App extends Component {
  render() {

    return (
      <div>
        app
        <CreateEle />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));

module.hot && module.hot.accept();
