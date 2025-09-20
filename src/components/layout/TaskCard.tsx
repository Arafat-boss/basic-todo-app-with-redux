
// import { Checkbox } from "@/components/vi/checkbox";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import type { ITask } from "@/types";
import { cn } from "@/lib/utils";

interface IProps{
  task?:ITask
}


export default function TaskCard({task}: IProps) {
  return (
    <div className="border px-5 py-3 rounded-md mt-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className={cn("size-3 rounded-full",{
            "bg-red-500": task?.priority === "High",
            "bg-yellow-500": task?.priority === "Medium",
            "bg-green-500": task?.priority === "Low", 
          })}></div>
          <h1 className="font-semibold">{task?.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <Trash2 size={16} />
          </Button>
          <Checkbox />
        </div>
      </div>
      <p className="mt-5">{task?.description}</p>
      {/* Enter picture */}
    </div>
  );
}
