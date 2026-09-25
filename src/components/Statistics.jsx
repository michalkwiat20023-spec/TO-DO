function Statistics({tasks}){
    return(
        <div>
            <h2>Total: {tasks.length}</h2>
            <h2>In Progress: {tasks.filter(task => !task.done).length}</h2>
            <h2>Done: {tasks.filter(task => task.done).length}</h2>
        </div>
    )
}

export default Statistics;