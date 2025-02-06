import { useState, useEffect } from 'react'
import './styles.css'
import {Header} from './components/Header.jsx'
import {Tabs} from "./components/Tabs.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {TodoInput} from "./components/TodoInput.jsx";

function App() {

    const [tasks, setNewTasks] = useState([{input: 'Enter your firs task!', completed: false },]);
    const [selectedTab, setSelectedTab] = useState('All');

    function handleAddTask(newTask)  {
        const newTaskList = {
            input: newTask,
            completed: false
        }
        setNewTasks([...tasks, newTaskList]);
    }

    const handleRemoveTask = (index) => {
        let newTaskList = tasks.filter((task, taskIndex) => {
            return taskIndex !== index
        });
        setNewTasks(newTaskList);
    }

    const handleEndTask = (index) => {
        let newTaskList = tasks.map((task, taskIndex) => {
            return(
                taskIndex === index ? {...task, completed: true } : task
            )}
        )
        setNewTasks(newTaskList);
    }

    /*
    function handleSaveData(currTasks) {
        localStorage.setItem('todo-app', JSON.stringify({ tasks: currTasks }))
    }

    useEffect(() => {
        if (!localStorage || !localStorage.getItem('todo-app')) { return }       PREGUNRARLE A ALGUN NIGGA QUE SEPA POR QUE NO FUNCIONA.
        console.log('useffect');

        let db = JSON.parse(localStorage.getItem('todo-app'))
        setNewTasks(db.tasks)
    }, []); */

  return (
    <>
      <Header tasks={tasks} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} tasks={tasks}/>
      <TodoList handleEndTask={handleEndTask} handleRemoveTask={handleRemoveTask} tasks={tasks} selectedTab={selectedTab}/>
      <TodoInput handleAddTask={handleAddTask}/>
    </>
  )
}

export default App
