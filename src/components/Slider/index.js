import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Slider extends Component {
	render() {
		const { min, max, step } = this.props.config;
		return (
		<input
			type="range"
			min={ min }
			max={ max }
			step={ step }
			value={ this.props.value }
			onChange={(e) => this.props.onChange(e.target.value)}
		/>
		)
	}
}

Slider.propTypes = {
		config: Proptypes.shape({
			min: Proptypes.number,
			max: Proptypes.number,
			step: Proptypes.number,
			defaultValue: Proptypes.number
		}),
	onChange: Proptypes.func,
};

export default Slider;