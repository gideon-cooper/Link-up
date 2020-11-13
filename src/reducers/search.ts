import {SEARCH} from "../actions"


const initialState: object[] = []

const search = (state = initialState, action) => {
    switch(action.type){
        case SEARCH:
            return action.details
        default:
            return state
    }
}
export default search