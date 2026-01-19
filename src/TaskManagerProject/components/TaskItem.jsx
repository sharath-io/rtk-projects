import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../features/task/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-6 items-center bg-gray-100 px-4 py-2 mb-5">
      <p className={`font-medium ${task.isCompleted ? "line-through" : ""}`}
      >
        {task.text}
      </p>
      <button onClick={() => dispatch(toggleTask(task.id))} className="border p-2 rounded-md bg-purple-300 text-white">
        {task.isCompleted ? "UnDone" : "Done"}
      </button>
      <button onClick={() => dispatch(deleteTask(task.id))} className="delete-btn border p-2  rounded-md bg-purple-300 text-white">Delete</button>
    </div>
  );
};

export default TaskItem;
