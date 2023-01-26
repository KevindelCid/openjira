import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { entriesApi } from '../../apis'
import { Entry } from '../../interfaces'
import { IEntry } from '../../models'
import type {} from 'redux-thunk/extend-redux';
import { setLoading } from '../isLoadingSlice';

export interface EntrySlice {
value: IEntry[]
}

const initialState: EntrySlice = {
value: [],
}

export const entrySlice = createSlice({
name: 'entry',
initialState,
reducers: {
     getEntries: (state, action) => {
      
        return { value: action.payload}
     },

},
})



export const getEntriesThunk =  () => (dispatch: Dispatch) => {

 


    return  entriesApi.get<Entry[]>('/entries')
        .then(res => {
           
            dispatch(getEntries(res.data))
         
        })
}



export const AddEntryThunk =  (description:string) => (dispatch: Dispatch) => {

 


    return  entriesApi.post('/entries', {description})
        .then(res => {
           
            dispatch(getEntriesThunk())
         
        })
}






export const { getEntries } = entrySlice.actions

export default entrySlice.reducer