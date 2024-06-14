import { createSlice } from "@reduxjs/toolkit";
const SeacrhSlice = createSlice({
    name : 'search',
    initialState : {
        search : "",
    },
    reducers : {
        setSearch : (state,action) => {
            state.search = action.payload
        },
    },
})

export const {setSearch} = SeacrhSlice.actions
export default SeacrhSlice.reducer