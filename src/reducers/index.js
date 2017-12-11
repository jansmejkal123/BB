import { combineReducers } from 'redux';
import loanCalcResult from './loanCalcResult';


const rootReducer = combineReducers({
	loanCalcResult: loanCalcResult
});

export default rootReducer;
