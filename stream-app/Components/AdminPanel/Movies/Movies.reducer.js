import { JOB_FAILED, JOB_REQUEST, JOB_SUCCESS, MOVIES_FAILED, MOVIES_REQUEST, MOVIES_SUCCESS } from "./Movies.state"

const Model = {
    job_loading: false,
    movie_loading: false,
    job_success: false,
    movie_success: false,
    data: null,
    error: null
}

const MoviesReducer = (state = Model, action) => {
    switch (action.type) {
        case JOB_REQUEST: return {
            ...state,
            job_loading: true
        }
        case JOB_SUCCESS: return {
            ...state,
            job_loading: false,
            job_success: true,
            data: action.payload
        }
        case JOB_FAILED: return {
            ...state,
            job_loading: false,
            job_success: false,
            data: null,
            error: action.payload
        }
        case MOVIES_REQUEST: return {
            ...state,
            movie_loading: true
        }
        case MOVIES_SUCCESS: return {
            ...state,
            movie_loading: false,
            movie_success: true,
            data: action.payload
        }
        case MOVIES_FAILED: return {
            ...state,
            movie_loading: false,
            movie_success: false,
            data: null,
            error: action.payload
        }
        default: return state;
    }
}

export default MoviesReducer;