import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Select from 'react-select';

import './currency.css';

const Currency = () => {
	const { dispatch, currency } = useContext(AppContext);

	const handleSelectChange = (selectedOption) => {
		dispatch({
			type: 'CHG_CURRENCY',
			payload: selectedOption ? selectedOption.value : null,
		});
	};

	const options = [
		{ value: '$', label: '$ Dollar' },
		{ value: '£', label: '£ Pound' },
		{ value: '€', label: '€ Euro' },
		{ value: '₹', label: '₹ Rupee' },
	];

	const customStyles = {
		control: (provided) => ({
			...provided,
			backgroundColor: '#93e499',
			color: '#FFF',
		}),
		option: (provided, state) => ({
			...provided,
			backgroundColor: state.isFocused ? '#f9fafc' : '#93e499',
			color: state.isSelected ? '#0f5132' : '#0f5132',
		}),
		singleValue: (provided) => ({
			...provided,
			color: '#FFF',
		}),
		placeholder: (provided) => ({
			...provided,
			color: '#FFF',
		}),
		indicatorSeparator: () => ({
			display: 'none',
		}),
		dropdownIndicator: (provided) => ({
			...provided,
			color: '#FFF',
		}),
		menu: (provided) => ({
			...provided,
			backgroundColor: '#93e499',
			// If there's any border or margin, consider resetting them too
			border: 'none',
			margin: 0,
		}),
		menuList: (provided) => ({
			...provided,
			padding: 0, // Resetting padding here
			backgroundColor: '#93e499',
		}),
	};

	const selectedValue = options.find((opt) => opt.value === currency);

	return (
		<div className="alert alert-secondary">
			<Select
				options={options}
				styles={customStyles}
				isSearchable={false}
				placeholder="Currency (...)"
				formatOptionLabel={(data, meta) => {
					switch (meta.context) {
						case 'value':
							return `Currency (${data.label})`; // display in the control box
						case 'menu':
							return data.label; // display in the dropdown
						default:
							return data.label;
					}
				}}
				onChange={handleSelectChange}
				value={selectedValue}
			/>
		</div>
	);
	// return (
	// 	<div className="alert alert-secondary">
	// 		<span>Currency: </span>
	// 		<select
	// 			value={currency}
	// 			onChange={handleSelectChange}
	// 			style={{
	// 				backgroundColor: '#93e499',
	// 				color: '#fff',
	// 				borderRadius: '5px',
	// 				borderWidth: 0,
	// 				padding: '5px',
	// 			}}
	// 		>
	// 			<option className="currency-option" value="£">
	// 				Pound: £ (GBP)
	// 			</option>
	// 			<option className="currency-option" value="$">
	// 				Dollar: $ (USD)
	// 			</option>
	// 			<option className="currency-option" value="€">
	// 				Euro: € (EUR)
	// 			</option>
	// 			<option className="currency-option" value="₹">
	// 				Rupee: ₹ (INR)
	// 			</option>
	// 		</select>
	// 	</div>
	// );
};
export default Currency;
