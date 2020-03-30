import './App.css'
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import GraphNetwork from './components/graph-network';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <GraphNetwork/>;
  }
}

export default hot(App);
