import { CREATE_PLAN_FAILED, CREATE_PLAN_REQUEST, CREATE_PLAN_SUCCESS } from "./Plans.state";

const Model = {
    createLoading: false,
    createSuccess: false,
    createData: null,
    createError: false
}

const PlansReducer = (state = Model, action) => {
    switch (action.type) {
        case CREATE_PLAN_REQUEST: return {
            ...state,
            createLoading: true
        }
        case CREATE_PLAN_SUCCESS: return {
            ...state,
            createLoading: false,
            createSuccess: true,
            createData: action.payload
        }
        case CREATE_PLAN_FAILED: return {
            ...state,
            createLoading: false,
            createSuccess: false,
            createData: null,
            createError: true
        }
        default: return state;
    }
}

export default PlansReducer;