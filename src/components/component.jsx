import React, {useState, useEffect} from 'react';
import TaskInput from './TaskInput';
import TaskFilters from './TaskFilters';
import TaskList from './TaskList';
import Statistics from './Statistics';

function Component(){
    const [tasks ,setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks")

        return savedTasks ? JSON.parse(savedTasks) : []
    });

    const [editedTask ,setEditingTasks] = useState(null);

    const [taskSearchInput, setTaskSearchInput] = useState("");

    const [filter, setFilter] = useState("All");

    useEffect(() => {
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }, [tasks]);

    function doneTasks(id){
        const newTasks = tasks.map(task =>
            task.id === id
            ? { ...task, done: !task.done }
            : task
        )
        setTasks(newTasks)
    }

function addTask(taskInput, priorityLevel) {
    const date = new Date()
    if (taskInput.trim() !== "") {
        const newTasks = [
            ...tasks,
            {
                id: Date.now(),
                text: taskInput,
                done: false,
                priority: priorityLevel,
                creationDate: date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear()
            }
        ];
        setTasks(newTasks);
    }
}

    function delTask(deletedTask){
        const newTasks = tasks.filter((task) => task.id !== deletedTask.id);

        setTasks(newTasks);
    }

    function editTask(id,text){
        if(editedTask === null){
            setEditingTasks(id);
        }
        if(editedTask === id){
            if(text.trim() !== ""){
                setEditingTasks(null);
            }else{
                changeText(id,"Cannot have an empty task!")
            }
        }
    }

    function changeText(id, newText){
        setTasks(tasks.map(task => 
            task.id === id
            ? {...task, text: newText}
            : task
        ));
    }

    const filteredTasks = [...tasks]
        .filter(task => filter === "All" ? true : (filter === "Done" ? task.done : !task.done))
        .filter(task => task.text.toLowerCase().includes(taskSearchInput.toLowerCase()))
        .sort((a,b) => a.priority - b.priority)
        

    return(
        <div className='app-container'>
            <div className='title-container'>
            <h1>To-Do List</h1>
            </div>
            <TaskInput
                onAddTask={addTask}
            />
            <TaskFilters
                filter={filter}
                setFilter={setFilter}
                taskSearchInput={taskSearchInput}
                setTaskSearchInput={setTaskSearchInput}
            />
            <TaskList
                filteredTasks={filteredTasks}
                editedTask={editedTask}
                doneTasks={doneTasks}
                changeText={changeText}
                editTask={editTask}
                delTask={delTask}
            />
            <Statistics tasks={tasks}/>
        </div>);
}
export default Component;