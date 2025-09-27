import { AddTaskModal } from "@/components/layout/Task/AddTaskModal";
import TaskCard from "@/components/layout/Task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  // selectFillteredTasks,
  selectTasks,
  updateFilter,
} from "@/features/counter/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function Taska() {
  // Access the Redux state using the custom hook
  const todo = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  // const filltered = useAppSelector(selectFillteredTasks);
  // console.log(todo);
  // console.log(filltered);

  return (
    <div>
     <div className="flex justify-end items-center gap-5">
       <h1 className="mr-auto">Task</h1>
       <Tabs defaultValue="all" className="w-1/2">
         <TabsList>
          <TabsTrigger onClick={()=>dispatch(updateFilter("all"))} className="grid w-full grid-cols" value="all">All</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
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
