import { createSlice } from '@reduxjs/toolkit'

export interface IsLoadingSlice {
value: boolean
}

const initialState: IsLoadingSlice = {
value: true,
}

export const isLoadingSlice = createSlice({
name: 'isLoading',
initialState,
reducers: {
     setLoading: (state, action) => {

        return action.payload;
     },

},
})


export const { setLoading } = isLoadingSlice.actions

export default isLoadingSlice.reducer