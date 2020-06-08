import { ADD_TASK, TASKS_LOADED, TASK_DELETED, TASK_MARKED } from "../constants/action-types"

export function addTask(payload) {
    return function (dispatch) {
        return fetch(`http://localhost:8080/api/task`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: ADD_TASK, payload: data })
            });
    }
}

export function getTasks() {
    return function (dispatch) {
        return fetch(`http://localhost:8080/api/task`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: TASKS_LOADED, payload: data })
            });
    }
}

export function deleteTask(taskId) {
    return function (dispatch) {
        return fetch(`http://localhost:8080/api/deleteTask/${taskId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: TASK_DELETED, payload: data })
            });
    }
}

export function markTask(taskId) {
    return function (dispatch) {
        return fetch(`http://localhost:8080/api/task/${taskId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch({ type: TASK_MARKED, payload: data })
            });
    }
}