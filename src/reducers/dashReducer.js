import {cryptoList} from '../resources/list';
import {CHANGE_SEARCH_FILTER, CHANGE_ELEMENTS_PER_PAGE, CHANGE_OFFSET, REQUEST_LIST, RECEIVED_LIST, SET_CRYPTO} from '../actions/types';

const initialState = {
    cryptoList,
    searchFilter: '',
    elementsPerPage: 10,
    offset: 0,
    tempList: cryptoList,
    loading: false,
    priceList: {}
}

const dashReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_SEARCH_FILTER:
            return {...state, searchFilter: action.payload,
                offset: 0,
                tempList: state.cryptoList.filter(item => {
                    return ((item.name.toLowerCase().indexOf(action.payload) >= 0) || (item.symbol.toLowerCase().indexOf(action.payload) >= 0));
                })      
            }
        case CHANGE_ELEMENTS_PER_PAGE:
            return {...state, elementsPerPage: action.payload}
        case CHANGE_OFFSET:
            return {...state, offset: action.payload}
        case REQUEST_LIST:
            return {...state, loading: true}
        case RECEIVED_LIST:
            return {...state, loading:false, priceList: action.payload}
        case SET_CRYPTO:
            return {...state, crypto: state.cryptoList.find(x => x.symbol === action.payload)}
        default:
            return state;
    }
}

export default dashReducer;