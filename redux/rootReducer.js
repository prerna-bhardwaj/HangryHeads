import { combineReducers } from "redux";
import userReducer from './user/userReducer';
import outletReducer from "./outlet/outletReducer";

const rootReducer = combineReducers({
    users: userReducer,
    outlets: outletReducer,
});

export default rootReducer;
