import {combineReducers} from 'redux'
import addEvent from "./addEvent"
import userEvents from "./userEvents"
import getUserEvents from "./getUserEvents"
import search from "./search"
import userInformation from "./userInformation"

export default combineReducers({
    addEvent,
    userEvents,
    getUserEvents,
    search,
    userInformation
})