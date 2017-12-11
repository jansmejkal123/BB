import React, { Component } from 'react';
import Proptypes from 'prop-types';
import _ from 'lodash';

import Slider from '../Slider';
import SelectBox from '../SelectBox';

class TermComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: props.config.defaultValue,
		}
	}

	onTermChange(num) {
		this.setState({term: num},
		_.debounce(() => this.props.onChange(this.state.term), 300)
		);
	}
	render() {
		return (
		<div>
			<h1>Term: { this.state.term }</h1>
			<Slider
				config={ this.props.config }
				value={ this.state.term }
				onChange={ this.onTermChange.bind(this) }
			/>
			<SelectBox
				config={ this.props.config }
				onChange={ this.onTermChange.bind(this) }
				value={ this.state.term}
			/>
		</div>
		)
	}
}

TermComponent.propTypes = {
	min: Proptypes.number,
	max: Proptypes.number,
	step: Proptypes.number,
	defaultValue: Proptypes.number,
	onChange: Proptypes.func,
};

export default TermComponent;