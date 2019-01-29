import axios from 'axios';
import {GET_CURRENT_PRICE, REVEIVED_CHART_DATA} from './types';

export const getCurrentPrice = price => {
    return {
        type: GET_CURRENT_PRICE,
        payload: price
    }
}

export function axiosCurrentPrice(symbol){
    return function(dispatch){
        return axios.get(`https://min-api.cryptocompare.com/data/histominute?fsym=${symbol}&tsym=USD&limit=1`)
            .then(res => dispatch(getCurrentPrice([res.data.Data[0].open, res.data.Data[1].open])))
    }
}

const receivedChartData = (data, typ) => ({
    type: REVEIVED_CHART_DATA,
    payload: data,
    typ: typ
});

export function axiosChartData(symb, type){
    return function(dispatch){
        switch(type){
            case 'hour':{
                return axios.get(`https://min-api.cryptocompare.com/data/histominute?fsym=${symb}&tsym=USD&limit=60`)
                    .then(res => dispatch(receivedChartData(res.data.Data, type)))
            }
            case 'day':{
                return axios.get(`https://min-api.cryptocompare.com/data/histominute?fsym=${symb}&tsym=USD&limit=144&aggregate=10`)
                    .then(res => dispatch(receivedChartData(res.data.Data, type)))
            }
            case 'week':{
                return axios.get(`https://min-api.cryptocompare.com/data/histohour?fsym=${symb}&tsym=USD&limit=168`)
                    .then(res => dispatch(receivedChartData(res.data.Data, type)))
            }
            case 'month':{
                return axios.get(`https://min-api.cryptocompare.com/data/histohour?fsym=${symb}&tsym=USD&limit=120&aggregate=6`)
                .then(res => dispatch(receivedChartData(res.data.Data, type)))
            }
            default: 
                return false;
        }
    }
}