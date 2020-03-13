import {
    GET_DATA_LOADING,
    getDataSuccess,
    getDataFailure
} from '../actions/GetDataActions';
import {
    take,
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

function* GetDataSaga() {

}

export function* watchGetDataSaga() {
    yield takeLatest(GET_DATA_LOADING,GetDataSaga)
}