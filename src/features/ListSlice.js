import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employee: {
        firstName: '',
        lastName: '',
        email: '',
        salary: '',
        date: "",
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
                date: newUser.date,
            })
        },
        deleteUser: (state, action) => {
            const email = action.payload;
            state.allEmployees = state.allEmployees.filter(employee => employee.email !== email);
        }
    }
});

export default listSlice.reducer;
export const { setUserPayload, deleteUser } = listSlice.actions;
