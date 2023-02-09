import React, { useState } from "react";

import "../styles/ExpenseForm.css";
import Card from "./Card";

const ExpenseForm = () => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredTitle(event.currentTarget.value);
	};

	const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredAmount(event.currentTarget.value);
	};

	const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredDate(event.currentTarget.value);
	};

	const resetAllInputs = () => {
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	const formSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		console.log(expenseData);
		resetAllInputs();
	};

	return (
		<Card className="expense-form">
			<form onSubmit={formSubmitHandler}>
				<div className="expense-form__title">
					<label htmlFor="expense-text">Title: </label>
					<input
						type="text"
						id="expense-text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div>
					<label htmlFor="expense-amount">Amount: </label>
					<input
						type="number"
						name=""
						id="expense-amount"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div>
					<label htmlFor="expense-date">Date: </label>
					<input
						type="date"
						id="expense-date"
						min="2022-01-01"
						max="2023-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
				<div className="expense-form__submit">
					<button type="submit">Add</button>
				</div>
			</form>
		</Card>
	);
};

export default ExpenseForm;
