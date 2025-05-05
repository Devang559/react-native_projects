import { createSlice } from '@reduxjs/toolkit';

const Userslice = createSlice({
  name: 'users',
  initialState: {
    users:[],
  },
  reducers: {
    addUser: (state, action) => {
        state.users.push(action.payload);
      },
      deleteUser: (state, action) => {
        state.users.splice(action.payload, 1);
      },
      update:(state,action)=>{
        state.users[action.payload.index] = action.payload.data; 
      }
  },
});

export const { addUser,deleteUser,update} = Userslice.actions;
export default Userslice.reducer;
