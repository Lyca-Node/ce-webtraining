/**
 * Reducer Template
 */

import Immutable from 'immutable';
import { ADD_TODO_ITEM, FETCH_CHART_DATA_DONE, FETCH_CHART_DATA_ERROR, TOGGLE_TODO_ITEM_DONE } from '../actions';

const DEFAULT_TODO_ITEMS = Immutable.fromJS([
    { text: "Hello", done: false },
    { text: "Lorem Ipsum", done: true },
    { text: "New Todo", done: false }
]);

const toggleItemDone = (item) => {
    const oldDone = item.get('done');
    return item.set('done', !oldDone);
};

export function todo_items(state = DEFAULT_TODO_ITEMS, action) {
    switch (action.type) {
        case ADD_TODO_ITEM:
            return state.push(Immutable.fromJS({
                text: action.payload.text,
                done: false,
            }));
        case TOGGLE_TODO_ITEM_DONE:
            const itemIndex = action.payload.index;
            return state.set(itemIndex, toggleItemDone(state.get(itemIndex)));
        default:
            return state;
    }
}

export function chart_data(state = Immutable.Map(), action) {
    switch (action.type) {
        case FETCH_CHART_DATA_DONE:
            return Immutable.fromJS(action.payload.data);
        case FETCH_CHART_DATA_ERROR:
            return Immutable.fromJS({error: action.payload.err});
        default:
            return state;
    }
}