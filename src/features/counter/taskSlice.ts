import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
// import { p } from "node_modules/react-router/dist/development/index-react-server-client-BeVfPpWg.d.mts";
// import { is } from "date-fns/locale";
import { v4 as uuidv4 } from 'uuid';

// Define a type for the slice state
interface InisialTaskState {
  tasks: ITask[];
  fillteredTasks: "All" | "Completed" | "Uncompleted";
}

// Define the initial state using that type
const initialState: InisialTaskState = {
  tasks: [],
  fillteredTasks: "All",
};

// Define the initial state using that type
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {

      const id =uuidv4();
      
      const taskData ={
        ...action.payload,
        id,
        isCompleted: false,
      }

      state.tasks.push(taskData);
    }
  },
});

// Selector
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFillteredTasks = (state: RootState) => {
  return state.todo.fillteredTasks;
};

export const { addTask } = taskSlice.actions;

// Action creators are generated for each case reducer function
// export const {  } = taskSlice.actions;
export default taskSlice.reducer;
