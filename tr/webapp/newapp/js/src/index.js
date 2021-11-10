import {Registry} from 'cs-web-components-base';
import {combineReducers} from 'cs-web-components-externals';
import {prefixNS} from './helpers';
import * as reducers from './reducers';
import MainComponent from './containers/MainComponent';

Registry.registerComponent(prefixNS('MainComponent'), MainComponent);
Registry.registerReducer(prefixNS('reducer'), combineReducers(reducers));


function projectDialogHook(ctx) {
  const value = ctx.getValue("cdbpcs_project.project_name");
  if (value.startsWith("P")) {
    ctx.preventSubmit();
  } else {
    ctx.allowSubmit();
  }
}
Registry.registerFunction(prefixNS("projectDialogHook"), projectDialogHook);

export default {
    MainComponent
};
