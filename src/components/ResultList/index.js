import React, { Component } from 'react';
import Proptypes from 'prop-types';

class ResultList extends Component {
	render() {
		return (
			<ul>
				<li>TotalPrincipal: {this.props.result.totalPrincipal}</li>
				<li>term: {this.props.result.term}</li>
				<li>totalCostOfCredit: {this.props.result.totalCostOfCredit}</li>
				<li>totalRepayableAmount: {this.props.result.totalRepayableAmount}</li>
				<li>monthlyPayment: {this.props.result.monthlyPayment}</li>
			</ul>
		)
	}
}

ResultList.PropTypes = {
	result: Proptypes.shape({
		totalPrincipal: Proptypes.oneOfType([Proptypes.number, Proptypes.string]),
		term: Proptypes.oneOfType([Proptypes.number, Proptypes.string]),
		totalCostOfCredit: Proptypes.number,
		totalRepayableAmount: Proptypes.number,
		monthlyPayment: Proptypes.number,
	}),
};

export default ResultList;