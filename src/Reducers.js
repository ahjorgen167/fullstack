import { combineReducers } from 'redux';
import CalculatorReducer from './Calculator';
// import CounterReducer from './CounterReducer';
// import TimesClickedReducer from './TimesClickedReducer'

export default combineReducers({
    calculator: CalculatorReducer,
    // lastTimeButtonPressed: 
    // count: CounterReducer, //{type: "INCREASE"}
    // timesClicked: TimesClickedReducer,  //{type: "INCREASE"}

})