export const ADD_EVENT = 'ADD_EVENT'
export const TOTAL_EVENTS = "TOTAL_EVENTS"

export const addEvent = (event) => {
    return  {
        type: ADD_EVENT,
        event
    }
}
export const totalEvents = (events) => {
    return {
        type: TOTAL_EVENTS,
        events
    }
}