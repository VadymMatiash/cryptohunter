import React, { Component } from 'react';


import CryptoChart from './CryptoChart';
import ChartControl from './ChartControl';

class ChartPannel extends Component {
  render() {
    return (
      <div>
        <CryptoChart/>
        <ChartControl/>
      </div>
    )
  }
}



export default ChartPannel;
