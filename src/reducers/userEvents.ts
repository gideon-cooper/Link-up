import {USER_EVENTS} from "../actions"

const initialState = []

const userEvents = (state = initialState, action) => {
    switch(action.type){
        case USER_EVENTS:
            return [...state, action.events]
        default:
            return state
    }

}
export default userEvents