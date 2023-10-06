import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employee: {
        firstName: '',
        lastName: '',
        email: '',
        salary: '',
        date: "",
    },
    editEmployee: [],
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
        },
        editUser: (state, action) => {
            const email = action.payload;
            state.editEmployee = state.allEmployees.filter(employee => employee.email === email);
        },
        removeEdit: (state) => {
            state.editEmployee = []
        }
    }
});

export default listSlice.reducer;
export const { setUserPayload, deleteUser, editUser, removeEdit } = listSlice.actions;
