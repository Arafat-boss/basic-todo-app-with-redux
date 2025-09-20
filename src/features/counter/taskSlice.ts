import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";


// Define a type for the slice state
interface InisialTaskState {
    tasks: ITask[];
    fillteredTasks: "All" | "Completed" | "Uncompleted";
}


// Define the initial state using that type
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
    ],
    fillteredTasks:"All",
};

// Define the initial state using that type
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
});

// Selector
export const selectTasks =(state: RootState) => {
    return state.todo.tasks;
}

export const selectFillteredTasks =(state: RootState) => {
    return state.todo.fillteredTasks;
}


// Action creators are generated for each case reducer function
// export const {  } = taskSlice.actions;
export default taskSlice.reducer; 