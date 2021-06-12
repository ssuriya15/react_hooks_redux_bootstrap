
export default function loginReducer(state,action){
    switch (action.type){
        case "FETCHING_DATA":
            return {
                ...state,
                data:action.data
            }
        /* case "FETCHING_COUNT":
            return {
                ...state,
                count:action.count
            } */

        default:
            return {...state}
    }
}