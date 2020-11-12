import {GETUSER_EVENTS} from "../actions"
import {ADDUSER_EVENT} from "../actions"
import {REMOVEUSER_EVENT} from "../actions"

const initialState: object[] = []
interface eventobject{
    id: string
    location: string,
    name: string,
    attendees: number, 
    description: string,
    image:string
}

const getUserEvents = (state = initialState, action) => {
    switch(action.type){
        case GETUSER_EVENTS:
            return action.events
        case ADDUSER_EVENT:
            return [...state, action.event]
        case REMOVEUSER_EVENT:
            return state.filter((event: eventobject) => event.id !== action.event.id)
        default:
            return state
    }
}
export default getUserEvents