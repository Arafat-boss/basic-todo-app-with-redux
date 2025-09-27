import reducer from "./taskSlice";


interface IUser {
    id: string;
    name: string;
    email: string;
}

const initialState = {
    users: [] as IUser[],
};

type DraftUser =  Pick<IUser, 'name' >;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // add user
    addUser: (state, action: PayloadAction<IUser>) => {}
    },
});