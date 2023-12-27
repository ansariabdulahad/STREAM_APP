import axios from "axios";
import { MOVIES_FAILED, MOVIES_REQUEST, MOVIES_SUCCESS } from "./Movies.state"

export const createStreaming = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: MOVIES_REQUEST });

            const response = await axios({
                method: 'POST',
                url: '/api/media-convert',
                data: {
                    key: data.video
                }
            });

            dispatch({
                type: MOVIES_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: MOVIES_FAILED,
                payload: error.response
            })
        }
    }
}