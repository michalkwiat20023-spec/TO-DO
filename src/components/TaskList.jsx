import TaskItem from "./TaskItem";

function TaskList({tasks, filteredTasks, editedTask, doneTasks, changeText, editTask, delTask}){
    return(
        <div className='list-item-container' id='list-item-container'>
            <h1>In Progress</h1>
            {filteredTasks.map((task) => (
                <TaskItem
                    task={task} 
                    key={task.id} 
                    editedTask={editedTask}
                    doneTasks={doneTasks}
                    changeText={changeText}
                    editTask={editTask}
                    delTask={delTask}
                />
            ))}
        </div>
    );
}
export default TaskList;