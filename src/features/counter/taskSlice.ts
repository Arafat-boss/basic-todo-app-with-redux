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
        title:"Initialize Forntend Project",
        description:"Create a new React project using Vite and set up the initial file structure. Install necessary dependencies such as React Router for routing and Redux Toolkit for state management. Set up a GitHub repository to host the project code.",
        dueDate:"2025-06-20",
        isCompleted:false,
        priority: "High",
    },
        {
        id:0,
        title:"GitHub Repository",
        description:"Create a new repository on GitHub to host the project code and push the initial commit. Updated description here. Adding more details to the task description. This task involves setting up the repository with a README file, .gitignore, and any necessary licenses.",
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