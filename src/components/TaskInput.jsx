import { useState } from "react";

function TaskInput({onAddTask}){
    const [priorityLevel, setPriorityLevel] = useState("");

    const [taskInput, setTaskInput] = useState("");

    function handleAddTask(){
        if (priorityLevel !== ""){
            onAddTask(taskInput, priorityLevel);
            setTaskInput("");
            setPriorityLevel("");
        }else{
            alert("Choose Priority Level")
        }
    }

    return(
        <div className='input-container'>
            <div>
                <input type='radio' name='priority' onChange={() => setPriorityLevel(0)}/>
                <input type='radio' name='priority' onChange={() => setPriorityLevel(1)}/>
                <input type='radio' name='priority' onChange={() => setPriorityLevel(2)}/>
            </div>
        <input placeholder='Your task...' id="taskInput" className='task-text-input' value={taskInput} onChange={(e) => setTaskInput(e.target.value)} onKeyDown={(event) => {
            if(event.key === "Enter"){
                handleAddTask()
            }
        }}/>
        </div>)
}

export default TaskInput;