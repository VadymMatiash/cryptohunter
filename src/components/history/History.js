import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {setCrypto} from '../../actions/dashActions';
import InfoPanel from './InfoPanel';
import ChartPannel from './ChartPannel';


class History extends Component {

    componentWillMount(){
        let symbol = this.props.history.location.pathname.substring(9);
        this.props.setCrypto(symbol);
    }

  render() {
    return (
      <div className="row history">
        <InfoPanel/>
        <ChartPannel/>
      </div>
    )
  }
}

export default connect(null,{setCrypto})(withRouter(History));
