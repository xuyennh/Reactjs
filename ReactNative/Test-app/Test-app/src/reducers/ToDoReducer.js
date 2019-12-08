import * as types from '../constant'
const DEFAULT_STATE = {
    listToDo : [],
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessage: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_TODOS_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.GET_TODOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage:null,
                listToDo: action.payload,
            }
        case types.GET_TODOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        case types.ADD_TODOS_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.ADD_TODOS_SUCCESS:
            return {
                ...state,
                isFetching: false
            }
        case types.ADD_TODOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        case types.UPDATE_TODOS_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.UPDATE_TODOS_SUCCESS:
            return {
                ...state,
                isFetching: false
            }
        case types.UPDATE_TODOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state;
    }
}