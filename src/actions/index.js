import { ADD_TODO, DELETE_TODO } from "../constants/Constants"

const addToDo = (data) => {
    return {
        type: ADD_TODO,
        data: data
    }
}
const deleteToDo = (id) => {
    return {
        type: DELETE_TODO,
        id: id
    }
}
export { addToDo, deleteToDo };