/*

class Redux {

    const state = {...}

dispatch(arg) {

    this.CalculateReducer(this.state, arg)

}

}
*/

export default function CalculatorReducer(state = {
    value1: 0,
    value2: 0,
    result: 0 
}, action) {

    /*
    {type: SET_VALEU1, value: 100}
    */
    if (action.type === "SET_VALUE1") {
        return {
            value2: state.value2,
            result: state.result, 
            value1: Number(action.value) 
        }
    } else if (action.type === "SET_VALUE2") {
        return {
            ...state, value2: Number(action.value)
        }
    } else if (action.type === "ADD") {
        return {
            ...state, result: state.value1 + state.value2
        }
    }
    return state

} 