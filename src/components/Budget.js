import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget, expenses, currency } = useContext(AppContext);
	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);
	const [newBudget, setNewBudget] = useState(budget);
	const handleBudgetChange = (event) => {
		// console.log('old budget', budget, 'new budget', event.target.value);
		if (event.target.value > 20000) {
			alert('The budget cannot exceed 20000!');
		} else if (event.target.value < totalExpenses) {
			alert('The budget cannot be inferior to the spending: ', totalExpenses);
		} else {
			setNewBudget(event.target.value);
		}
	};
	return (
		<div className="alert alert-secondary">
			<span>Budget: {currency}</span>
			<input
				type="number"
				step="10"
				value={newBudget}
				onChange={handleBudgetChange}
			></input>
		</div>
	);
};
export default Budget;
