import "./style.css";
import { List, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
	<List>
		{tasks.map((task) => (
			<Item
				key={task.id}
				hidden={task.done && hideDone}
				>
				<Button
					toggleDone
					onClick={() => toggleTaskDone(task.id)}>
					<i
						className={`fa-solid fa-check${
							task.done ? "" : " task__buttonIcon"
						}`}></i>
				</Button>
				<Content
					done={task.done}>
					{task.content}
				</Content>
				<Button
					remove
					onClick={() => removeTask(task.id)}>
					<i className="fa-regular fa-trash-can"></i>
				</Button>
			</Item>
		))}
	</List>
);

export default Tasks;
