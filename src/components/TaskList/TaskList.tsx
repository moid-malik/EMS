const TaskList = () => {
  return (
    <div className="mt-10 flex flex-nowrap h-[55%] py-6 overflow-x-auto gap-5 tasklist">
      <div className="h-full flex-shrink-0 bg-zinc-700 rounded-xl w-[300px] py-5 px-4">
        <div className="text-sm  w-full flex justify-between items-center tracking-tight">
          <span className="bg-red-600 py-1 px-3 font-[300] rounded">
            High
          </span>
          <p>20 feb 2024</p>
        </div>
        <div className="flex flex-col mt-5 w-full gap-4">
        <h2 className="text-2xl font-semibold">Make a Youtube video.</h2>
        <p className="text-sm leading-none ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit ipsa, accusantium totam saepe illum eaque doloremque voluptas, enim porro deleniti, consectetur quis nulla odit ea..</p>
        </div>
      </div>
      
    </div>
  );
};

export default TaskList;
