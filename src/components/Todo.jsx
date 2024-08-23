// useSeclector is responsible for reading
import { useSelector ,useDispatch} from "react-redux";;
import { removeTodo } from "../features/todo/todoSlice";
const Todo = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex gap-2">
          <h1>{todo.text}</h1>
          <button
            type="submit"
            className="text-white  border-0 bg-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={()=>dispatch(removeTodo(todo.id))}
          >
            Remove Todo
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
