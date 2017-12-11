import React, { Component } from 'react';
import Proptypes from 'prop-types';

class SelectBox extends Component {
	renderOptions() {
		const { min, max, step } = this.props.config;
		const values = [];
		let i = min;
		while (i <= max) {
			values.push(i);
			i += step;
		}
		return values.map(value => {
			return (
				<option key={value} value={value}>{value}</option>
			)
		}
		);
	}

	render() {
		return (
			<div>
				SelectBox
				<select
					onChange={(e) => this.props.onChange(e.target.value)}
					value={this.props.value}
				>
					{this.renderOptions()}
				</select>
			</div>
		);
	}
}

SelectBox.propTypes = {
		config: Proptypes.shape({
			min: Proptypes.number,
			max: Proptypes.number,
			step: Proptypes.number,
			defaultValue: Proptypes.number
		}),
	onChange: Proptypes.func,
};

export default SelectBox;