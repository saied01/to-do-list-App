export function TodoCard(props) {
    const {task, handleRemoveTask, taskIndex, handleEndTask} = props



    return(
        <div className="card todo-item">
            <p>{task.input}</p>
            <div className="todo-buttons">
                <button disabled={task.completed} onClick={() => handleEndTask(taskIndex)}>
                    <h6>Done</h6>
                </button>
                <button onClick={() => handleRemoveTask(taskIndex)}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}