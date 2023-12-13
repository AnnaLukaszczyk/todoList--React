export const saveTasksInLocalStorage = (tasks) =>
	localStorage.setItem("tasks", JSON.stringify(tasks));
