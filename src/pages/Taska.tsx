import { AddTaskModal } from "@/components/layout/Task/AddTaskModal";
import TaskCard from "@/components/layout/Task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  // selectFillteredTasks,
  selectTasks,
} from "@/features/counter/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Taska() {
  // Access the Redux state using the custom hook
  const todo = useAppSelector(selectTasks);
  // const filltered = useAppSelector(selectFillteredTasks);
  // console.log(todo);
  // console.log(filltered);

  return (
    <div>
     <div className="flex justify-between items-center">
       <h1>Task</h1>
       <Tabs>
         <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
       </Tabs>
      <AddTaskModal></AddTaskModal>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
        {todo.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
}
