import Form from "./Form/index.js";
import TaskList from "./TaskList/index.js";
import Buttons from "./Buttons/index.js";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks.js";

function Tasks() {
	const {
		removeTask,
		setAllDone,
	} = useTasks();

	return (
		<Container>
			<Header title="Lista zadań" />

			<Section
				title="Dodaj nowe zadanie"
				body={<Form />}
			/>

			<Section
				title="Lista zadań"
				body={
					<TaskList
						removeTask={removeTask}
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
