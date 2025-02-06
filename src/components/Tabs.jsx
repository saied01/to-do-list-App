export function Tabs(props) {
    const {tasks, selectedTab, setSelectedTab} = props
    const tabs = ['All', 'Open', 'Completed']

    return(
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {

                const numberOfTasks = tab === 'All' ?
                    tasks.length : tab === 'Open' ?
                        (tasks.filter(task => !task.completed).length) : (tasks.filter(task => task.completed).length)

                return (
                <button onClick={() => setSelectedTab(tab)} key={tabIndex} className={"tab-button " + (tab === selectedTab ? "tab-selected" : ' ')}>
                    <h4> {tab} <span>({numberOfTasks})</span></h4>
                </button>)
            })}

        </nav>
    )
}