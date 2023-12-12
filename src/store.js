import { configureStore } from "@reduxjs/toolkit";
import { createSagaMiddleware } from "redux-saga";
import tasksReducer from "./features/tasks/tasksSlice";

export default configureStore({
	reducer: {
		tasks: tasksReducer,
	},
});
