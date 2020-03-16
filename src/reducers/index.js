import { combineReducers } from 'redux';
import { GetDataReducer } from './GetDataReducer'
import { SetDataReducer } from './SetDataReducer'
import { RemoveDataReducer } from './RemoveDataReducer'

export const rootReducer = combineReducers({
    getData: GetDataReducer,
    setData: SetDataReducer,
    removeData: RemoveDataReducer,
});


export default rootReducer;093314809