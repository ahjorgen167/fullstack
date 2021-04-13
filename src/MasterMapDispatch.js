export const incrementDispatch = function(dispatch, props) {
    return {
        incrementFunc: () => {
            dispatch({type: "INCREASE"})
        },
        decrementFunc: () => {
            dispatch({type: "DECREASE"})
        }
    }
}