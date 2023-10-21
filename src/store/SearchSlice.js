import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: "SearchSlice",
    initialState:{
    },
    reducers:{
        cacheResult: (state,action)=>{
            state = Object.assign(state,action.payload);
        }

    }
})
export const {cacheResult} = SearchSlice.actions;
export default SearchSlice.reducer;