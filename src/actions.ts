export const ADD_EVENT = 'ADD_EVENT'
export const USER_EVENTS = "USER_EVENTS"
export const ADDUSER_EVENT = "ADDUSER_EVENT"
export const GETUSER_EVENTS = "GETUSER_EVENTS"
export const REMOVEUSER_EVENT = "REMOVEUSER_EVENT"

export const addEvent = (event: object) => {
    return  {
        type: ADD_EVENT,
        event
    }
}
export const userEvents = (events: object[]) => {
    return {
        type: USER_EVENTS,
        events
    }
}
export const addUserEvent = (event: object) => {
    return {
        type: ADDUSER_EVENT,
        event
    }
}
export const removeUserEvent = (event: object) => {
    return {
        type: REMOVEUSER_EVENT,
        event
    }
}
export const getUserEvents = (events: object[]) => {
    return {
        type: GETUSER_EVENTS,
        events
    }
}