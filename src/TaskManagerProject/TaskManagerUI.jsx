import FilterTask from "./components/FilterTask";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

const TaskManagerUI = () => {
  return (
    <div className="flex flex-col items-center mt-15">
      <h1 className="text-2xl mb-5">Task Manager </h1>
      <AddTask />
      <FilterTask />
      <TaskList />
    </div>
  );
};

export default TaskManagerUI;
