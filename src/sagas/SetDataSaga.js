import {
    SET_DATA_LOADING,
    setDataSuccess,
    setDataFailure
} from '../actions/SetDataActions';
import {
    take,
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

function* SetDataSaga() {

}

export function* watchSetDataSaga() {
    yield takeLatest(SET_DATA_LOADING,SetDataSaga)
}