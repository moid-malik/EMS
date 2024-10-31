import Header from "../others/Header"
import TasksCards from "../others/TasksCards"
import TaskList from "../TaskList/TaskList"

function EmployeeDashboard() {
  return (
    <div className="h-screen p-8">
    <Header />
    <TasksCards />
    <TaskList />
    </div>
  )
}

export default EmployeeDashboard