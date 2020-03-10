import { ADD_TASK, TASKS_LOADED } from "../constants/action-types"
import Axios from "axios"

export function addTask(payload) {
    return function (dispatch) {
        console.log("PAYLOAD", payload);

        return Axios.post(
            "http://localhost:8080/api/task",
            payload,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(response => {
                dispatch({ type: ADD_TASK, payload: response.data })
            })
    }
}

export function getTasks() {
    return function (dispatch) {
        return Axios.get(
            "http://localhost:8080/api/task",
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(response => dispatch({ type: TASKS_LOADED, payload: response.data }));
    }
}