import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class TableRow extends Component {

    constructor(){
        super();

        this.handleClick = this.handleClick.bind(this);

    }

    static contextTypes = {
        router: PropTypes.shape({
          history: PropTypes.shape({
            push: PropTypes.func.isRequired,
            replace: PropTypes.func.isRequired
          }).isRequired,
          staticContext: PropTypes.object
        }).isRequired
      };

    handleClick(e){
        this.props.history.push(`/history/${this.props.item.symbol}`);
    }

  render() {
    return (
        <tr onClick={this.handleClick}>
        <td>{this.props.number}</td>
        <td>
            <img className="cryptologo" src={this.props.item.imageUrl} alt=""/>
            {this.props.item.name}
        </td>
        <td>
            {this.props.item.symbol}
        </td>
        <td>
            {this.props.price}
        </td>
    </tr>
    )
  }
}

export default withRouter(TableRow);
