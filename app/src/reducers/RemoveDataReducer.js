import { 
    REMOVE_DATA_LOADING,
    REMOVE_DATA_SUCCESS,
    REMOVE_DATA_FAILURE 
} from '../actions/RemoveDataActions';

const initialState = {
    removingData: false,
    data: []
}

export default function usersReducer (state = initialState,action){
    switch (action.type){
        case REMOVE_DATA_LOADING:
            return {
                ...state,
                removingData: true
            }
        case REMOVE_DATA_SUCCESS:
            return{
                ...state,
                removingData: false,
                data:  action.payload
            }
        case REMOVE_DATA_FAILURE:
            return{
                ...state,
                removingData: false,
            }
        default:
            return state
    }
}