import { addTodoDone, addTodoError, ADD_TODO } from "../actions";
import {postJSON} from 'cs-web-components-base';
import {ReduxSaga} from 'cs-web-components-externals';

const {takeEvery, put, call} = ReduxSaga.effects;

function* addTodo(action) {
    const item = action.payload.item;
    try {
        const result = yield call(postJSON, '/tr.webapp/tr-webapp-app2/items', {
            text: item,
        });
        console.log('result', result);
        yield put(addTodoDone(result.text));
    } catch(err) {
        console.error(err);
        yield put(addTodoError(err.message));
    }
};



export default function* rootSaga() {
    yield takeEvery(ADD_TODO, addTodo);

}