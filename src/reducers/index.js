import { combineReducers } from "redux";
import lisReducer from './listReducer';

export default combineReducers({
    lisReducer: lisReducer
});
