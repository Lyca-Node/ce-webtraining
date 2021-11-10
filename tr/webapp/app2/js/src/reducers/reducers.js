/**
 * Reducer Template
 */

import Immutable from 'immutable';
import {ADD_TODO_DONE, ADD_TODO_ERROR} from '../actions';
import {getAppSetup} from 'cs-web-components-base';

const DEFAULT_TODOS = Immutable.fromJS({
    todos: getAppSetup().getIn(["tr-webapp-app2", "todo_items"]),
    error: null,
});


export default function(state = DEFAULT_TODOS, action) {
    switch (action.type) {
        case ADD_TODO_DONE:
            const todos = state.get("todos").push(action.payload.item);
            return state.set('todos', todos).set('error', null);
        case ADD_TODO_ERROR:
            return state.set('error', action.payload.error);
        default:
            return state;
    }
}
