import axios from "axios";
import { CREATE_PLAN_FAILED, CREATE_PLAN_REQUEST, CREATE_PLAN_SUCCESS } from "./Plans.state"

export const create = (data, resetForm) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: CREATE_PLAN_REQUEST
            });

            const response = await axios({
                method: "POST",
                url: '/api/plan',
                data: data
            });

            dispatch({
                type: CREATE_PLAN_SUCCESS,
                payload: response.data.data
            });
            resetForm(); // reset the form
        } catch (error) {
            dispatch({
                type: CREATE_PLAN_FAILED,
                payload: error.response.data
            })
        }
    }
}