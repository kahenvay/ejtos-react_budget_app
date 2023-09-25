import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch, currency } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	const increaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});
	};

	const decreaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: 'RED_EXPENSE',
			payload: expense,
		});
	};

	return (
		<tr>
			<td>{props.name}</td>
			<td>
				{currency}
				{props.cost}
			</td>
			<td>
				<span
					style={{
						borderRadius: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '32px',
						height: '32px',
						backgroundColor: '#4fac5b',
						fontSize: '36px',
						fontWeight: 'bold',
						overflow: 'hidden',
					}}
				>
					<button
						style={{
							border: 'none',
							color: '#fff',
							backgroundColor: 'transparent',
							transform: 'translate(0px,-2.5px)',
						}}
						onClick={(event) => increaseAllocation(props.name)}
					>
						+
					</button>
				</span>
			</td>
			<td>
				<span
					style={{
						borderRadius: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '32px',
						height: '32px',
						backgroundColor: '#af2319',
						fontSize: '36px',
						fontWeight: 'bold',
						overflow: 'hidden',
					}}
				>
					<button
						style={{
							border: 'none',
							color: '#fff',
							backgroundColor: 'transparent',
							transform: 'translate(0px,-2.5px)',
						}}
						onClick={(event) => decreaseAllocation(props.name)}
					>
						-
					</button>
				</span>
			</td>
			<td>
				<TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
			</td>
		</tr>
	);
};

export default ExpenseItem;
