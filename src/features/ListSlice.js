import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    salary: 0
};

const listSlice = createSlice({
    name: 'list',
    initialState: initialState,
    reducers: {
        setUserPayload: (state, action) => {
            state = action.payload
        }
    }
});

export default listSlice.reducer;
export const {setUserPayload}=listSlice.actions;

