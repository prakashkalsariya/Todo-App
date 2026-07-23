import { combineReducers } from "redux";

import { taskListReducer } from "./taskList";

const rootReducer = combineReducers({
  taskList: taskListReducer,
});

export default rootReducer;
