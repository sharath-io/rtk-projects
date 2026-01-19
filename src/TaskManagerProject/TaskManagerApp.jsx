import { Provider } from "react-redux";
import { store } from "./store/store";
import TaskManagerUI from "./TaskManagerUI";

const TaskManagerApp = () => {
  return (
    <div>
      <Provider store={store}>
        <TaskManagerUI />
      </Provider>
    </div>
  );
};

export default TaskManagerApp;
