import {ADD_EVENT} from "../actions"
import {ADD_PERSON} from "../actions"

const initialState: object[] = []
interface eventobject{
    id: string
    location: string,
    name: string,
    attendees: number, 
    description: string,
    image:string
}

const addEvent = (state = initialState, action) => {
    switch(action.type){
        case ADD_EVENT:
            return [...state, action.event]
        case ADD_PERSON:
            return state.map((event: eventobject) => {
                if(event.id === action.event.id){
                    return action.event
                }
                return event
            })
        default:
            return state
    }
}
export default addEvent