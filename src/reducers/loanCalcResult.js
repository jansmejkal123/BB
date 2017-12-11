import { CALCULATE_LOAN } from "../types/types";

const initState = {
	totalPrincipal: 0,
	term: 0,
	totalCostOfCredit: 0,
	totalRepayableAmount: 0,
	monthlyPayment: 0,
	amount: 0
};

const loanCalcResult = (state = initState, action) => {
	switch(action.type) {
		case CALCULATE_LOAN: {
			return action.payload.data;
		}
		default: {
			return state;
		}
	}
};

export default loanCalcResult;