import {GET_CURRENT_PRICE, REVEIVED_CHART_DATA} from '../actions/types';

const initualState = {
    chartData: []
};

const historyReducer = (state = initualState, action) => {
    switch(action.type){
        case GET_CURRENT_PRICE:
            return {...state, prevValue: action.payload[0], newValue: action.payload[1]}
        case REVEIVED_CHART_DATA:
            return {...state, chartData: [...action.payload], typ: action.typ}
        default:
            return state;
    }
}

export default historyReducer;