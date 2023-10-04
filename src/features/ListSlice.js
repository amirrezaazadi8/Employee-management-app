import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {
        firstName: '',
        lastName: '',
        email: '',
        salary: '',
        data: "",
    }
};


const listSlice = createSlice({
    name: 'list',
    initialState: initialState,
    reducers: {
        setUserPayload: (state, action) => {
            state.user = action.payload
        }
    }
});

export default listSlice.reducer;
export const { setUserPayload } = listSlice.actions;
