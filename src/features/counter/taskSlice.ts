import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InisialTaskState {
    tasks: ITask[];
}

const initialState : InisialTaskState = {
    tasks:[
        {
        id:0,
        title:"fbvzdf ",
        description:" zzzzzzzzzzzzzzzzzzzz",
        dueDate:"2025-06-20",
        isCompleted:false,
        priority: "High",
    },
        {
        id:0,
        title:"Arafat ",
        description:" zzzzzzzzzzzzzzzzzzzz",
        dueDate:"2025-06-20",
        isCompleted:false,
        priority: "High",
    }
    ]
};

// Define the initial state using that type
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
});


export default taskSlice.reducer; 