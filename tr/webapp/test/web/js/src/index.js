import {Registry} from 'cs-web-components-base';
import {prefixNS} from './helpers';
import * as reducers from './reducers';
import MainComponent from './containers/MainComponent';
import {combineReducers} from 'cs-web-components-externals';

Registry.registerComponent(prefixNS('MainComponent'), MainComponent);
Registry.registerReducer(prefixNS('state'), combineReducers(reducers));

// function todoItemDialogHook(ctx) {
//     console.log("DIALOG_HOOK", ctx);
//     const value = ctx.getValue("cdbpcs_project.project_name");
//     if (value.startsWith("P")) {
//         ctx.preventSubmit();
//     } else {
//         ctx.allowSubmit();
//     }
// }
// will register the dialog hook under tr-webapp-test-web-todoItemDialogHook
//Registry.registerFunction(prefixNS("todoItemDialogHook"), todoItemDialogHook);


export default {
    MainComponent
};
