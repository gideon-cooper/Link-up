import {GETUSER_EVENTS} from "../actions"

const initialState = []

const getUserEvents = (state = initialState, action) => {
    switch(action.type){
        case GETUSER_EVENTS:
            return action.events
        default:
            return state
    }
}
export default getUserEvents