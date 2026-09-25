function TaskItem({task, editedTask, doneTasks, changeText, editTask, delTask}){
    return(
    <div>
        <div className={task.done  ? "todo-list-item-marked" : "todo-list-item"}>
        <input type='checkbox' className='checkbox' checked={task.done} onChange={() => doneTasks(task.id)}></input>
        <div>{editedTask === task.id ? <input className='text-editing-input' value={task.text} onChange={(e) => changeText(task.id, e.target.value)} onKeyDown={(event) => {
            if(event.key === "Enter"){
                editTask(task.id, task.text)
            }
            }}/> : <h2 className={task.done === true ? 'done-text' : ''}>{task.text}</h2>}</div>
            <button className='text-change-button' onClick={() => editTask(task.id, task.text)}>[Edit]</button>
            <button className='delete-button' onClick={() => delTask(task)}><img src='./X.png'></img></button>
        </div>
        <div>
            <h2>Created at: {task.creationDate}</h2>
        </div>
    </div>
)}

export default TaskItem;