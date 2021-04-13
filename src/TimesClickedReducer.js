export default function TimesClickedReducer(clickedState = 0, action) {
    if (action.type === "INCREASE" || action.type == "DECREASE" || action.type == "CLEAR") {
        return clickedState + 1;
    }

    return clickedState;
}