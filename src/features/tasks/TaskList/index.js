import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, Icon } from "./styled";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

const TaskList = () => {
	const {tasks, hideDone} = useSelector(selectTasks);
	const dispatch = useDispatch();
	return (
		<List>
		{tasks.map((task) => (
			<Item key={task.id} hidden={task.done && hideDone}>
				<Button $toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
					<Icon icon={faCheck} $undone={!task.done} />
				</Button>
				<Content $done={task.done}>{task.content}</Content>
				<Button $remove onClick={() => dispatch(removeTask(task.id))}>
					<Icon icon={faTrashCan} />
				</Button>
			</Item>
		))}
	</List>
	)
};

export default TaskList;
