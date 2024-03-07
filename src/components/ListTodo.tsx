import { FaRegClock } from "react-icons/fa";
import { Todo } from "../store/types";
import moment from "moment";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/actions";
interface ListTodoProps {
  data: Todo;
}
function ListTodo(props: ListTodoProps): JSX.Element {
  const { data } = props;
  const dispatch = useDispatch();
  const onRemoveTodo = () => {
    dispatch(removeTodo(data.id) as any);
    alert("Todo removed successfully");
  };
  return (
    <div
      onClick={onRemoveTodo}
      className="w-full rounded-xl p-4 bg-blue-400 flex flex-col gap-2 cursor-pointer"
    >
      <p className="text-sm text-white font-semibold">{data?.title}</p>
      <div className="flex items-center gap-2">
        <FaRegClock className="text-white" />
        <p className="text-sm text-white ml-2">
          {moment(data?.date).format("DD MMM YYYY")}, {data.startTime} -{" "}
          {data.endTime}
        </p>
      </div>
      <p className="text-sm text-white">{data?.description}</p>
    </div>
  );
}

export default ListTodo;
