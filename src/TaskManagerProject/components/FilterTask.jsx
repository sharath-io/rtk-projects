import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/task/taskSlice";

const FilterTask = () => {
  const filter = useSelector((state) => state.tasks.filters);
  const dispatch = useDispatch();
  return (
    <div className="my-5">
      <button onClick={() => dispatch(setFilter("all"))} 
        className={`border p-2 mx-5 rounded-md text-white ${filter ==="all" ? "bg-green-800" : "bg-purple-300" }`}
        >All</button>
      <button onClick={() => dispatch(setFilter("completed"))}
      className={`border p-2 mx-5 rounded-md text-white ${filter ==="completed" ? "bg-green-800" : "bg-purple-300" }`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTask;
