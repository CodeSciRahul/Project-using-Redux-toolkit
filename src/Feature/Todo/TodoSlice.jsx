import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState = {
    Todos: [{
        id: 1,
        text: "Jai shree krishna",
    }]
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addtodo: (state,action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
           state.Todos.push(todo)
        },

        removetodo: (state, action) => {
            state.Todos = state.Todos.filter((todo)=>{
              return todo.id!==action.payload
        })
            
        },

    }
})

export const {addtodo,removetodo} = TodoSlice.actions
export default TodoSlice.reducer

