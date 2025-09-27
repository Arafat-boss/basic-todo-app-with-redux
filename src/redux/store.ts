import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/counter/taskSlice'

// Create and configure the Redux store
export const store = configureStore({
  reducer: {
    todo : taskReducer,
    user: UserReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch