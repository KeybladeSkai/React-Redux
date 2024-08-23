import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  console.log(input);

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Enter a Todo"
          className="bg-gray-800 rounded border border-gray-700 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white  border-0 bg-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
