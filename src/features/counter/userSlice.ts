import reducer from "./taskSlice";


interface IUser {
    id: string;
    name: string;
    email: string;
}

const initialState = {
    users: [] as IUser[],
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // add user
    addUser: (state, action: PayloadAction<IUser>) => {}
    },
});