// Slice allow you to manage state
// the slice allows you define an initial state and also define reducers that handle different functions
import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [{id:1, text:"hello"}]
};

console.log(initialState);
export const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer
