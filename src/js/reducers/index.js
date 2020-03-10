import { ADD_TASK, TASKS_LOADED } from "../constants/action-types"

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

        default:
            return state;
    }
}

export default rootReducer;