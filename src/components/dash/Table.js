import React, { Component } from 'react';
import {connect} from 'react-redux';
import {axiosList} from '../../actions/dashActions';
import TableRow from './TableRow';

class Table extends Component {

    componentDidMount(){
        let str = '';
        this.props.cryptoList.map(item => {
            str += `${item.symbol},`
        })
        str = str.substring(0, str.length-1);
        this.props.axiosList(str);  
    }

    componentWillReceiveProps(newProps){ 
        if(compareObjectArray(this.props.cryptoList, newProps.cryptoList)){
            let str = '';
            newProps.cryptoList.map(item => {
                str += `${item.symbol},`
            })
            str = str.substring(0, str.length-1);
            newProps.axiosList(str);         
        } 
    }

  render() {
    return (
      <div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price (USD)</th>
                </tr>
            </thead>
            <tbody>
                {this.props.cryptoList.map((item, i) => (
                    <TableRow
                        key={item.symbol} 
                        item={item} 
                        number={this.props.offset*this.props.elementsPerPage+i+1} 
                        price={this.props.priceList[item.symbol]}
                    />
                ))}
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    priceList: state.dash.priceList,
})

const compareObjectArray = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return true;
    }
    for(let i=0; i< arr1.length; i++){
        if(JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])){
            return true;
        }
    }
    return false;
}

export default connect(mapStateToProps, {axiosList})(Table);
