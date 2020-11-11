import {GETUSER_EVENTS} from "../actions"

const initialState: object[] = []

const getUserEvents = (state = initialState, action) => {
    switch(action.type){
        case GETUSER_EVENTS:
            return action.events
        default:
            return state
    }
}
export default getUserEvents