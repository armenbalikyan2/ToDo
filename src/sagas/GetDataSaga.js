import {
    GET_DATA_LOADING,
    getDataSuccess,
    getDataFailure
} from '../actions/GetDataActions';
import {
    take,
    put,
    takeLatest
} from 'redux-saga/effects';
import { Data } from '../components/SiderForm';

function* GetDataSaga() {
    const data = Data;
    if (Data) {
        yield take(getDataFailure)

    }
    yield put(getDataSuccess(data))
}

export function* watchGetDataSaga() {
    yield takeLatest(GET_DATA_LOADING, GetDataSaga)
}