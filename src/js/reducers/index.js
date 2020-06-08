import { ADD_TASK, TASKS_LOADED, TASK_DELETED, TASK_MARKED } from "../constants/action-types"

const initialState = {
    tasks: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] }

        case TASKS_LOADED:
            if (action.payload != null) {
                return { ...state, tasks: action.payload };
            }
            else {
                return state;
            }

        case TASK_DELETED:
            const newTasksDeleted = state.tasks.filter(function (task) {
                return task._id !== action.payload
            })

            return { ...state, tasks: newTasksDeleted }

        case TASK_MARKED:
            const newTasksMarked = state.tasks.map(task => task._id === action.payload._id ? action.payload : task);

            return { ...state, tasks: newTasksMarked }

        default:
            return state;
    }
}

export default rootReducer;