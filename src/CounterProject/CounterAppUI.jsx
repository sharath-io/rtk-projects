import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  resetCounter,
  decrementCounter,
} from "./features/counter/counterSlice";

const CounterAppUI = () => {
  const count = useSelector((state) => state.counter.value);
  const action = useSelector((state) => state.counter.performedAction);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter("increment the value by 1"));
  };

  const handleDecrement = () => {
    dispatch(decrementCounter("decrement the value by 1"));
  };

  const handleReset = () => {
    dispatch(resetCounter("reset the value to 0"));
  };
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-10">
      <h1 className="text-2xl">CounterApp </h1>
      <h2>Counter : {count}</h2>
      <h3>Perfomed Action : {action}</h3>

      <div className="flex gap-5">
        <button
          className="p-2 border cursor-pointer bg-black text-white rounded-md hover:bg-white hover:text-black"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="p-2 border cursor-pointer bg-black text-white rounded-md hover:bg-white hover:text-black"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="p-2 border cursor-pointer bg-black text-white rounded-md hover:bg-white hover:text-black"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterAppUI;
