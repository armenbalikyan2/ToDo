import {
    SET_DATA_LOADING,
    setDataSuccess,
    setDataFailure
} from '../actions/SetDataActions';
import {
    take,
    put,
    takeLatest
} from 'redux-saga/effects';
import { Data } from '../components/SiderForm';

function* SetDataSaga() {
    try {
        if (Data.key) {
            Data.map((item) => (localStorage.setItem(item.title, item.description)))
        }
    } catch (error) {
        yield take(setDataFailure)
    }
    yield put(setDataSuccess(Data))
}

export function* watchSetDataSaga() {
    yield takeLatest(SET_DATA_LOADING, SetDataSaga)
}