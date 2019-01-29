import React, { Component } from 'react';
import {connect} from 'react-redux';
import {axiosCurrentPrice} from '../../actions/historyActions';


class InfoPanel extends Component {

  constructor(){
    super();
    this.createInterval = this.createInterval.bind(this);
  }

  componentWillMount(){
    this.props.axiosCurrentPrice(this.props.crypto.symbol);
    this.interval = setInterval(this.createInterval, 60000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  createInterval(){
    this.props.axiosCurrentPrice(this.props.crypto.symbol);
    console.log(this.props.newValue);
  }

  render() {
    return (
      <div className="col-md-3 info-panel">
        <img className="big-logo" src={this.props.crypto.imageUrl}/>
        <div className="row justify-content-md-center">
            <h3 className="">{`${this.props.crypto.name} (${this.props.crypto.symbol})`}</h3>
        </div>
        <div className="row justify-content-md-center">
          <h2 className="price">
            <i class={`fas fa-caret-up ${((this.props.newValue - this.props.prevValue) >= 0) ? 'icon-success':'icon-fail'}`}></i>
            {this.props.newValue}
          </h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    crypto: state.dash.crypto,
    prevValue: state.history.prevValue,
    newValue: state.history.newValue
})

export default connect(mapStateToProps, {axiosCurrentPrice})(InfoPanel);
