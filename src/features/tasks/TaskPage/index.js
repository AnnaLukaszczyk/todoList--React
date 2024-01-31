import Section from "../../../common/Section/index.js";
import Header from "../../../common/Header/index.js";
import Container from "../../../common/Container/index.js";
import { useParams } from "react-router-dom/cjs/react-router-dom.js";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice.js";

function TaskPage() {
	const { id } = useParams();
	const task = useSelector((state) => getTaskById(state, id));

	return (
		<Container>
			<Header title="Szczegóły zadania" />
			<Section title={task ? task.content : "Nie znaleziono zadania 😢"} body={!!task && (<><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</>)} />
		</Container>
	);
}

export default TaskPage;
