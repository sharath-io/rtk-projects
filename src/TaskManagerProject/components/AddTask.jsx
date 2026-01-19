import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";

const AddTask = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(input));
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Enter task"
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border-2 rounded-md w-75"
      />
      <button type="submit" className="border p-2 mx-5 rounded-md bg-purple-300 text-white">Add</button>
    </form>
  );
};

export default AddTask;
