import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
	<ul className="tasks">
		{tasks.map((task) => (
			<li
				key={task.id}
				className={`task${task.done && hideDone ? " tasks__itemHidden" : ""}`}>
				<button className="task__button">
					<i
						className={`fa-solid fa-check${
							task.done ? "" : " task__buttonIcon"
						}`}></i>
				</button>
				<span
					className={`task__content${task.done ? " task__content--done" : ""}`}>
					{task.content}
				</span>
				<button 
					className="task__button task__button--remove"
					onClick={() => removeTask(task.id)}>
					<i className="fa-regular fa-trash-can"></i>
				</button>
			</li>
		))}
	</ul>
);

export default Tasks;
