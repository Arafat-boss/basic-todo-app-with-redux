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
  tasks: [
      {
    id: "PmR__HBo4hq_x9eI4bE30",
    isCompleted: false,
    title: "Complete project proposal",
    description: "Write and submit the project proposal for the new client",
    priority: "medium",
    dueDate: "2025-01-14T18:00:00.800Z",
  },
  {
    id: "LkF__GHp9tr_y8eO2cD12",
    isCompleted: true,
    title: "Team meeting",
    description: "Weekly sync-up with the development team",
    priority: "low",
    dueDate: "2025-02-02T10:30:00.000Z",
  },
  {
    id: "ZxQ__MNk7pw_t4dR6fH93",
    isCompleted: false,
    title: "Fix UI bugs",
    description: "Resolve the navbar and footer responsiveness issues",
    priority: "high",
    dueDate: "2025-01-25T15:00:00.000Z",
  },
  {
    id: "YbT__JKl2qw_s1vF8aP67",
    isCompleted: false,
    title: "Prepare presentation",
    description: "Create slides for the upcoming client demo",
    priority: "medium",
    dueDate: "2025-02-10T09:00:00.000Z",
  },
  ],
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
