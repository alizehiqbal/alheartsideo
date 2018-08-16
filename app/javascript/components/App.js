import React, { Component } from "react";
import Intimisia from "./qualities_index.js";

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h2 className="header">CREATIVE QUALITIES</h2>
          <Intimisia />
        </div>
      </div>
    );
  }
}

export default App;
