import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';
import {formatDate} from '../../lib/DateForm';

class CryptoChart extends Component {
  

  

  render() {  
    const maxTicksLim = {
      hour: 6,
      day: 8,
      week: 7,
      month: 10
    }

    let data = {
      labels: this.props.data.map(item => formatDate(item.time, this.props.type)),
      datasets:[{
        backgroundColor: 'rgba(132, 99, 255, 0.2)',
        borderColor:  'rgba(132,99,255,1)',
        data: this.props.data.map(item => item.open),
        pointRadius: 0
      }],
    }


    let options = {
      legend:{
        display: false
      },
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: false
            }
        }],
        xAxes: [{
            ticks: {
                autoSkip: true,
                maxTicksLimit: maxTicksLim[this.props.type]
            }
        }]
      },
      tooltips:{
        position: 'nearest',
        mode: 'index',
        intersect: false
      }
    }

    console.log(options.scales.xAxes[0].ticks.maxTicksLimit);

    return (
      <div>
        <Line data={data} options={options} height={400} width={850}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.history.chartData,
  type: state.history.typ
});

export default connect(mapStateToProps)(CryptoChart);