import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
    name:"todoList",
    initialState:{
        listTask: []
    },
    reducers:{
        addTask: (state,action)=>{
            state.listTask.push(action.payload);
        },
        removeTask: (state,action)=>{
            state.listTask = state.listTask.filter((task)=> task !== action.payload)
        },
        editTask: (state,action)=>{
            let {index,editVal} = action.payload
            //let val =state.listTask.indexOf(action.payload);
            console.log('index val==',action.payload)
            state.listTask[index]= editVal;

        },
        deleteAllTask: (state) =>{
            state.listTask =[];
        }
    }
})

export const {addTask,removeTask,editTask,deleteAllTask} = todo.actions;
export default todo.reducer;