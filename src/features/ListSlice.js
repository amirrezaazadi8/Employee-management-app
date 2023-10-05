import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    employee: {
        firstName: '',
        lastName: '',
        email: '',
        salary: '',
        data: "",
    },
    allEmployees: []
};


const listSlice = createSlice({
    name: 'list',
    initialState: initialState,
    reducers: {
        setUserPayload: (state, action) => {
            const newUser = action.payload
            state.allEmployees.push({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                salary: newUser.salary,
                data: newUser.data
            })
        }
    }
});

export default listSlice.reducer;
export const { setUserPayload } = listSlice.actions;
