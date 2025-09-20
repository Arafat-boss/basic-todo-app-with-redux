import TaskCard from "@/components/layout/Task/TaskCard";
import { selectFillteredTasks, selectTasks } from "@/features/counter/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Taska() {

  // Access the Redux state using the custom hook
  const todo = useAppSelector(selectTasks);
  const filltered = useAppSelector(selectFillteredTasks);
  console.log(todo);
  console.log(filltered);


  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5">
    {
      todo.map((task)=><TaskCard key={task.id} task={task}></TaskCard>)
    }

    </div>
  )
}
