import {
    GET_DATA_LOADING,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE
} from '../actions/GetDataActions';

const initialState = {
    gettingData: false,
    data: []
}

export default function GetDataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_LOADING:
            return {
                ...state,
                gettingData: true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                gettingData: false,
                data: action.payload
            }
        case GET_DATA_FAILURE:
            return {
                ...state,
                gettingData: false,
            }
        default:
            return state
    }
}