import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        size:0,
        sum:0
    },
    reducers:{
        updateSize: (state, action)=>{
            state.size = action.payload;
        }
    }
})
export default counterSlice.reducer;
export const {updateSize} =  counterSlice.actions;