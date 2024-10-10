import { configureStore, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name:"mode",
    initialState:"",
    reducers:{
        setMode:(state,action)=>{
            return action.payload
        }
    }
})

const store = configureStore({
    reducer:{
        mode:slice.reducer
    }
});
console.log("oncreate store", store.getState())


export default store
export const {setMode} = slice.actions
// export default slice.reducer