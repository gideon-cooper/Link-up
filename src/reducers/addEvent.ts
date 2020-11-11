import {ADD_EVENT} from "../actions"

const initialState: object[] = []

const addEvent = (state = initialState, action) => {
    switch(action.type){
        case ADD_EVENT:
            return [...state, action.event]
        default:
            return state
    }
}
export default addEvent