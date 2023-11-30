import { useSelector } from "react-redux";
import Form from "./Form/index.js";
import TaskList from "./TaskList/index.js";
import Buttons from "./Buttons/index.js";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks.js";
import { selectTasks } from "./tasksSlice";

function Tasks() {
	const {
		// tasks,
		removeTask,
		toggleTaskDone,
		setAllDone,
		addNewTask,
	} = useTasks();

	const { tasks } = useSelector(selectTasks);

	return (
		<Container>
			<Header title="Lista zadań" />

			<Section
				title="Dodaj nowe zadanie"
				body={<Form addNewTask={addNewTask} />}
			/>

			<Section
				title="Lista zadań"
				body={
					<TaskList
						removeTask={removeTask}
						toggleTaskDone={toggleTaskDone}
					/>
				}
				extraHeaderContent={
					<Buttons
						setAllDone={setAllDone}
					/>
				}
			/>
		</Container>
	);
}

export default Tasks;
