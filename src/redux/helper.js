export function BuyCake(state) {
    return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1
    }
}
export function GetTestimonials(state) {
    return [
        ...state,
    ]
}