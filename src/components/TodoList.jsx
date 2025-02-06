import {useState} from "react";
import {TodoInput} from "./TodoInput.jsx";
import {TodoCard} from "./TodoCard.jsx";

export function TodoList(props) {
    const {tasks, selectedTab} = props

    const [task, setTask] = useState(tasks[0])
    
    const filterList = selectedTab === 'All' ?
        tasks : selectedTab === 'Completed' ?
            tasks.filter(task => task.completed) :
            tasks.filter(task => !task.completed)

    return(
        <>
            {filterList.map((task, taskIndex) => {return(
                <TodoCard key={taskIndex} taskIndex={taskIndex} {...props} task={task}/>
            )
            })}
        </>
    )
}