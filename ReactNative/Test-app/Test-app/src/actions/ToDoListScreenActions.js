import * as types from '../constant'
export function getData(payload){
    return({
        type: types.GET_TODOS_REQUEST,
        payload
    })
}

export function addData(payload){
    return({
        type: types.ADD_TODOS_REQUEST,
        payload
    })
}

export function updateData(payload){
    return({
        type: types.UPDATE_TODOS_REQUEST,
        payload
    })
}

export function deleteData(payload){
    return({
        type: types.DELETE_TODOS_REQUEST,
        payload
    })
}