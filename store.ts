
import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './slices/entries/counterSlice'
import entriesSlice from './slices/entries/entriesSlice'
import isLoadingSlice from './slices/isLoadingSlice'
import sidebarSlice from './slices/ui/sidebarSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    sidebar: sidebarSlice,
    entries: entriesSlice,
    isLoading: isLoadingSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch