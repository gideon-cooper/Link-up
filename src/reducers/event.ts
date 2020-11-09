import {ADD_EVENT} from "../actions"

const initialState = []

const event = (state = initialState, action) => {
    switch(action.type){
        case ADD_EVENT:
            return [...state, action.event]
        default:
            return state
    }
}
export default event