import {USER_EVENTS} from "../actions"
import {REMOVEUSER_EVENT} from "../actions"

const initialState: object[] = []

const userEvents = (state = initialState, action) => {
    switch(action.type){
        case USER_EVENTS:
            return [...state, action.events]
       
        default:
            return state
    }

}
export default userEvents