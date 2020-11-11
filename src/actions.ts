export const ADD_EVENT = 'ADD_EVENT'
export const USER_EVENTS = "USER_EVENTS"
export const GETUSER_EVENTS = "GETUSER_EVENTS"

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
export const getUserEvents = (events: object[]) => {
    return {
        type: GETUSER_EVENTS,
        events
    }
}