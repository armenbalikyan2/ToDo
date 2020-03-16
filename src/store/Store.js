import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { initSagas } from '../sagas/initSagas';



const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware, thunk];
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleWare),
    ),
);
initSagas(sagaMiddleware)


export default store;
