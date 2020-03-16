import {
    REMOVE_DATA_LOADING,
    removeDataSuccess,
    removeDataFailure
} from '../actions/RemoveDataActions';
import {
    take,
    put,
    takeLatest
} from 'redux-saga/effects';

function* RemoveDataSaga(title) {
    try {
        localStorage.removeItem(title)
        yield put(removeDataSuccess(title))
    } catch (error) {
        yield take(removeDataFailure)
    }
}

export function* watchRemoveDataSaga() {
    yield takeLatest(REMOVE_DATA_LOADING, RemoveDataSaga)
}