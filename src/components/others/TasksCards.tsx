function TasksCards() {
  return (
    <div className="mt-10 flex gap-5">
      <div className="rounded-xl py-8 px-5 bg-emerald-600 w-[45%]">
          <h2 className=" font-semibold ">0</h2>
          <h3 className="text-xl font-medium ">New Task</h3>
      </div>
      <div className="rounded-xl py-8 px-5 bg-red-500 w-[45%]">
          <h2 className=" font-semibold ">0</h2>
          <h3 className="text-xl font-medium ">New Task</h3>
      </div>
      <div className="rounded-xl py-8 px-5 bg-yellow-500 w-[45%]">
          <h2 className=" font-semibold ">0</h2>
          <h3 className="text-xl font-medium ">New Task</h3>
      </div>
      <div className="rounded-xl py-8 px-5 bg-blue-500 w-[45%]">
          <h2 className=" font-semibold ">0</h2>
          <h3 className="text-xl font-medium ">New Task</h3>
      </div>
    </div>
  )
}

export default TasksCards