import {prefixNS} from "../helpers";

export const ADD_TODO = prefixNS("ADD_TODO");
export const ADD_TODO_DONE = prefixNS("ADD_TODO_DONE");
export const ADD_TODO_ERROR = prefixNS("ADD_TODO_ERROR");

export function addTodo(item) {
    return {
        type: ADD_TODO,
        payload: {
            item: item,
        }
    };
}

export function addTodoDone(item) {
    return {
        type: ADD_TODO_DONE,
        payload: {
            item: item,
        }
    };
}

export function addTodoError(error) {
    return {
        type: ADD_TODO_ERROR,
        payload: {
            error: error,
        }
    };
}
