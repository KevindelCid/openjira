import { createSlice } from '@reduxjs/toolkit'


export interface SideState {
value: boolean
}

const initialState: SideState = {
value: false,
}

export const sidebarSlice = createSlice({
name: 'sidebar',
initialState,
reducers: {
    isSidebarOpen: (state) => {

     state.value = !state.value
     },

},
})


export const { isSidebarOpen } = sidebarSlice.actions

export default sidebarSlice.reducer