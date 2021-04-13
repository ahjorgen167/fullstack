import React from 'react';
import { connect} from 'react-redux'

class CounterIncreaser extends React.Component {

    constructor(props) {
        super(props);
        console.log("Hello, my number is " + this.props.num)

    }

    render() {

        return (
            <div>
                <h3>This is also the count from state: {this.props.countFromState}</h3>
                <button onClick={() => this.props.incrementFunc()}>Increment Count By {this.props.num}</button>
            </div>

        )

    }

}

let mapDispatchToProps = function(dispatch, props) {
    return {
        incrementFunc: () => {
            dispatch({type: "INCREASE"})
        },
        decrementFunc: () => {
            dispatch({type: "DECREASE"})
        }
    }
}

let mapStateToProps = function(state, props) {
    return {
        countFromState: state.count,
        timeButtonWasClicked: state.timesClicked,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterIncreaser)
