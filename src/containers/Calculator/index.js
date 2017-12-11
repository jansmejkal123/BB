import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { calculateLoan } from '../../actions';

import AmountComponent from '../../components/AmountComponent/index';
import TermComponent from '../../components/TermComponent/index';
import ResultList from '../../components/ResultList';

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: props.config.amount.defaultValue,
			term: props.config.term.defaultValue,
		}
	}

	componentDidMount() {
		this.props.calculateLoan(this.state.amount, this.state.term);
	}

	onAmountChange(amount) {
		this.setState({amount}, () => this.onValueChange());
	}

	onTermChange(term) {
		this.setState({term}, () => this.onValueChange());
	}

	onValueChange() {
		this.props.calculateLoan(this.state.amount, this.state.term);
	}

	render() {
		return (
		<div className={'calculator'}>
			<AmountComponent config={this.props.config.amount} onChange={this.onAmountChange.bind(this)}/>
			<TermComponent config={this.props.config.term} onChange={this.onTermChange.bind(this)}/>
			<ResultList result={this.props.result}/>
		</div>
		)
	}
}

Calculator.defaultProps = {
	config: {
		amount: {
			min: 0,
			max: 200,
			step: 10,
			defaultValue: 100,
		},
		term: {
			min: 200,
			max: 2000,
			step: 20,
			defaultValue: 1000,
		}
	}
};

Calculator.propTypes = {
	config: Proptypes.shape({
		amount: Proptypes.shape({
			min: Proptypes.number,
			max: Proptypes.number,
			step: Proptypes.number,
			defaultValue: Proptypes.number
		}),
		term: Proptypes.shape({
			min: Proptypes.number,
			max: Proptypes.number,
			step: Proptypes.number,
			defaultValue: Proptypes.number
		}),
	}),
	calculateLoan: Proptypes.func,
	result: Proptypes.oneOfType([Proptypes.shape({
		totalPrincipal: Proptypes.oneOfType([Proptypes.number, Proptypes.string]),
		term: Proptypes.oneOfType([Proptypes.number, Proptypes.string]),
		totalCostOfCredit: Proptypes.number,
		totalRepayableAmount: Proptypes.number,
		monthlyPayment: Proptypes.number,
	}), Proptypes.bool])
};

const mapStateToProps = state => ({
	result: state.loanCalcResult,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({calculateLoan}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);