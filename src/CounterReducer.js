// STATE
// the current value of our count
// ACTION: 
// {type: 'INCREASE'}


export default function CounterReducer(count = 0, action) {
    console.log(action)
    if (action.type === "INCREASE") {
        return count + 1;
    }
    if (action.type == "DECREASE") {
        return count - 1;
    }
    return count;
}