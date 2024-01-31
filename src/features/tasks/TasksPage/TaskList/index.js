import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button, Icon } from "./styled";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { selectTasksByQuery, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routes";


const TaskList = () => {
	const location = useLocation();
	const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
	const tasks = useSelector(state => selectTasksByQuery(state, query));
	const hideDone = useSelector(selectHideDone);
	const dispatch = useDispatch();
	
	return (
		<List>
		{tasks.map((task) => (
			<Item key={task.id} hidden={task.done && hideDone}>
				<Button $toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
					<Icon icon={faCheck} $undone={!task.done} />
				</Button>
				<Content $done={task.done}>
					<Link to={toTask({ id: task.id })}>
						{task.content}
						</Link>
						</Content>
				<Button $remove onClick={() => dispatch(removeTask(task.id))}>
					<Icon icon={faTrashCan} />
				</Button>
			</Item>
		))}
	</List>
	)
};

export default TaskList;
