import React, {useState} from "react";

export function TodoInput(props) {
    const {handleAddTask} = props
    const [inputValue, setInputValue] = React.useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleOnClick = () => {
        if (!inputValue) {return}
        handleAddTask(inputValue)
        setInputValue('')
    }

    return(
        <div className="input-container">
            <input placeholder='Add task' value={inputValue} onChange={handleInputChange}/>
            <button onClick={handleOnClick} className="input-button">
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}