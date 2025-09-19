import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tasks:{
        id:0,
        title:"fbvzdf ",
        description:" zzzzzzzzzzzzzzzzzzzz",
        dueDate:"2025-06-20",
        isCompleted:false,
        priority: "High",
    }
};

// Define the initial state using that type
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
});


export default taskSlice.reducer; 