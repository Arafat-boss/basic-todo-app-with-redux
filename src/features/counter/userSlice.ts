import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import reducer from "./taskSlice";
import { act } from "react";
import type { RootState } from "@/redux/store";


interface IUser {
    id: string;
    name: string;
}

const initialState = {
    users: [] as IUser[],
};

type DraftUser =  Pick<IUser, 'name' >;

const createUser =(userData:DraftUser):IUser=> {
   return { id: nanoid(), ...userData };
}

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // add user
    addUser: (state, action: PayloadAction<IUser>) => {
        const userData = createUser(action.payload);
        state.users.push(userData);
    },
    // delete user
    removedUser: (state, action: PayloadAction<string>)=>{
        state.users = state.users.filter((user)=>
         user.id !== action.payload
        )
    },
}});

export const selectUsers = (state: RootState)=> state.user.users;
export const { addUser, removedUser } = userSlice.actions;
export default userSlice.reducer;