import { combineReducers } from "redux";
import toDoList from "./toDoList";

const rootReducers=combineReducers({
    toDoList:toDoList
})

export default rootReducers;