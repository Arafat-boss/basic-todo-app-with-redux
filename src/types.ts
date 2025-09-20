
export interface ITask  {
        id:number,
        title:string,
        description:string,
        dueDate:string,
        isCompleted:boolean,
        priority: "Low" | "Medium" | "High",
}