import {
    REMOVE_DATA_LOADING,
    removeDataSuccess,
    removeDataFailure
} from '../actions/RemoveDataActions';
import {
    take,
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

function* RemoveDataSaga() {

}

export function* watchRemoveDataSaga() {
    yield takeLatest(REMOVE_DATA_LOADING,RemoveDataSaga)
}