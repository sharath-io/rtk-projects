import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(setQuery(input))
    setInput("");
  };
  
  return (
    <form
      onSubmit={submitForm}
      className="text-white flex gap-5 py-10 px-14 bg-gray-900"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        className="rounded px-6 py-3 w-full border-2 text-xl outline-none"
      />
      <button
        type="submit"
        className="active:scale-95 cursor-pointer rounded px-6 py-3 border-2 text-xl"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
