export const getExampleTasks = async () => {
	const response = await fetch("/todoList--React/exampleTasks.json");

	if (!response.ok) {
		new Error(response.statusText);
	}
	return await response.json();
};
