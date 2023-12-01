import { useState, useEffect } from "react";

export const useTasks = () => {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem("tasks")) || []
	);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	const removeTask = (id) => {
		setTasks((tasks) => tasks.filter((task) => task.id !== id));
	};

	const setAllDone = () => {
		setTasks((tasks) =>
			tasks.map((task) => ({
				...task,
				done: true,
			}))
		);
	};



	return { tasks, removeTask, setAllDone };
};
