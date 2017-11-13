import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {
	render() {
		return (<div>
			{' '}
			<button onClick={this.props.onIncrementAsync}>+1</button>
			<hr/>
			<div>
				Clicked: {this.props.value} times
			</div>
		</div>)
	}
}

Counter.propTypes = {
	value : PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired,
	onIncrementAsync: PropTypes.func.isRequired
};

export default Counter;
