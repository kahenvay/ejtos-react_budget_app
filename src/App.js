import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Remaining from './components/Remaining';
import Budget from './components/Budget';

import { AppProvider } from './context/AppContext';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';

const App = () => {
	return (
		<AppProvider>
			<div className="container">
				<h1 className="mt-3">Company's Budget Allocation</h1>
				<div className="row mt-3">
					<div className="col-sm">
						<Budget />
					</div>
					<div className="col-sm">
						<Remaining />
					</div>
					<div className="col-sm">
						<ExpenseTotal />
					</div>
					<div className="col-sm">
						<Currency />
					</div>
				</div>
				<h2 className="mt-3">Allocation</h2>
				<div className="row mt-3">
					<div className="col-sm">
						<ExpenseList />
					</div>
				</div>
				<h2 className="mt-3">Change allocation</h2>
				<div className="row mt-3">
					<div className="col-sm">
						<AllocationForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};
export default App;
