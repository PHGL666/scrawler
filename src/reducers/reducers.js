import {combineReducers} from "redux";
import todo from "./todo";

const todoApplication = combineReducers({
    todo
});

export default todoApplication;