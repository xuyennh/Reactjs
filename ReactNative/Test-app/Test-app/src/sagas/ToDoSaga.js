import { put, takeEvery } from 'redux-saga/effects'
import getDataApi from '../fetchAPIs/getDataApi'
import addDataApi from '../fetchAPIs/addDataApi'
import deleteDataApi from '../fetchAPIs/deleteDataApi'
import updateDataApi from '../fetchAPIs/updateDataApi'
import * as types from '../constant'

function* getData(action) {
    try {
        const listData = yield getDataApi(action.payload)
        yield put({
            type: types.GET_TODOS_SUCCESS,
            payload: listData
        })
    } catch (error) {
        yield put({
            type: types.GET_TODOS_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* addData(action) {
    try {
        const listData = yield addDataApi(action.payload)
        yield put({
            type: types.ADD_TODOS_SUCCESS,
            payload: listData
        })
        yield put({
            type: types.GET_TODOS_REQUEST,
            payload: listData
        })
    } catch (error) {
        yield put({
            type: types.ADD_TODOS_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* updateData(action) {
    try {
        const listData = yield updateDataApi(action.payload)
        yield put({
            type: types.UPDATE_TODOS_SUCCESS,
            payload: listData
        })
        yield put({
            type: types.GET_TODOS_REQUEST,
            payload: listData
        })
    } catch (error) {
        yield put({
            type: types.UPDATE_TODOS_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* deleteData(action) {
    try {
        const listData = yield deleteDataApi(action.payload)
        yield put({
            type: types.DELETE_TODOS_SUCCESS,
            payload: listData
        })
        yield put({
            type: types.GET_TODOS_REQUEST,
            payload: listData
        })
    } catch (error) {
        yield put({
            type: types.DELETE_TODOS_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

export const ToDoSaga = [
    takeEvery(types.GET_TODOS_REQUEST, getData),
    takeEvery(types.ADD_TODOS_REQUEST, addData),
    takeEvery(types.UPDATE_TODOS_REQUEST, updateData),
    takeEvery(types.DELETE_TODOS_REQUEST, deleteData)
];
