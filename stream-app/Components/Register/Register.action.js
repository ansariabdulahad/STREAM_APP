import axios from "axios";
import { SIGNUP_FAILED, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./Register.state";

const signup = (data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: SIGNUP_REQUEST
            });

            const response = await axios({
                method: 'POST',
                url: '/api/user',
                data: data
            });

            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response.data.data
            });
        } catch (error) {
            dispatch({
                type: SIGNUP_FAILED,
                payload: error.response.data
            });
        }
    }
}

export default signup;