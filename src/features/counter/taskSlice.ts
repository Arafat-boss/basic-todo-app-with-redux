import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    tasks: []
};

// Define the initial state using that type
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
}}})