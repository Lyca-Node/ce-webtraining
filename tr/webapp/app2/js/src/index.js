import {Registry} from 'cs-web-components-base';
import {prefixNS} from './helpers';
import reducer from './reducers/reducers';
import MainComponent from './containers/MainComponent';
import DialogTable from './components/DialogTable';
import saga from './sagas';

Registry.registerComponent(prefixNS('MainComponent'), MainComponent);
Registry.registerComponent(prefixNS('DialogTable'), DialogTable);
Registry.registerReducer(prefixNS('reducer'), reducer);
Registry.registerSaga(saga);

// function projectDialogHook(ctx) {
//     const value = ctx.getValue("cdbpcs_project.project_name");
//     if (value.startsWith("P")) {
//         ctx.preventSubmit();
//     } else {
//         ctx.allowSubmit();
//     }
// }

// Registry.registerFunction(prefixNS("projectDialogHook"), projectDialogHook);

export default {
    MainComponent
};
