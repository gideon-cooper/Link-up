import {combineReducers} from 'redux'
import addEvent from "./addEvent"
import userEvents from "./userEvents"
import getUserEvents from "./getUserEvents"

export default combineReducers({
    addEvent,
    userEvents,
    getUserEvents
})