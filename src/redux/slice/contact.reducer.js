import {createSlice} from "@reduxjs/toolkit";

//name initialState fix you can not change it
const initialState = [
    {id: 1, name: 'soheil', number: '0919', country: 'iran', todo: [{id: 1, title: 'buy ticket', status: false}]},
    {id: 2, name: 'sobhan', number: '0912', country: 'spain', todo: [{id: 1, title: 'buy milk', status: false}]},
]

export const ContactSlice = createSlice({
    //name is product name
    name: 'contacts',
    //initialState
    initialState,
    //reducers are actions in my product
    reducers: {
        deleteContact: (state, action) => {
            const {payload} = action
            const index = state.findIndex(contact => contact.id === payload)
            state.splice(index, 1)
        },
        addContact: (state, action) => {
            //action => {payload:object}
            const {payload} = action
            state.push(payload)
        },
        updateContact: (state, action) => {
            //action => {payload:object}
            const {payload} = action
            const index = state.findIndex(state => state.id === payload.id)
            state[index] = payload
        }
    }
})

export const {deleteContact, addContact, updateContact} = ContactSlice.actions

//always you must export default slice.reducer
export default ContactSlice.reducer


