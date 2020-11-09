import {TOTAL_EVENTS} from "../actions"

const initialState = []

const totalEvents = (state = initialState, action) => {
    switch(action.type){
        case TOTAL_EVENTS:
            return action.events
        default:
            return state
    }

}
export default totalEvents