import { all } from 'redux-saga/effects'
import {ToDoSaga} from './ToDoSaga'

function* rootSaga() {
    yield all([
        ...ToDoSaga,
    ]);
}
export default rootSaga;
