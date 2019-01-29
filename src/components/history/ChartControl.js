import React, { Component } from 'react';
import {connect} from 'react-redux';
import {axiosChartData} from '../../actions/historyActions';

class ChartControl extends Component {

    constructor(){
        super();

        this.state ={
            selected: 'hour'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){
        this.props.axiosChartData(this.props.crypto.symbol, 'hour');
    }

    handleClick(e){
        this.setState({selected: e.target.name});
        this.props.axiosChartData(this.props.crypto.symbol, e.target.name);
    }

  render() {
    return (
        <div class="btn-group" role="group">
        <button type="button" name="hour" onClick={this.handleClick} class={`btn ${'hour' === this.state.selected ? 'btn-success disabled' : 'btn-light'}`}>1 Hour</button>
        <button type="button" name="day" onClick={this.handleClick}  class={`btn ${'day' === this.state.selected ? 'btn-success disabled' : 'btn-light'}`}>1 Day</button>
        <button type="button" name="week" onClick={this.handleClick}  class={`btn ${'week' === this.state.selected ? 'btn-success disabled' : 'btn-light'}`}>1 Week</button>
        <button type="button" name="month" onClick={this.handleClick}  class={`btn ${'month' === this.state.selected ? 'btn-success disabled' : 'btn-light'}`}>1 Month</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    crypto: state.dash.crypto,
})

export default connect(mapStateToProps, {axiosChartData})(ChartControl);