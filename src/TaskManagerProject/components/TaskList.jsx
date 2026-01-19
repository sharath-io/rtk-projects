import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { items, filters } = useSelector((state) => state.tasks);
  const filtered =
    filters === "completed" ? items.filter((item) => item.isCompleted) : items;
  return (
    <ul className="item-container">
      {filtered.map((item) => (
        <li key={item.id}>
          <TaskItem task={item} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
