import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    filters: "all",
  },
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
            isCompleted: false,
          },
        };
      },
    },
    removeTask: (state, action) => {
      state.items.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.items.find((t) => t.id === action.payload);
      if (task) task.isCompleted = !task.isCompleted;
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { addTask, removeTask, toggleTask, deleteTask, setFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
