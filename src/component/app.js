import React, { Component } from 'react';
import DataStore from "../store/data-store";
import SunBurst from "./sunburst";
import Bar from "./bar";
import Line from "./line";

import '../style/App.css';
import '../style/diagram.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      errors: []
    };

    this.resetData = this.resetData.bind(this);
  }

  componentDidMount() {
    DataStore.addDataChangeListener(this.resetData);
    DataStore.addErrorDataListener(this.addError);
  }

  componentWillUnmount() {
    DataStore.removeListeners();
  }

  resetData() {
    this.setState({
      data: DataStore.data
    });
  }

  addError() {
    this.setState({
      errors: DataStore.errors
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Izz Abudaka's</h1>
          <h2>Data Visualisation Template</h2>
          <h4>Using React Flux, Nivo and other fun libraries</h4>
        </header>
        <p className="App-intro"> You can do things like: </p>
        <div class="diagrams">
          <div className="diagram">
            <SunBurst/>
          </div>
          <div className="diagram">
            <Bar/>
          </div>
          <div className="diagram">
            <Line/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
