import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./asyncstore";

const favouriteSlice = createSlice({
    name: "Favourite",
    initialState: {
        items:[],
        headerbtn: false,
        loading: false,
        entities: []
    },
    reducers: {
        addItem: (state,action) => {
            if(!state.items.includes(action.payload)){
            state.items.push(action.payload);
            }
        },
        removeItem: (state,action) =>{
            console.log('hii',action.payload,state.items)
            state.items = state.items.filter((data)=>  data !== action.payload)
        },
        hidemodal: (state,action)=>{
            state.headerbtn = !state.headerbtn;
        }
        },
    extraReducers:{
        [getPosts.pending] : (state)=>{
            state.loading = true

        },
        [getPosts.fulfilled] : (state,{payload}) =>{
            state.loading = true
            state.entities= payload
        },
        [getPosts.rejected]: (state) => {
            state.loading = false
          },
    }
})

export const {addItem,removeItem,hidemodal} = favouriteSlice.actions;

export default favouriteSlice.reducer;