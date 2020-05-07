import React, { Component } from "react";
import ReactDOM from "react-dom";
import CreateEle from "./demos/vitrualDom/createElement";
import SetState1 from "./demos/setState/index";
import Demo from "./demos/setState/useEffect";
class App extends Component {
  render() {
    return (
      <div>
        app
        <Demo />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));

module.hot && module.hot.accept();
