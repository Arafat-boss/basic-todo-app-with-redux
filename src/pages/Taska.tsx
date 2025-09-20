import { selectFillteredTasks, selectTasks } from "@/features/counter/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Taska() {

  // const {} = useAppSelector((state) => state.todo.tasks)
  const todo = useAppSelector(selectTasks);
  const filltered = useAppSelector(selectFillteredTasks);
  console.log(todo);
  console.log(filltered);


  return (
    <div>Taska</div>
  )
}
