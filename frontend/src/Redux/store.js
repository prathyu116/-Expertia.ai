import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { jobtReducer } from "./Job/Reducer";
const rootReducer = combineReducers({
  AllJoobs: jobtReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

