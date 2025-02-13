import { React, useState, useEffect } from 'react'
import './styles.css'
import {Header} from './components/Header.jsx'
import {Tabs} from "./components/Tabs.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {TodoInput} from "./components/TodoInput.jsx";

function App() {

    const [tasks, setNewTasks] = useState([{input: 'Enter your firs task!', completed: false, isEditing: false },]);
    const [selectedTab, setSelectedTab] = useState('All');

    function handleAddTask(newTask)  {
        const newTaskList = {
            input: newTask,
            completed: false,
            isEditing: false
        }
        setNewTasks([...tasks, newTaskList]);
        handleSaveData(newTaskList);
    }

    const handleRemoveTask = (index) => {
        let newTaskList = tasks.filter((task, taskIndex) => {
            return taskIndex !== index
        });
        setNewTasks(newTaskList);
        handleSaveData(newTaskList);
    }

    const handleEndTask = (index) => {
        let newTaskList = tasks.map((task, taskIndex) => {
            return(
                taskIndex === index ? {...task, completed: true } : task
            )}
        )
        setNewTasks(newTaskList);
        handleSaveData(newTaskList);
    }

    const handleEditTask = (index, newText) => {
        const newTaskList = tasks.map((task, i) => (i === index ? { ...task, input: newText } : task))
        setNewTasks(newTaskList);
        handleSaveData(newTaskList);
    };


    function handleSaveData(currTasks) {
        localStorage.setItem('todo-app', JSON.stringify({ tasks: currTasks }))
    }

    useEffect(() => {
        if (!localStorage || !localStorage.getItem('todo-app')) { return }
        let db = JSON.parse(localStorage.getItem('todo-app'))
        setNewTasks(db.tasks)
    }, [])

  return (
    <>
      <Header tasks={tasks} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} tasks={tasks}/>
      <TodoList handleEditTask={handleEditTask} handleEndTask={handleEndTask} handleRemoveTask={handleRemoveTask} tasks={tasks} selectedTab={selectedTab}/>
      <TodoInput handleAddTask={handleAddTask}/>
    </>
  )
}

export default App
