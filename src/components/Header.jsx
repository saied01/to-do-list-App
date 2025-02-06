export function Header(props) {
    const { tasks } = props
    const uncompleted = tasks.filter((task) => !task.completed).length

    const isTasksPlural = uncompleted !== 1
    const taskOrTasks = isTasksPlural ? 'tasks' : 'task';

    return(
        <header>
            <h1>You have {uncompleted} open {taskOrTasks}!</h1>
        </header>
    )
}