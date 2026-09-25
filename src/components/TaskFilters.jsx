function TaskFilters({filter, setFilter, taskSearchInput, setTaskSearchInput}){
    return(
        <>
            <div className='filter-button-container'>
                <button className={filter === "All" ? 'filter-button-marked' : 'filter-button'} onClick={() => setFilter("All")}>All</button>
                <button className={filter === "In Progress" ? 'filter-button-marked' : 'filter-button'} onClick={() => setFilter("In Progress")}>In Progress</button>
                <button className={filter === "Done" ? 'filter-button-marked' : 'filter-button'} onClick={() => setFilter("Done")}>Done</button>
            </div>
            <div className='title-container'>
                <input className='search-input' placeholder="Filter your tasks..." value={taskSearchInput} onChange={(e) => setTaskSearchInput(e.target.value)}/>
            </div>
        </>
    );
}

export default TaskFilters;