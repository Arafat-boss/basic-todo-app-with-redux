import TaskCard from "@/components/layout/TaskCard";
import { selectFillteredTasks, selectTasks } from "@/features/counter/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Taska() {

  // Access the Redux state using the custom hook
  const todo = useAppSelector(selectTasks);
  const filltered = useAppSelector(selectFillteredTasks);
  console.log(todo);
  console.log(filltered);


  return (
    <div>
      <TaskCard></TaskCard>


    </div>
  )
}
