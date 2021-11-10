import {prefixNS} from '../helpers.js';
import {getJSON} from 'cs-web-components-base';

export const ADD_TODO_ITEM = prefixNS('ADD_TODO_ITEM');
export const TOGGLE_TODO_ITEM_DONE = prefixNS('TOGGLE_TODO_ITEM_DONE');
export const FETCH_CHART_DATA_DONE = prefixNS('FETCH_CHART_DATA_DONE');
export const FETCH_CHART_DATA_ERROR = prefixNS('FETCH_CHART_DATA_ERROR');

export function addTodoItem(itemText) {
    return {
        type: ADD_TODO_ITEM,
        payload: {
            text: itemText
        }
    };
}

export function toggleTodoItemDone(index) {
    return {
        type: TOGGLE_TODO_ITEM_DONE,
        payload: {
            index
        }
    };
}

export function fetchChartDataDone(data) {
    return {
        type: FETCH_CHART_DATA_DONE,
        payload: {
            data
        }
    };
}

export function fetchChartDataError(err) {
    return {
        type: FETCH_CHART_DATA_ERROR,
        payload: {
            err
        }
    };
}

export function fetchChartData() {
    return (dispatch) => {
        getJSON("/tr.webapp/newapp/userdocs")
            .then(
                (data) => {
                    dispatch(fetchChartDataDone(data));
                },
                (err) => {
                    dispatch(fetchChartDataError(err));
                }
            );
    };
}