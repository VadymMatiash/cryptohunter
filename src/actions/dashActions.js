import axios from 'axios';
import {CHANGE_SEARCH_FILTER, CHANGE_ELEMENTS_PER_PAGE, CHANGE_OFFSET, REQUEST_LIST, RECEIVED_LIST, SET_CRYPTO} from './types';

export const setCrypto = symbol => {
    return {
        type: SET_CRYPTO,
        payload: symbol
    }
}

export const changeSearchFilter = text => {
    return {
        type: CHANGE_SEARCH_FILTER,
        payload: text.toLowerCase()
    }
};

export const changeElementsPerPage = number => {
    return{
        type: CHANGE_ELEMENTS_PER_PAGE,
        payload: +number
    }
};

export const changeOffset = offset => {
    return{
        type: CHANGE_OFFSET,
        payload: offset
    }
}

export const requestList = () => ({
    type: REQUEST_LIST
})

const receivedList = (list) => ({
    type: RECEIVED_LIST,
    payload: convert(list)
})

export function axiosList(str){
    return async function(dispatch){
        dispatch(requestList());
        try {
            const res = await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${str}&tsyms=USD`);
            return dispatch(receivedList(res.data));
        }
        catch (err) {
            return console.log(err);
        }
    }
}

const convert = (list) => {
    let obj= {};
    for(let key in list){
        obj[key] = list[key].USD;
    }
    return obj;
}
