import { SEARCH_FLIGHT } from "../constants/action-types";

const initialState = {
    columnData:[]
};

function rootReducer(state = initialState,action){
    if(action.type === SEARCH_FLIGHT) {
        
        return Object.assign({},state,{
        columnData: action.payload
        })
    }

    return state;
};

export default rootReducer;