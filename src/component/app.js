import React, { Component } from 'react';
import DataActionCreator from '../action/data-action-creator';
import DataStore from "../store/data-store";
import SunBurst from "./sunburst";
import Bar from "./bar";
import Line from "./line";

import '../styles/App.css';
import '../styles/diagram.css';
import {Alert} from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      errors: []
    };

    this.resetData = this.resetData.bind(this);
    this.addError = this.addError.bind(this);
  }

  componentDidMount() {
    DataStore.addDataChangeListener(this.resetData);
    DataStore.addErrorDataListener(this.addError);
    DataActionCreator.getData();
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
        <Alert bsStyle="warning">
          <strong>Remember to configure the Api endpoint to suit your needs!</strong>
          {this.state.errors.map(error => <div>{error}</div>)}
        </Alert>;
        <p className="App-intro"> You can do things like: </p>
        <div className="diagrams">
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
