import {USER_INFORMATION} from "../actions"


const initialState: string = ''

const userInformation = (state = initialState, action) => {
    switch(action.type){
        case USER_INFORMATION:
            return action.email
        default:
            return state
    }

}
export default userInformation