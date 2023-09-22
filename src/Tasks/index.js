import "./style.css"

const Tasks = ({tasks, hideDoneTasks}) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={task.id}
            className={`task${task.done && hideDoneTasks ? " tasks__itemHidden" : ""}`}>
               <button className="task__button js-done">
					<i className={`fa-solid fa-check${task.done ? "" : " task__buttonIcon"}`}></i>
				</button>
				<span className={`task__content${task.done ? " taskDone" : ""}`}>{task.content}</span>
				<button className="task__button task__button--remove js-remove">
					<i className="fa-regular fa-trash-can"></i>
				</button> 
            </li>
        ))}
    </ul>
)

export default Tasks;