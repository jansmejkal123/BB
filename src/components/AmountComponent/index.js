import React, { Component } from 'react';
import Proptypes from 'prop-types';
import _ from 'lodash';

import Slider from '../Slider';
import SelectBox from '../SelectBox';

class AmountComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: props.config.defaultValue,
		}
	}
	onAmountChange(num) {
		this.setState({amount: num},
		_.debounce(() => this.props.onChange(this.state.amount), 300)
		)
	}
	render() {
		return (
			<div>
				<h1>Amount: { this.state.amount }</h1>
				<Slider
					config={ this.props.config }
					value={this.state.amount}
					onChange={this.onAmountChange.bind(this)}
				/>
				<SelectBox
					config={ this.props.config }
					onChange={this.onAmountChange.bind(this)}
					value={this.state.amount}
				/>
			</div>
		)
	}
};

AmountComponent.propTypes = {
	min: Proptypes.number,
	max: Proptypes.number,
	step: Proptypes.number,
	defaultValue: Proptypes.number,
	onChange: Proptypes.func,
};

export default AmountComponent;