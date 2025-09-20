import { selectTasks } from "@/features/counter/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Taska() {

  // const {} = useAppSelector((state) => state.todo.tasks)
  const todo = useAppSelector(selectTasks);
  console.log(todo);

  return (
    <div>Taska</div>
  )
}
