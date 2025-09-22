
// import { Checkbox } from "@/components/vi/checkbox";
import { Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import type { ITask } from "@/types";
import { cn } from "@/lib/utils";
import { toggleComoletedState } from "@/features/counter/taskSlice";
import { useDispatch } from "react-redux";

interface IProps{
  task?:ITask
}


export default function TaskCard({task}: IProps) {

  const dispatch = useDispatch();

  return (
    <div className="border px-5 py-3 rounded-md mt-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className={cn("size-3 rounded-full",{
            "bg-red-500": task?.priority === "high",
            "bg-yellow-500": task?.priority === "medium",
            "bg-green-500": task?.priority === "low", 
          })}></div>
          <h1 className="font-semibold">{task?.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <Trash2 size={16} />
          </Button>
          <Checkbox onClick={()=> dispatch(toggleComoletedState(task.id))} />
        </div>
      </div>
      <p className="mt-5">{task?.description}</p>
      {/* Enter picture */}
    </div>
  );
}
