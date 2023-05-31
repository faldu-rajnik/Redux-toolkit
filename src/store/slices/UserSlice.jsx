import {createSlice} from "@reduxjs/toolkit"
import { deleteUsers } from "../actions";
const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
            console.log(action.payload);
        },
        removeUser(state,action){
            console.log("hii");
            state.splice(action.payload,1)
        },
        // deleteUsers(state,action){
        //     console.log("deleteuserd call");
        //     return []
        // }
    },
    extraReducers(builder)
    {
        builder.addCase(deleteUsers,()=>{
            return []
        })
    }
})
console.log(userSlice.actions);
export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer