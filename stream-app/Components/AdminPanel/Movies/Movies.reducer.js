import { MOVIES_FAILED, MOVIES_REQUEST, MOVIES_SUCCESS } from "./Movies.state"

const Model = {
    loading: false,
    success: false,
    data: null,
    error: null
}

const MoviesReducer = (state = Model, action) => {
    switch (action.type) {
        case MOVIES_REQUEST: return {
            ...state,
            loading: true
        }
        case MOVIES_SUCCESS: return {
            ...state,
            loading: false,
            success: true,
            data: action.payload
        }
        case MOVIES_FAILED: return {
            ...state,
            loading: false,
            success: false,
            data: null,
            error: action.payload
        }
        default: return state;
    }
}

export default MoviesReducer;