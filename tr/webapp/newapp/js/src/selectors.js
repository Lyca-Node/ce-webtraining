import { prefixNS } from "./helpers";

export const getAppState = (state) => state[prefixNS('reducer')];
export const getTodoItems = (state) => getAppState(state)["todo_items"];
export const getChartData = (state) => getAppState(state)["chart_data"];