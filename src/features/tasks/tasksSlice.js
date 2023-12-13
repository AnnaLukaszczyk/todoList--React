import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
	name: "tasks",
	initialState: {
		tasks: [],
		hideDone: false,
	},
	reducers: {
		addTask: ({ tasks }, { payload: task }) => {
			tasks.push(task);
		},
		toggleHideDone: (state) => {
			state.hideDone = !state.hideDone;
		},
		setAllDone: ({ tasks }) => {
			for (const task of tasks) {
				task.done = true;
			}
		},
		toggleTaskDone: ({ tasks }, { payload: taskId }) => {
			const index = tasks.findIndex(({ id }) => id === taskId);
			tasks[index].done = !tasks[index].done;
		},
		removeTask: ({ tasks }, { payload: taskId }) => {
			const index = tasks.findIndex(({ id }) => id === taskId);
			tasks.splice(index, 1);
		},
		fetchExampleTasks: () => { },
		setTasks: (state, {payload: tasks}) => {
			state.tasks = tasks;
		},
	},
});

export const {
	addTask,
	toggleHideDone,
	setAllDone,
	toggleTaskDone,
	removeTask,
	fetchExampleTasks,
	setTasks,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;

export default tasksSlice.reducer;
