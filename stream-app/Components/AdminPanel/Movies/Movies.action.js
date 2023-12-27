import axios from "axios";
import { JOB_FAILED, JOB_REQUEST, JOB_SUCCESS, MOVIES_FAILED, MOVIES_REQUEST, MOVIES_SUCCESS } from "./Movies.state"

export const createJob = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: JOB_REQUEST });

            const response = await axios({
                method: 'POST',
                url: '/api/media-convert',
                data: {
                    key: data.video
                }
            });

            data.job_id = response.data.data.Job.Id;

            dispatch({
                type: JOB_SUCCESS,
                payload: {
                    data,
                    jobData: response.data.data
                }
            });

            // CREATE MOVIE OR INSERT MOVIE DATA INTO DATABASE TABLE
            dispatch(createMovie(data));

        } catch (error) {
            dispatch({
                type: JOB_FAILED,
                payload: error
            })
        }
    }
}

const createMovie = (data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: MOVIES_REQUEST
            });

            const response = await axios({
                method: 'POST',
                url: '/api/movies',
                data
            });

            dispatch({
                type: MOVIES_SUCCESS,
                payload: response.data.data
            });
        } catch (error) {
            dispatch({
                type: MOVIES_FAILED,
                payload: error
            })
        }
    }
}