import {combineReducers} from 'redux'
import addEvent from "./addEvent"
import totalEvents from "./totalEvents"

export default combineReducers({
    addEvent,
    totalEvents
})