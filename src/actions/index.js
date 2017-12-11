import {CALCULATE_LOAN} from "../types/types";
import axios from 'axios';

const API_URL = 'https://js-developer-second-round.herokuapp.com/api/v1/application/first-loan-offer?';
const API_URL_2 = 'https://js-developer-second-round.herokuapp.com/api/v1/application/real-first-loan-offer?';

export const calculateLoan = (amount, term) => {
	const request = axios.get(`${API_URL_2}amount=${amount}&term=${term}`);

	return {
		type: CALCULATE_LOAN,
		payload: request
	}
};